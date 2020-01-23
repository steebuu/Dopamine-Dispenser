module.exports = {
  getUser(id) {
    return $.ajax({
      method: "GET",
      url: `/api/users/${id}`
    });
  },
  
  updateUser(id, user) {
    return $.ajax({
      method: "PATCH",
      url: `/api/users/${id}`,
      data: { user: user }
    });
  },
};