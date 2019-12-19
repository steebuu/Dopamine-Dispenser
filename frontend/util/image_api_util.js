module.exports = {
  update(image) {
    return $.ajax({
      method: "PATCH",
      url: `/api/images/${image.id}`,
      data: { image: image }
    });
  },

  create(data) {
    return $.ajax({
      method: "POST",
      url: `/api/images`,
      data: data
    });
  },

  delete(id) {
    return $.ajax({
      method: "DELETE",
      url: `/api/images/${image.id}`,
      data: {id: id}
    });
  },

  fetchImages() {
    return $.ajax({
      method: "GET",
      url: "/api/images"
    });
  }
};