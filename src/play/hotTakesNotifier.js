// hotTakesNotifier.js

const HotEvent = {
  System: 'system',          // connected / disconnected
  Join: 'userJoin',          // someone opened the play page
  Vote: 'voteCast',          // someone voted YES/NO
  Comment: 'commentPosted',  // someone posted a comment
  TopicChange: 'topicChange' // headline/topic changed
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from; // usually the userName
    this.type = type; // one of HotEvent.*
    this.value = value; // arbitrary payload object
  }
}

class HotTakesEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    // assumes your server exposes /ws just like Simon
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    this.socket.onopen = () => {
      this.receiveEvent(new EventMessage('HotTakes', HotEvent.System, { msg: 'connected' }));
    };

    this.socket.onclose = () => {
      this.receiveEvent(new EventMessage('HotTakes', HotEvent.System, { msg: 'disconnected' }));
    };

    this.socket.onmessage = async (msg) => {
      try {
        // msg.data might be a Blob, so use .text()
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch (e) {
        console.error('Failed to parse websocket message', e);
      }
    };
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    // swallow errors if socket not ready yet
    try {
      this.socket.send(JSON.stringify(event));
    } catch (e) {
      console.error('Failed to send websocket message', e);
    }
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    // Simon’s version forgot to reassign – this one actually removes 🙂
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    // Call each handler with just the new event
    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

// singleton, like Simon’s GameNotifier
const HotTakesNotifier = new HotTakesEventNotifier();

export { HotEvent, HotTakesNotifier };
