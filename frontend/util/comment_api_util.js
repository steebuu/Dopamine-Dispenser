module.exports = {
    addComment(comment) {
        return $.ajax({
            method: "POST",
            url: "api/comments",
            data: {comment: comment}
        })
    },

    deleteComment(id) {
        return $.ajax({
            method: "DELETE",
            url: `api/comments/${id}`
        })
    },

    getAllComments() {
        return $.ajax({
            method: "GET",
            url: "api/comments"
        })
    }
}