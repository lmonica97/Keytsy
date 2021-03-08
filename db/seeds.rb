# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all 
Category.delete_all

# p.image.attach(io: File.open("app/assets/images/products/1.jpg"), file_name: "1.jpg")
user1 = User.create!(
    name: 'AwesomeStore',
    email: 'awesomestore@gmail.com',
    password: 'password'    
)

user4 = User.create!(
    name: 'DemoUser',
    email: 'demouser@gmail.com',
    password: 'password'
)

user2 = User.create!(
    name: 'BestStoreHere',
    email: 'beststore@gmail.com',
    password: 'password'    
)

user3 = User.create!(
    name: 'SallyStore',
    email: 'sallystore@gm',
    password: 'password'    
)

category1 = Category.create!(
    category_name: 'Keyboard & Accesories'
)

category2 = Category.create!(
    category_name: 'Jewelry & Accesories'
)

category3 = Category.create!(
    category_name: 'Clothing & Shoes'
)

category4 = Category.create!(
    category_name: 'Home & Living'
)

category5 = Category.create!(
    category_name: 'Wedding & Party'
)

category6 = Category.create!(
    category_name: 'Toys & Entertainment'
)

category7 = Category.create!(
    category_name: 'Art & Collectables'
)

category8 = Category.create!(
    category_name: 'Craft Supplies'
)

category9 = Category.create!(
    category_name: 'Keytsy Gifts & Gift Cards'
)


product1 = Product.create!(
    seller_id: user1.id,
    product_name: "Heart Shaped Cookies",
    description: "Sugar cookies cut into a shape of a heart, and decorated with colored royal icing. Fit for those who has a significant other who loves sugar cookies or love them themselves. Comes in a batch of 12.",
    price: 6.99,
    category_id: category5.id
)
product1.photo.attach(io: File.open("app/assets/images/products/1.jpg"), filename: "1.jpg")

product2 = Product.create!(
    seller_id: user3.id,
    product_name: "Teddy Bear with Bow",
    description: "Cuddly friend for you or your loved ones. Dimensions are: 12in x 6in. Very soft and plushy",
    price: 15.99,
    category_id: category6.id
)
product2.photo.attach(io: File.open("app/assets/images/products/3.jpg"), filename: "3.jpg")

product3 = Product.create!(
    seller_id: user2.id,
    product_name: 'Heart Shaped Candy',
    description: "A box of candies with sweet little messages that you can possibly give your crush :)",
    price: 5.66,
    category_id: category5.id
)

product3.photo.attach(io: File.open("app/assets/images/products/2.jpg"), filename: "2.jpg")

product4 = Product.create!(
    seller_id: user2.id,
    product_name: "Yarn",
    description: "Comes in as a ball of yarn. Please let me know the color you'd like before purchasing.",
    price: 10.99,
    category_id: category8.id
)
product4.photo.attach(io: File.open("app/assets/images/products/4.jpg"), filename: "4.jpg")

product5 = Product.create!(
    seller_id: user3.id,
    product_name: "Paint Brushes",
    description: "Various sizes available! Currently on a special for all brushes to be the same price. Paint your loved ones something nice!",
    price: 12.59,
    category_id: category8.id
)
product5.photo.attach(io: File.open("app/assets/images/products/5.jpg"), filename: "5.jpg")

product6 = Product.create!(
    seller_id: user3.id,
    product_name: "Heart Shaped Cut outs",
    description: "Heart shaped cut out decorations to place anywhere to your liking. Sizes are 13in length and 5 in width.",
    price: 5.99,
    category_id: category5.id
)
product6.photo.attach(io: File.open("app/assets/images/products/6.jpg"), filename: "6.jpg")

product7 = Product.create!(
    seller_id: user1.id,
    product_name: "Plastic Roses",
    description: "Hate it when you receive a Rose and have it die a day later? Gift someone a plastic rose that gives the same aesthetic!",
    price: 10.25,
    category_id: category5.id
)
product7.photo.attach(io: File.open("app/assets/images/products/7.jpg"), filename: "7.jpg")

