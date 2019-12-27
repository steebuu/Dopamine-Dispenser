module.exports = {
  getUser(id) {
    return $.ajax({
      method: "GET",
      url: `/api/users/${id}`
    });
  },
  
  updateUser(id) {
    return $.ajax({
      method: "PATCH",
      url: `/api/users/${id}`
    });
  },
};