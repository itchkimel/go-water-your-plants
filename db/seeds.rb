# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding prcess beginning"
Plant.destroy_all
Plant.reset_pk_sequence

User.destroy_all
User.reset_pk_sequence

UserPlant.destroy_all
UserPlant.reset_pk_sequence

puts "Previous seed data deleted & ID reset!!"

p1 = Plant.create(name: "Snake Plant", outdoor: 0, indoor: 1, image: "https://www.costafarms.com/images/SlideShow/1-Costa-Farms-Sansevieria-Snake-Plant-Houseplant.jpg")
p2 = Plant.create(name: "Croton", outdoor: 0, indoor: 1, image: "https://www.costafarms.com/images/SlideShow/Croton-Popular-Houseplants-Cota-Farms.jpg")
p3 = Plant.create(name: "Lucky Bamboo", outdoor: 0, indoor: 1, image: "https://www.costafarms.com/images/SlideShow/1-Costa-Farms-Lucky-Bamboo-Houseplant.jpg")
p4 = Plant.create(name: "Peace Lily", outdoor: 0, indoor: 1, image: "https://www.costafarms.com/images/SlideShow/Peace-Lily-Flowering-Houseplant-Costa-Farms.jpg")
p5 = Plant.create(name: "Pole Beans", outdoor: 1, indoor: 0, image: "https://i2.wp.com/www.gardeningchannel.com/wp-content/uploads/2011/06/green-beans-healthy.jpg")
p6 = Plant.create(name: "Carrots", outdoor: 1, indoor: 0, image: "https://i2.wp.com/www.gardeningchannel.com/wp-content/uploads/2018/10/carrot-2743498_1280-1.jpg")
p7 = Plant.create(name: "Zucchini", outdoor: 1, indoor: 0, image: "https://i2.wp.com/www.gardeningchannel.com/wp-content/uploads/2010/06/zucchini-847094_1920.jpg")
p8 = Plant.create(name: "Tomatoes", outdoor: 1, indoor: 0, image: "https://i1.wp.com/www.gardeningchannel.com/wp-content/uploads/2020/06/gardeningchannel-harvest-celebrity-tomatoes.jpg")
puts "Created Plant seeds 🪴 🪴 🪴"

u1 = User.create(name: "Itche", email: "itche@gmail.com", password: "1234", location: 11204)
u2 = User.create(name: "Barak", email: "barak@gmail.com", password: "1234", location: 10952)
u1 = User.create(name: "David", email: "david@gmail.com", password: "1234", location: 11219)
puts "Created User seeds 🧍 🧍 🧍"

up1 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 2, watered_date: "06/30/2021")
up2 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 4, watered_date: "06/27/2021")
up3 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 1, watered_date: "06/29/2021")
up4 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 2, watered_date: "06/22/2021")
up5 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 3, watered_date: "06/31/2021")
up6 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 2, watered_date: "07/03/2021")
up7 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 4, watered_date: "07/07/2021")
up8 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 1, watered_date: "07/02/2021")
up9 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 2, watered_date: "07/06/2021")
up10 = UserPlant.create(plant_id: Plant.ids.sample, user_id: User.ids.sample, watering_frequency: 3, watered_date: "07/01/2021")
puts "Created UserPlant seeds 🧍 🪴 🧍 🪴 🧍 🪴"