product8 = Product.create!(
    seller_id: user2.id,
    product_name: "Mechanical Keyboard",
    description: "Wireless through bluetooth connection, comes with USB-C Cable as well. It is a 60% layout, with arrow keys. Switches: Cherry MX Red.",
    price: 150.99,
    category_id: category1.id 
)
product8.photo.attach(io: File.open("app/assets/images/products/8.jpg"), filename: "8.jpg")

product9 = Product.create!(
    seller_id: user1.id,
    product_name: "Custom Food Pins",
    description: "Custom food pins, they're roughly 1 inch in size, please be aware.",
    price: 5.99,
    category_id: category7.id
)
product9.photo.attach(io: File.open("app/assets/images/products/9.jpg"), filename: "9.jpg")

product10 = Product.create!(
    seller_id: user3.id,
    product_name: "Ribbed Knit Sweater",
    description: "Comes strictly in the color of grey. Made with premium soft cotton.",
    price: 25.99,
    category_id: category3.id
)
product10.photo.attach(io: File.open("app/assets/images/products/10.jpg"), filename: "10.jpg")

product11 = Product.create!(
    seller_id: user2.id,
    product_name: "Moon Shaped Necklace",
    description: "Moon crescent shaped necklace, comes in 30inch length.",
    price: 20.99,
    category_id: category2.id
)
product11.photo.attach(io: File.open("app/assets/images/products/11.jpg"), filename: "11.jpg")

product12 = Product.create!(
    seller_id: user3.id,
    product_name: "Metal Chain Necklace",
    description: "Metal chain necklace, comes in 25inch length. It weighs 2 lbs.",
    price: 40.99,
    category_id: category2.id
)
product12.photo.attach(io: File.open("app/assets/images/products/12.jpg"), filename: "12.jpg")

product13 = Product.create!(
    seller_id: user1.id,
    product_name: "Rubber Ducks",
    description: "Bathe with them, talk to them, whatver you'd like. Who can even hate a rubber duck? ",
    price: 4.99,
    category_id: category6.id
)
product13.photo.attach(io: File.open("app/assets/images/products/13.jpg"), filename: "13.jpg")

product14 = Product.create!(
    seller_id: user1.id,
    product_name: "Framed Felt Letter Board",
    description: "Decorate your room/home with a cute Felt letter board. Dimensions are: 10in X 10in",
    price: 30.68,
    category_id: category4.id
)
product14.photo.attach(io: File.open("app/assets/images/products/14.jpg"), filename: "14.jpg")

product15 = Product.create!(
    seller_id: user2.id,
    product_name: "Custom Premium Dices",
    description: "Dice comes with 20 faces and weighs 0.5 ounces. Great for board games ",
    price: 24.99,
    category_id: category7.id
)
product15.photo.attach(io: File.open("app/assets/images/products/15.jpg"), filename: "15.jpg")

product16 = Product.create!(
    seller_id: user2.id,
    product_name: "Orange Leather Couch",
    description: "Premium couch made with ox leather. Very comfortable. Dimensions(in): 72.5 x 32 x 35, color: orange, weight capacity: 900lbs, seats up to 3",
    price: 500.21,
    category_id: category4.id
)
product16.photo.attach(io: File.open("app/assets/images/products/16.jpg"), filename: "16.jpg")

product17 = Product.create!(
    seller_id: user2.id,
    product_name: "Simple TShirt",
    description: "White simple tee, with box logo. One Size fits most",
    price: 19.99,
    category_id: category3.id
)
product17.photo.attach(io: File.open("app/assets/images/products/17.jpg"), filename: "17.jpg")


product18 = Product.create!(
    seller_id: user3.id,
    product_name: "Sneaker pins",
    description: "Premium sneaker pins. Approximately 1 inch in size.",
    price: 11.99,
    category_id: category7.id
)
product18.photo.attach(io: File.open("app/assets/images/products/18.jpg"), filename: "18.jpg")

product19 = Product.create!(
    seller_id: user2.id,
    product_name: "Baby Palm Tree",
    description: "Aesthetically pleasing baby palm tree for your home!",
    price: 100.22,
    category_id: category4.id
)
product19.photo.attach(io: File.open("app/assets/images/products/19.jpg"), filename: "19.jpg")

