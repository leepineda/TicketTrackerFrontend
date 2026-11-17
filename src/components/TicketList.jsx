import TicketItem from "./TicketItem";

export default function TicketList({ tickets, onDelete }) {
  return (
    // TicketList.jsx   
    <ul className="list-unstyled mt-4 d-flex flex-column gap-3">
      {tickets.map((t) => (
        <TicketItem key={t.id} ticket={t} onDelete={onDelete} />
      ))}
    </ul>
  );
}