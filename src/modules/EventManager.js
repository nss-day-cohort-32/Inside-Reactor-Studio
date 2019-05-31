const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/events?_sort=event_date&_order=desc`).then(e => e.json())
  },
  deleteEvent(id) {
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  post(event) {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event)
    }).then(e => e.json())
  },
  put(editedEvent) {
    return fetch(`${remoteURL}/events/${editedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEvent)
    }).then(data => data.json());
  }
}
