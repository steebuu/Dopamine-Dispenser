module.exports = {
  update(image) {
    return $.ajax({
      method: "PATCH",
      url: `/api/images/${image.id}`,
      data: { image: image }
    });
  },

  create(image) {
    return $.ajax({
      method: "POST",
      url: `/api/images`,
      data: image,
      contentType: false,
      processData: false
    });
  },

  delete(id) {
    return $.ajax({
      method: "DELETE",
      url: `/api/images/${id}`,
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