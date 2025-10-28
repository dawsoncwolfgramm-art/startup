// src/services/scoreService.js
const STORAGE_KEY = 'votes';

export function getVotes() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function recordVote(vote) {
  const list = getVotes();
  list.push({ ...vote, date: vote.date ?? new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function getAggregatedScores() {
  const votes = getVotes();
  const map = new Map();
  for (const v of votes) {
    const key = `${v.category}__${v.name}__${v.topic}`;
    if (!map.has(key)) {
      map.set(key, { category: v.category, name: v.name, topic: v.topic, yes: 0, no: 0 });
    }
    const row = map.get(key);
    if ((v.vote || '').toLowerCase() === 'yes') row.yes += 1;
    else row.no += 1;
  }
  return Array.from(map.values());
}

export function seedDemoVotes() {
  if (getVotes().length) return;
  const demo = [
    { category: 'Celebrities', name: 'Dawson Wolfgramm', topic: 'Travis Kelce made Taylor Swift famous?', vote: 'Yes' },
    { category: 'Celebrities', name: 'Dawson Wolfgramm', topic: 'Travis Kelce made Taylor Swift famous?', vote: 'No' },
    { category: 'Celebrities', name: 'Shae Cloward', topic: 'Travis Kelce made Taylor Swift famous?', vote: 'No' },
    { category: 'Politics', name: 'Savanah Hafer', topic: 'Socialism is better than Capitalism?', vote: 'Yes' },
  ];
  for (const d of demo) recordVote(d);
}
