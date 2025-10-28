import React from "react";

export function Comments({ category, topic, userName = "Anonymous" }) {
  const key = React.useMemo(() => `comments__${category}__${topic}`, [category, topic]);
  const [comments, setComments] = React.useState([]);
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    const raw = localStorage.getItem(key);
    setComments(raw ? JSON.parse(raw) : []);
  }, [key]);

  function save(next) {
    localStorage.setItem(key, JSON.stringify(next));
    setComments(next);
  }

  function submit(e) {
    e.preventDefault();
    const t = text.trim();
    if (!t) return;
    save([
      ...comments,
      { id: crypto.randomUUID?.() ?? String(Date.now()), by: userName, text: t, ts: Date.now() },
    ]);
    setText("");
  }

  return (
    <section className="card mt-4">
      <div className="card-header">Comments</div>
      <div className="card-body">
        {comments.length === 0 ? (
          <p className="text-muted mb-3">Be the first to comment.</p>
        ) : (
          <ul className="list-group mb-3">
            {comments.map((c) => (
              <li key={c.id} className="list-group-item">
                <div className="small text-muted">
                  {c.by} • {new Date(c.ts).toLocaleString()}
                </div>
                <div>{c.text}</div>
              </li>
            ))}
          </ul>
        )}

        <form onSubmit={submit}>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Write a comment…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="text-end mt-2">
            <button className="btn btn-primary" type="submit">Post</button>
          </div>
        </form>
      </div>
    </section>
  );
}
