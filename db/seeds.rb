# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Superhero.create!([{name: "Batman", description: "He is a bat and a man", color:"black"},
                   {name: "Booster Gold", description: "Travels back in time", color:"gold"},
                   {name: "Superman", description: "Has super powers", color:"red-blue" },
                   {name: "Wonder Woman", description: "Amazing Amazon", color:"red-blue-gold"},
                   {name: "The Flash", description: "Has the speed of force", color:"red"},
                   {name: "Green Arrow", description: "Has a quiver of arrows", color:"green"}])

p "Created #{Superhero.count} superheros"
