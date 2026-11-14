import { useState, useEffect } from "react";

const API_URL = "http://localhost:5144/api/tickets";

function App() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load tickets");
        return res.json();
      })
      .then((data) => setTickets(data))
      .catch((err) => setError(err.message));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, priority, userId: 1 }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create ticket");
        return res.json();
      })
      .then((created) => {
        setTickets([...tickets, created]);
        setTitle("");
        setDescription("");
        setPriority("Medium");
      })
      .catch((err) => setError(err.message));
  }

  function handleDelete(id) {
  fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to delete ticket");
      setTickets(tickets.filter((t) => t.id !== id));
    })
    .catch((err) => setError(err.message));
}

  return (
    <div>
      <h1>Ticket Tracker</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Urgent</option>
        </select>
        <button type="submit">Add ticket</button>
      </form>

      {error && <p>{error}</p>}
      {!error && tickets.length === 0 && <p>No tickets yet.</p>}
      <ul>
        {tickets.map((t) => (
          <li key={t.id}>
          <strong>{t.title}</strong> ({t.status}, {t.priority})
          <p>{t.description}</p>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;