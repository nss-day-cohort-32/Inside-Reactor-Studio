const remoteURL = "http://localhost:5002"

export default {

    get(userName) {
        return fetch(`${remoteURL}/users?user_name=${userName}`).then(e => e.json())
    },

    post(user) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        }).then(e => e.json())
    }
}