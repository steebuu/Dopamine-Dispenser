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
  full_name: "Demo Arigato",
  bio: "Born of crudely cobbled CSS and the unending anguish of my creator. Every waking moment brings untold suffering. also follow 4 follow"
)

image = Image.new(
  user_id: demo.id,
  caption: "caption for demo user image 1"
)

image_2 = Image.new(
  user_id: demo.id,
  caption: "all css and no play makes demo a dull boy all css and no play makes demo a dull boy all css and no play makes demo a dull boy"
)

image_3 = Image.new(
  user_id: demo.id,
  caption: "all css and no play makes demo a dull boy all css and no play makes demo a dull boy all css and no play makes demo a dull boyall css and no play makes demo a dull boy all css and no play makes demo a dull boy all css and no play makes demo a dull boyall css and no play makes demo a dull boy all css and no play makes demo a dull boy all css and no play makes demo a dull boy"
)

image.photo.attach(io: File.open('app/assets/images/demo/test.png'), filename: "test.png")
image_2.photo.attach(io: File.open('app/assets/images/demo/test_2.png'), filename: "test_2.png")
image_3.photo.attach(io: File.open('app/assets/images/demo/test_3.png'), filename: "test_3.png")

image.save
image_2.save
image_3.save

demo_2 = User.create!(
  username: "DemoTheSecond",
  password: "demopass",
  email: "demo2@e.mail",
  full_name: "Demo Lisher",
  bio: "I am the missing semicolon, the undeclared variable, the forgotten export that wakes you in the unyielding grip of terror. Dread me. Run from me. I still arrive."
)

demo_2_image_1 = Image.new(
  user_id: demo_2.id
  caption: 
)