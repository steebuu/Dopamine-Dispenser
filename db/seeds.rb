# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(
  username: "demo",
  password: "demopass",
  email: "demo@e.mail",
  full_name: "demo user",
  bio: "Born of crudely cobbled CSS and the unending anguish of my creator. Every waking moment brings untold suffering. also follow 4 follow"
)