import { useState } from "react";

export default function TicketForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  async function handleSubmit(e) {
    e.preventDefault();
    // TODO(sec): userId is hardcoded; it comes from the JWT in future
    const ok = await onAdd({ title, description, priority, userId: 1 });
    if (ok) {
      setTitle("");
      setDescription("");
      setPriority("Medium");
    }
  }

 return (
    <form onSubmit={handleSubmit} className="card card-body d-flex flex-column gap-2">
    <input
        className="form-control"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
    />
    <input
        className="form-control"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
    />
    <select
        className="form-select"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
    >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Urgent</option>
    </select>
    <button type="submit" className="btn btn-primary">Add ticket</button>
    </form>
 )
}