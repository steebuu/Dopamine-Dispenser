# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri'

Image.destroy_all
User.destroy_all

demo = User.create!(
  username: "demo",
  password: "demopass",
  email: "demo@e.mail",
  full_name: "Demo Arigato",
  bio: "Born of crudely cobbled CSS and the unending anguish of my creator. Every waking moment brings untold suffering. also follow 4 follow"
)

demo.propic.attach(io: File.open('app/assets/images/placeholder/demoprofpic.png'), filename: "demoprofpic.png")

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

demo_2.propic.attach(io: File.open('app/assets/images/placeholder/thanos_patrick.jpg'), filename: "demo_2_propic.png")

demo_2_image_1 = Image.new(
  user_id: demo_2.id,
  caption: "say 'cannot read params of undefined again' i dare you i double dare you"
)

demo_2_image_1.photo.attach(io: File.open('app/assets/images/placeholder/kermit_gun.jpg'), filename: "kermit_gun.jpg")

demo_2_image_2 = Image.new(
  user_id: demo_2.id,
  caption: "okay i take it back please just let my code run"
)

demo_2_image_2.photo.attach(io: File.open('app/assets/images/placeholder/kermit_crying.jpg'), filename: "kermit_crying.jpg")

demo_2_image_1.save
demo_2_image_2.save

demo_3 = User.create!(
  username: "Democles",
  password: "demopass",
  email: "demo3@e.mail",
  full_name: "Demmy the Third",
  bio: "send help"
)

demo_3.propic.attach(io: File.open('app/assets/images/placeholder/demo_3_propic.png'), filename: "demo_3_propic.png")

demo_3_image_1 = Image.new(
  user_id: demo_3.id,
  caption: "The weight of your code debt hang above you like a blade. Every instance of denormalized state, every hardcoded attribute of CSS. Soon your sins shall fall upon you."
)

demo_3_image_1.photo.attach(io: File.open('app/assets/images/demo/swordofdamocles.jpg'), filename: "swordofdamocles.jpg")

demo_3_image_1.save