# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all 

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
    seller_id: 1,
    product_name: "Heart Shaped Cookies",
    description: "Sugar cookies cut into a shape of a heart, and decorated with colored royal icing. Fit for those who has a significant other who loves sugar cookies or love them themselves. Comes in a batch of 12.",
    price: 6.99
)

product3 = Product.create!(
    seller_id: 1,
    product_name: "Heart Shaped Candy",
    description: "Heart shaped candy with sweet messages on them. Can use them to communicate to your crush if you'd like. :)  Comes in a 2 ounce box.",
    price: 4.99
)

product2 = Product.create!(
    seller_id: 2,
    product_name: "Teddy Bear with Bow",
    description: "Cuddly friend for you or your loved ones. Dimensions are: 12in x 6in. Very soft and plushy",
    price: 15.99
)

product4 = Product.create!(
    seller_id: 2,
    product_name: "Yarn",
    description: "Comes in as a ball of yarn. Please let me know the color you'd like before purchasing.",
    price: 10.99
)

product5 = Product.create!(
    seller_id: 3,
    product_name: "Paint Brushes",
    description: "Various sizes available! Currently on a special for all brushes to be the same price. Paint your loved ones something nice!",
    price: 12.59
)

product6 = Product.create!(
    seller_id: 3,
    product_name: "Heart Shaped Cut outs",
    description: "Heart shaped cut out decorations to place anywhere to your liking. Sizes are 13in length and 5 in width.",
    price: 5.99
)

product7 = Product.create!(
    seller_id: 1,
    product_name: "Plastic Roses",
    description: "Hate it when you receive a Rose and have it die a day later? Gift someone a plastic rose that gives the same aesthetic!",
    price: 10.25
)

product8 = Product.create!(
    seller_id: 2,
    product_name: "Mechanical Keyboard",
    description: "Wireless through bluetooth connection, comes with USB-C Cable as well. It is a 60% layout, with arrow keys. Switches: Cherry MX Red.",
    price: 150.99
)

product9 = Product.create!(
    seller_id: 1,
    product_name: "Custom Food Pins",
    description: "Custom food pins, they're roughly 1 inch in size, please be aware.",
    price: 5.99
)

product10 = Product.create!(
    seller_id: 3,
    product_name: "Ribbed Knit Sweater",
    description: "Comes strictly in the color of grey. Made with premium soft cotton.",
    price: 25.99
)

product11 = Product.create!(
    seller_id: 2,
    product_name: "Moon Shaped Necklace",
    description: "Moon crescent shaped necklace, comes in 30inch length.",
    price: 20.99
)

product12 = Product.create!(
    seller_id: 3,
    product_name: "Metal Chain Necklace",
    description: "Metal chain necklace, comes in 25inch length. It weighs 2 lbs.",
    price: 40.99
)

product13 = Product.create!(
    seller_id: 1,
    product_name: "Rubber Ducks",
    description: "Bathe with them, talk to them, whatver you'd like. Who can even hate a rubber duck? ",
    price: 4.99
)

product14 = Product.create!(
    seller_id: 1,
    product_name: "Framed Felt Letter Board",
    description: "Decorate your room/home with a cute Felt letter board. Dimensions are: 10in X 10in",
    price: 30.68
)

product15 = Product.create!(
    seller_id: 2,
    product_name: "Custom Premium Dices",
    description: "Dice comes with 20 faces and weighs 0.5 ounces. Great for board games ",
    price: 24.99
)

product16 = Product.create!(
    seller_id: 2,
    product_name: "Orange Leather Couch",
    description: "Premium couch made with ox leather. Very comfortable. Dimensions(in): 72.5 x 32 x 35, color: orange, weight capacity: 900lbs, seats up to 3",
    price: 500.21
)

product17 = Product.create!(
    seller_id: 2,
    product_name: "Simple TShirt",
    description: "White simple tee, with box logo. One Size fits most",
    price: 19.99
)


product18 = Product.create!(
    seller_id: 3,
    product_name: "Sneaker pins",
    description: "Premium sneaker pins. Approximately 1 inch in size.",
    price: 11.99
)




