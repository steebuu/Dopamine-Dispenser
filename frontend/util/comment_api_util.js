module.exports = {
    addComment(comment) {
        return $.ajax({
            method: "POST",
            url: "api/comments",
            data: {comment: comment}
        })
    },

    removeComment(id) {
        return $.ajax({
            method: "DELETE",
            url: `api/comments/${id}`
        })
    },

    receiveComments() {
        return $.ajax({
            method: "GET",
            url: 'api/comments'
        })
    }
}