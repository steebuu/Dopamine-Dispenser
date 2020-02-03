module.exports = {
    follow(follower_id, followed_id) {
        return $.ajax({
            method: "POST",
            url: 'api/follows',
            data: {follower_id: follower_id, followed_id: followed_id}
        })
    },

    unfollow(id) {
        return $.ajax({
            method: "DELETE",
            url: `api/follows/${id}`,
        })
    }
}