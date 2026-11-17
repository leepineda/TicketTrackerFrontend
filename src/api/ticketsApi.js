const API_URL = "http://localhost:5144/api/tickets";

async function request(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.status === 204 ? null : res.json();
}

export const getTickets = () => request(API_URL);

export const createTicket = (ticket) =>
  request(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  });

export const deleteTicket = (id) =>
  request(`${API_URL}/${id}`, { method: "DELETE" });