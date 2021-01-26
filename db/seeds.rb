# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all 

# p.image.attach(io: File.open("app/assets/images/products/1.jpg"), file_name: "1.jpg")
user1 = User.create!(
    name: 'DemoUser',
    email: 'demouser@gmail.com',
    password: 'password'    
)

user2 = User.create!(
    name: 'nemo',
    email: 'nemouser@gmail.com',
    password: 'password'    
)

user3 = User.create!(
    name: 'elmo',
    email: 'elmouser@gmail.com',
    password: 'password'    
)

product1 = Product.create!(
    seller_id: user1.id,
    product_name: "Heart Shaped Cookies",
    description: "Sugar cookies cut into a shape of a heart, and decorated with colored royal icing. Fit for those who has a significant other who loves sugar cookies or love them themselves. Comes in a batch of 12.",
    price: 6.99
)
product1.photo.attach(io: File.open("app/assets/images/products/1.jpg"), filename: "1.jpg")

product3 = Product.create!(
    seller_id: user2.id,
    product_name: "Heart Shaped Candy",
    description: "Heart shaped candy with sweet messages on them. Can use them to communicate to your crush if you'd like. :)  Comes in a 2 ounce box.",
    price: 4.99
)
product3.photo.attach(io: File.open("app/assets/images/products/2.jpg"), filename: "2.jpg")

product2 = Product.create!(
    seller_id: user3.id,
    product_name: "Teddy Bear with Bow",
    description: "Cuddly friend for you or your loved ones. Dimensions are: 12in x 6in. Very soft and plushy",
    price: 15.99
)
product2.photo.attach(io: File.open("app/assets/images/products/3.jpg"), filename: "3.jpg")

product4 = Product.create!(
    seller_id: user2.id,
    product_name: "Yarn",
    description: "Comes in as a ball of yarn. Please let me know the color you'd like before purchasing.",
    price: 10.99
)
product4.photo.attach(io: File.open("app/assets/images/products/4.jpg"), filename: "4.jpg")

product5 = Product.create!(
    seller_id: user3.id,
    product_name: "Paint Brushes",
    description: "Various sizes available! Currently on a special for all brushes to be the same price. Paint your loved ones something nice!",
    price: 12.59
)
product5.photo.attach(io: File.open("app/assets/images/products/5.jpg"), filename: "5.jpg")

product6 = Product.create!(
    seller_id: user3.id,
    product_name: "Heart Shaped Cut outs",
    description: "Heart shaped cut out decorations to place anywhere to your liking. Sizes are 13in length and 5 in width.",
    price: 5.99
)
product6.photo.attach(io: File.open("app/assets/images/products/6.jpg"), filename: "6.jpg")

product7 = Product.create!(
    seller_id: user1.id,
    product_name: "Plastic Roses",
    description: "Hate it when you receive a Rose and have it die a day later? Gift someone a plastic rose that gives the same aesthetic!",
    price: 10.25
)
product7.photo.attach(io: File.open("app/assets/images/products/7.jpg"), filename: "7.jpg")

product8 = Product.create!(
    seller_id: user2.id,
    product_name: "Mechanical Keyboard",
    description: "Wireless through bluetooth connection, comes with USB-C Cable as well. It is a 60% layout, with arrow keys. Switches: Cherry MX Red.",
    price: 150.99
)
product8.photo.attach(io: File.open("app/assets/images/products/8.jpg"), filename: "8.jpg")

product9 = Product.create!(
    seller_id: user1.id,
    product_name: "Custom Food Pins",
    description: "Custom food pins, they're roughly 1 inch in size, please be aware.",
    price: 5.99
)
product9.photo.attach(io: File.open("app/assets/images/products/9.jpg"), filename: "9.jpg")

product10 = Product.create!(
    seller_id: user3.id,
    product_name: "Ribbed Knit Sweater",
    description: "Comes strictly in the color of grey. Made with premium soft cotton.",
    price: 25.99
)
product10.photo.attach(io: File.open("app/assets/images/products/10.jpg"), filename: "10.jpg")

product11 = Product.create!(
    seller_id: user2.id,
    product_name: "Moon Shaped Necklace",
    description: "Moon crescent shaped necklace, comes in 30inch length.",
    price: 20.99
)
product11.photo.attach(io: File.open("app/assets/images/products/11.jpg"), filename: "11.jpg")

product12 = Product.create!(
    seller_id: user3.id,
    product_name: "Metal Chain Necklace",
    description: "Metal chain necklace, comes in 25inch length. It weighs 2 lbs.",
    price: 40.99
)
product12.photo.attach(io: File.open("app/assets/images/products/12.jpg"), filename: "12.jpg")

product13 = Product.create!(
    seller_id: user1.id,
    product_name: "Rubber Ducks",
    description: "Bathe with them, talk to them, whatver you'd like. Who can even hate a rubber duck? ",
    price: 4.99
)
product13.photo.attach(io: File.open("app/assets/images/products/13.jpg"), filename: "13.jpg")

product14 = Product.create!(
    seller_id: user1.id,
    product_name: "Framed Felt Letter Board",
    description: "Decorate your room/home with a cute Felt letter board. Dimensions are: 10in X 10in",
    price: 30.68
)
product14.photo.attach(io: File.open("app/assets/images/products/14.jpg"), filename: "14.jpg")

product15 = Product.create!(
    seller_id: user2.id,
    product_name: "Custom Premium Dices",
    description: "Dice comes with 20 faces and weighs 0.5 ounces. Great for board games ",
    price: 24.99
)
product15.photo.attach(io: File.open("app/assets/images/products/15.jpg"), filename: "15.jpg")

product16 = Product.create!(
    seller_id: user2.id,
    product_name: "Orange Leather Couch",
    description: "Premium couch made with ox leather. Very comfortable. Dimensions(in): 72.5 x 32 x 35, color: orange, weight capacity: 900lbs, seats up to 3",
    price: 500.21,
)
product16.photo.attach(io: File.open("app/assets/images/products/16.jpg"), filename: "16.jpg")

product17 = Product.create!(
    seller_id: user2.id,
    product_name: "Simple TShirt",
    description: "White simple tee, with box logo. One Size fits most",
    price: 19.99
)
product17.photo.attach(io: File.open("app/assets/images/products/17.jpg"), filename: "17.jpg")


product18 = Product.create!(
    seller_id: user3.id,
    product_name: "Sneaker pins",
    description: "Premium sneaker pins. Approximately 1 inch in size.",
    price: 11.99
)
product18.photo.attach(io: File.open("app/assets/images/products/18.jpg"), filename: "18.jpg")



