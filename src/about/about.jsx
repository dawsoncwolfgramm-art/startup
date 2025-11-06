import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="container my-4">
      <header className="text-center mb-4">
        <h1 className="h3 mb-2">Break the Ice in Seconds</h1>
        <p className="text-muted mb-0">
          Instant conversation starters for parties, road trips, classes, and first meetings.
        </p>
      </header>

      <section className="picture-box mb-4">
        <img
          src="2015-09-10 832.JPG"
          alt="Friends chatting and laughing—illustrating conversation starters in action"
          className="rounded img-fluid"
          loading="lazy"
        />
      </section>

      <section className="text-center mb-4">
        <p>
          Ever been stuck in an awkward silence? This application gives you instant, engaging prompts so
          you’re never out of things to say. In seconds, you’ll have people laughing, debating, and connecting.
        </p>
        <p>
          It’s easy to use, fun for all ages, and removes the stress of starting a conversation—whether
          you’re with friends or meeting someone new.
        </p>
      </section>

      <section className="card my-4" aria-labelledby="how-to-use-heading">
        <div className="card-header">
          <h2 id="how-to-use-heading" className="h6 mb-0">How to Use</h2>
        </div>
        <div className="card-body">
          <ol className="mb-3">
            <li>Choose a topic that interests you.</li>
            <li>Start the round—an on-screen prompt appears instantly.</li>
            <li>Vote: agree or disagree (or pick from multiple options).</li>
            <li>See live results, then jump into the chat to explain your take.</li>
          </ol>
          <p className="mb-0">
            Anyone can join. Expect more than generic “get-to-know-you” questions—these prompts spark real
            conversations.
          </p>
        </div>
      </section>
    </main>
  );
}
