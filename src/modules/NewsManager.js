const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/articles/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/articles?_sort=article_published&_order=desc`).then(e => e.json())
  },
  deleteArticle(id) {
    return fetch(`${remoteURL}/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  post(event) {
    return fetch(`${remoteURL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event)
    }).then(e => e.json())
  },
  put(editedArticles) {
    return fetch(`${remoteURL}/articles/${editedArticles.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedArticles)
    }).then(data => data.json());
  }
}
