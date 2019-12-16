module.exports = {
 signup(user) {
   return $.ajax({
     method: "POST",
     url: '/api/users',
     data: {user: user}
   });
 },

 login(user) {
   return $.ajax({
     method: "POST",
     url: '/api/session',
     data: {user: user}
   });
 },
 
 logout() {
   return $.ajax({
     method: "DELETE",
     url: '/api/session'
   });
 },

 fetchImages() {
   return $.ajax({
     method: "GET",
     url: `/api/images`
   });
 },

 uploadImage(formData) {
   return $.ajax({
     method: "POST",
     url: `/api/images`,
     data: formData
   });
 }
};