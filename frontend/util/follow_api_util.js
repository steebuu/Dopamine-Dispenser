module.exports = {
    follow(follow) {
        return $.ajax({
            method: "POST",
            url: 'api/follows',
            data: {follow: follow}
        })
    },

    unfollow(follow) {
        return $.ajax({
            method: "DELETE",
            url: 'api/follows',
            data: {follow: follow}
        })
    }
}