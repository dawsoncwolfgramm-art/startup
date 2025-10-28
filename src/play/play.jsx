import React from "react";
import "./play.css";
import { useSearchParams } from "react-router-dom";
import { recordVote, getAggregatedScores } from "../scores/scoreService";
import { Comments } from "./Comments";   // 👈 updated import

export function Play({ userName = "Anonymous" }) {
  const [params] = useSearchParams();
  const category = params.get("category") || "Celebrities";
  const topic = "Travis Kelce made Taylor Swift Famous?";

  const [yesPct, setYesPct] = React.useState(0);
  const [noPct, setNoPct] = React.useState(0);

  function refresh() {
    const rows = getAggregatedScores();
    const r = rows.find(x => x.category === category && x.name === userName && x.topic === topic);
    if (!r) { setYesPct(0); setNoPct(0); return; }
    const total = r.yes + r.no || 1;
    const y = Math.round((r.yes / total) * 100);
    setYesPct(y);
    setNoPct(100 - y);
  }

  React.useEffect(() => { refresh(); }, [category, userName]);

  function vote(v) {
    recordVote({ category, topic, vote: v, name: userName });
    refresh();
  }

  function copyLink() {
    const url = `${window.location.origin}/play?category=${encodeURIComponent(category)}`;
    navigator.clipboard.writeText(url);
  }

  const shareUrl = encodeURIComponent(`${window.location.origin}/play?category=${encodeURIComponent(category)}`);

  return (
    <main className="play-page wrapper">
      {/* Share links */}
      <div className="share-simple text-center my-4">
        <h5>Share this</h5>
        <div className="d-flex justify-content-center gap-2">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent("Check this out")}`}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-info text-white"
          >
            Twitter
          </a>
          <button className="btn btn-secondary" onClick={copyLink}>
            Copy Link
          </button>
        </div>
      </div>

      {/* Vote section */}
      <h2 className="mb-3 text-center">Vote Your Hot Take?</h2>
      <div className="poll-card p-4 mb-3">
        <div className="poll-statement mb-3">{topic}</div>
        <div className="d-grid gap-2">
          <button className="btn btn-agree btn-lg" onClick={() => vote("Yes")}>AGREE</button>
          <button className="btn btn-disagree btn-lg" onClick={() => vote("No")}>DISAGREE</button>
        </div>
      </div>

      {/* Live results */}
      <h4 className="poll-result">Live Poll Results</h4>
      <div className="progress" style={{ height: 30 }}>
        <div className="progress-bar bg-success" style={{ width: `${yesPct}%` }}>
          {yesPct}% Agree
        </div>
        <div className="progress-bar bg-danger" style={{ width: `${noPct}%` }}>
          {noPct}% Disagree
        </div>
      </div>

      {/* Comments box */}
      <Comments category={category} topic={topic} userName={userName} />

      <small className="text-muted d-block mt-3">
        Votes and comments save locally; swap in an API later for real-time.
      </small>
    </main>
  );
}
