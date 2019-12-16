module.exports = {
  getUser(id) {
    return $.ajax({
      method: "GET",
      url: `/api/users/${id}`
    });
  }
};