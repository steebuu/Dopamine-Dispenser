module.exports = {
    like(like) {
        return $.ajax({
            method: "POST",
            url: 'api/likes',
            data: {like: like}
        })
    },

    unlike(id) {
        return $.ajax({
            method: "DELETE",
            url: `api/likes/${id}`
        })
    },

    receiveLikes() {
        return $.ajax({
            method: "GET",
            url: 'api/likes'
        })
    }
}