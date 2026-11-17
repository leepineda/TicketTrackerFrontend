import { useTickets } from "./hooks/useTickets";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";

function App() {
  const { tickets, error, addTicket, removeTicket } = useTickets();

  return (
  <div className="container py-4" style={{ maxWidth: "42rem" }}>
    <h1 className="mb-4">Ticket Tracker</h1>
    <TicketForm onAdd={addTicket} />
    {error && <div className="alert alert-danger mt-3">{error}</div>}
    {!error && tickets.length === 0 && <p className="text-muted mt-3">No tickets yet.</p>}
    <TicketList tickets={tickets} onDelete={removeTicket} />
</div>
  );
}

export default App;