product20 = Product.create!(
    seller_id: user1.id,
    product_name: "Texted Vase",
    description: "Texted Vase, comes in various colors. Dimensions are: 10 x 12 x 5",
    price: 30.65,
    category_id: category4.id
)
product20.photo.attach(io: File.open("app/assets/images/products/20.jpg"), filename: "20.jpg")

product21 = Product.create!(
    seller_id: user3.id,
    product_name: "Candle with cute animal faces",
    description: "Cute candles with cute animal faces --- comes in various colors and face expressions!",
    price: 15.68,
    category_id: category4.id
)
product21.photo.attach(io: File.open("app/assets/images/products/21.jpg"), filename: "21.jpg")

product22 = Product.create!(
    seller_id: user1.id,
    product_name: "Single Seater Chair",
    description: "Single seater chair that can be added to your home! Comes only in the color of white. ",
    price: 240.99,
    category_id: category4.id
)
product22.photo.attach(io: File.open("app/assets/images/products/22.jpg"), filename: "22.jpg")

product23 = Product.create!(
    seller_id: user2.id,
    product_name: "Large Lamp",
    description: "Large Lamp. VERY LARGE.",
    price: 500.55,
    category_id: category4.id
)
product23.photo.attach(io: File.open("app/assets/images/products/23.jpg"), filename: "23.jpg")

product24 = Product.create!(
    seller_id: user3.id,
    product_name: "Glass Vase",
    description: "Glass Vase, Color is a bit darker than in picture if not exposed to light.",
    price: 28.11,
    category_id: category4.id
)
product24.photo.attach(io: File.open("app/assets/images/products/24.jpg"), filename: "24.jpg")

product25 = Product.create!(
    seller_id: user1.id,
    product_name: "Delicious Cinnamon Rolls",
    description: "Delicious Cinnamon Rolls that come in a box of 12! Order for you and your loved ones. You'll come back wanting more",
    price: 35.55,
    category_id: category5.id
)
product25.photo.attach(io: File.open("app/assets/images/products/25.jpg"), filename: "25.jpg")

product26 = Product.create!(
    seller_id: user2.id,
    product_name: "Doraemon-themed keycaps",
    description: "Cherry-profile keycaps with doraemon theme. This cute keycap set would look perfect on your keyboard :)",
    price: 50.55,
    category_id: category1.id
)
product26.photo.attach(io: File.open("app/assets/images/products/26.jpg"), filename: "26.jpg")

product27 = Product.create!(
    seller_id: user3.id,
    product_name: "Keychron",
    description: "75% keyboard layout. Can be used wireless through Bluetooth connection or wired. Pefect for those who travel around with their keyboards often.",
    price: 99.99,
    category_id: category1.id
)
product27.photo.attach(io: File.open("app/assets/images/products/27.jpg"), filename: "27.jpg")

product28 = Product.create!(
    seller_id: user2.id,
    product_name: "Custom sneaker keycap",
    description: "This cute little adidas sneaker can be on your keyboard to kick yourself to doing work!",
    price: 20.99,
    category_id: category1.id
)
product28.photo.attach(io: File.open("app/assets/images/products/28.jpg"), filename: "28.jpg")

product29 = Product.create!(
    seller_id: user3.id,
    product_name: "Mario lego piece",
    description: "Super cute mario lego piece that will fit perfectly in your mario world or in your lego world.",
    price: 32.49,
    category_id: category7.id
)
product29.photo.attach(io: File.open("app/assets/images/products/29.jpg"), filename: "29.jpg")

product30 = Product.create!(
    seller_id: user3.id,
    product_name: "Plastic Thor Hammer",
    description: "This plastic Thor Hammer will amaze your friends due to the fact of how cool it simply is. Dimensions: 30inx15in",
    price: 40.49,
    category_id: category7.id
)
product30.photo.attach(io: File.open("app/assets/images/products/30.jpg"), filename: "30.jpg")

