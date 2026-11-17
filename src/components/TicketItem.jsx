// TicketItem.jsx
const priorityColor = {
  Low: "success",
  Medium: "warning",
  High: "orange",
  Urgent: "danger",
};

export default function TicketItem({ ticket, onDelete }) {
  return (
    <li className="card card-body flex-row justify-content-between align-items-start">
      <div>
        <strong className="fs-5">{ticket.title}</strong>
        <p className="mb-2 text-secondary">{ticket.description}</p>
        <span className="badge text-bg-secondary me-2">{ticket.status}</span>
        <span className={`badge text-bg-${priorityColor[ticket.priority]}`}>
          {ticket.priority}
        </span>
      </div>
      <button onClick={() => onDelete(ticket.id)} className="btn btn-sm btn-danger">
        Delete
      </button>
    </li>
  );
}