import { useState, useEffect } from "react";
import { getTickets, createTicket, deleteTicket } from "../api/ticketsApi";

export function useTickets() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTickets()
      .then(setTickets)
      .catch((err) => setError(err.message));
  }, []);

  async function addTicket(ticket) {
    setError("");
    try {
      const created = await createTicket(ticket);
      setTickets((prev) => [...prev, created]);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }

  async function removeTicket(id) {
    setError("");
    try {
      await deleteTicket(id);
      setTickets((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return { tickets, error, addTicket, removeTicket };
}