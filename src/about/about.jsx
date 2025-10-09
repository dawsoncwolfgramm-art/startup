import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="text-center quote-box">
      <div className="picture-box">
        <img src="public/2015-09-10 832.JPG" className="rounded" width="400px" alt="random" />
        {/* <!-- <img src="public/2015-09-10 832.JPG" className="img-fluid" alt="random"> --> */}
      </div>
      <p>
        Ever been stuck in awkward silence?
      </p>
      <p>
        My applicatoin gives you instant conversation starters, perfect for 
        parties, road trips, or just breaking the ice. In seconds, you’ll have everyone laughing, debating, 
        and connecting! It’s easy to use, fun for all ages, and makes talking to people way less stressful. 
        Whether you’re with friends or meeting someone new, you’ll always have something to say.
      </p>

      <div className="card my-4">
        <div className="card-header">
          <h5 className="mb-0">HOW TO USE</h5>
        </div>
        <div className="card-body">
          <p>
            The way to play the game is to first choose a topic that interests you. Then after the game has 
            started, ChatGPT will be sent a question to put up in the prompt window. This will be where you 
            will read and vote on whether you agree with or disagree with the prompt. 
          </p>
          <p>
            When pressed it will show the percentage of how many people said yes or no and then there will be 
            a chat underneath to talk to people who also have voted why they would choose that choice. 
          </p>
          <p>
            Anyone is invited and we hope this gives people more than just generic questions about one another.
          </p>
        </div>
      </div>
    </main>
  );
}