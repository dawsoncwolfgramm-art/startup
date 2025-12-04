import React from "react";
import "./play.css";
import { useSearchParams } from "react-router-dom";
import { Comments } from "./Comments";

export function Play({ userName = "Anonymous" }) {
  const [params] = useSearchParams();
  const category = params.get("category") || "Politics";

  // topic is dynamic, defaults to the Kelce headline
  const [topic, setTopic] = React.useState(
    "Travis Kelce made Taylor Swift Famous?"
  );

  const [yesPct, setYesPct] = React.useState(0);
  const [noPct, setNoPct] = React.useState(0);

  // news state
  const [newsDesc, setNewsDesc] = React.useState("");
  const [loadingNews, setLoadingNews] = React.useState(false);
  const [newsErr, setNewsErr] = React.useState(null);

  // store up to 3 articles and a current index to rotate through
  const [articles, setArticles] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

async function refresh() {
  try {
    const res = await fetch(`/api/scores`);
    if (!res.ok) {
      setYesPct(0);
      setNoPct(0);
      return;
    }
    const rows = await res.json();

    // aggregate for THIS topic in THIS category (all users)
    const r = rows.find(
      (x) =>
        x.category === category &&
        x.topic === topic
    );

    if (!r) {
      setYesPct(0);
      setNoPct(0);
      return;
    }

    const total = r.yes + r.no || 1;
    const y = Math.round((r.yes / total) * 100);
    setYesPct(y);
    setNoPct(100 - y);
  } catch (err) {
    console.error("Failed to refresh scores", err);
    setYesPct(0);
    setNoPct(0);
  }
}


 async function vote(v) {
  try {
    const res = await fetch(`/api/vote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // credentials can stay or be removed since we removed auth on this route
      body: JSON.stringify({ category, topic, vote: v, name: userName }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      console.error('Vote failed:', body.msg || res.statusText);
      return;
    }

    await refresh();   // reload percentages from /api/scores
  } catch (err) {
    console.error("Failed to submit vote", err);
  }
}


  // include topic so results update when the headline changes
  React.useEffect(() => {
    (async () => {
      await refresh();
    })();
  }, [category, topic]); // userName removed from filter since we aggregate all users

  // fetch up to 3 news items from the API
  async function getNews() {
    try {
      setLoadingNews(true);
      setNewsErr(null);

      const url =
        "https://api.thenewsapi.com/v1/news/top?api_token=U9i3710LcAwewdxUrkKrzsvx4mIbqMK41kFoYFyQ&locale=us&language=en&limit=3";
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      const list = Array.isArray(json.data) ? json.data.slice(0, 3) : [];
      setArticles(list);
      setCurrentIndex(0); // start from the first one
    } catch (e) {
      setNewsErr(e.message || "Failed to load news");
      setArticles([]);
      setNewsDesc("");
    } finally {
      setLoadingNews(false);
    }
  }

  // load the initial news when the category changes
  React.useEffect(() => {
    getNews();
  }, [category]);

  // whenever articles or currentIndex changes, update topic + description
  React.useEffect(() => {
    if (!articles.length) return;

    const a = articles[currentIndex] || {};
    const newTitle = a.title || "Latest headline";
    const desc =
      a.description || a.snippet || a.content || "No description available.";

    setTopic(newTitle);  // voting title
    setNewsDesc(desc);   // description under the title
  }, [articles, currentIndex]);

  // Only rotate to the next headline when the user clicks the button
  function handleNewsClick() {
    if (articles.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    } else {
      // if we don't have articles yet, fetch them
      getNews();
    }
  }

  function copyLink() {
    const url = `${window.location.origin}/play?category=${encodeURIComponent(
      category
    )}`;
    navigator.clipboard.writeText(url);
  }

  const shareUrl = encodeURIComponent(
    `${window.location.origin}/play?category=${encodeURIComponent(category)}`
  );

  return (
    <main className="play-page wrapper">
      <div className="share-simple text-center my-4">
        <h5>Share this</h5>
        <div className="d-flex justify-content-center gap-2">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(
              "Check this out"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info text-white"
          >
            Twitter
          </a>
          <button className="btn btn-secondary" onClick={copyLink}>
            Copy Link
          </button>
        </div>
      </div>

      <h2 className="mb-3 text-center">Vote Your Hot Take?</h2>

      <div className="poll-card p-4 mb-3">
        {/* Title + rotate button in the voting block */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="poll-statement">{topic}</div>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={handleNewsClick}
            disabled={loadingNews}
          >
            {loadingNews ? "Loading..." : "Change topic"}
          </button>
        </div>

        {/* Show the current article description under the title */}
        {newsErr && (
          <div className="text-danger small mb-3">
            Error loading news: {newsErr}
          </div>
        )}
        {!newsErr && newsDesc && (
          <p className="text-muted small mb-3">
            {newsDesc}
          </p>
        )}

        <div className="d-grid gap-2">
          <button
            className="btn btn-agree btn-lg"
            onClick={() => vote("Yes")}
          >
            AGREE
          </button>
          <button
            className="btn btn-disagree btn-lg"
            onClick={() => vote("No")}
          >
            DISAGREE
          </button>
        </div>
      </div>

      <h4 className="poll-result">Live Poll Results</h4>
      <div className="progress" style={{ height: 30 }}>
        <div
          className="progress-bar bg-success"
          style={{ width: `${yesPct}%` }}
        >
          {yesPct}% Agree
        </div>
        <div
          className="progress-bar bg-danger"
          style={{ width: `${noPct}%` }}
        >
          {noPct}% Disagree
        </div>
      </div>

      <Comments category={category} topic={topic} userName={userName} />
    </main>
  );
}
