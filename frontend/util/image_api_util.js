module.exports = {
  update(image) {
    return $.ajax({
      method: "PATCH",
      url: `/api/images/${image.id}`,
      data: { image: image }
    });
  },

  fetchImages() {
    return $.ajax({
      method: "GET",
      url: "/api/images"
    });
  }
};