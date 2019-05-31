const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/messages/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/events?_sort=message_date&_order=desc`).then(e => e.json())
  },
  deleteEvent(id) {
    return fetch(`${remoteURL}/messages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  post(message) {
    return fetch(`${remoteURL}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message)
    }).then(e => e.json())
  },
  put(editedMessage) {
    return fetch(`${remoteURL}/events/${editedMessage.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMessage)
    }).then(data => data.json());
  }
}