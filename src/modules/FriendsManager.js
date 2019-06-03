const remoteURL = "http://localhost:5002"

export default {

    get(userName) {
        return fetch(`${remoteURL}/users?user_name=${userName}`).then(e => e.json())
    },

    getAllFriends(userId) {
        console.log("Get Friends of ID#:", userId)
        return fetch(`${remoteURL}/users/${userId}?_embed=friends`)
            .then(results => results.json())
            .then(users => {
                if (users.length !== 0) {
                    const data = users.friends.map(friend => {
                        let friendId = friend.friendUserId
                        return fetch(`${remoteURL}/users/${friendId}`)
                            .then(results => results.json())
                    })
                    return Promise.all(data)
                }
            })
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