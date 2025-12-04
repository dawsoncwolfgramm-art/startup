// hotTakesNotifier.js

const HotEvent = {
  System: 'system', 
  Join: 'userJoin',
  Vote: 'voteCast',    
  Comment: 'commentPosted', 
  TopicChange: 'topicChange' 
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value; 
  }
}

class HotTakesEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    this.socket.onopen = () => {
      this.receiveEvent(new EventMessage('HotTakes', HotEvent.System, { msg: 'connected' }));
    };

    this.socket.onclose = () => {
      this.receiveEvent(new EventMessage('HotTakes', HotEvent.System, { msg: 'disconnected' }));
    };

    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch (e) {
        console.error('Failed to parse websocket message', e);
      }
    };
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
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
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const HotTakesNotifier = new HotTakesEventNotifier();

export { HotEvent, HotTakesNotifier };
