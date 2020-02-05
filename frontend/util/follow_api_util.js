module.exports = {
    follow(follow) {
        return $.ajax({
            method: "POST",
            url: 'api/follows',
            data: {follow: follow}
        })
    },

    unfollow(id) {
        return $.ajax({
            method: "DELETE",
            url: `api/follows/${id}`
        })
    }
}