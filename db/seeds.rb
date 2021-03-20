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

# p.image.attach(io: URI.open("app/assets/images/products/1.jpg"), file_name: "1.jpg")
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
    email: 'sallystore@g.com',
    password: 'password'    
)

user5 = User.create!(
    name: 'ExtraordinaryJewelry',
    email: 'jewelry@gm.com',
    password: 'password'    
)

user6 = User.create!(
    name: 'KingCaps',
    email: 'keypop@gm.com',
    password: 'password'    
)

user7 = User.create!(
    name: 'SupremeOutlet',
    email: 'supreme@gm.com',
    password: 'password'    
)

user8 = User.create!(
    name: 'ShannonStore',
    email: 'shannon@gm.com',
    password: 'password'    
)

user9 = User.create!(
    name: 'Keytsy',
    email: 'keytsy@gm.com',
    password: 'password'    
)

user10 = User.create!(
    name: 'HomeGoals',
    email: 'homen@gm.com',
    password: 'password'    
)

user11 = User.create!(
    name: 'TopCollector',
    email: 'homenn@gm.com',
    password: 'password'    
)

user12 = User.create!(
    name: 'Crafty',
    email: 'homen1n@gm.com',
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
product1.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/1.jpg"), filename: "1.jpg")

product2 = Product.create!(
    seller_id: user3.id,
    product_name: "Teddy Bear with Bow",
    description: "Cuddly friend for you or your loved ones. Dimensions are: 12in x 6in. Very soft and plushy",
    price: 15.99,
    category_id: category6.id
)
product2.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/3.jpg"), filename: "3.jpg")

product3 = Product.create!(
    seller_id: user2.id,
    product_name: 'Heart Shaped Candy',
    description: "A box of candies with sweet little messages that you can possibly give your crush :)",
    price: 5.66,
    category_id: category5.id
)

product3.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/2.jpg"), filename: "2.jpg")

product4 = Product.create!(
    seller_id: user2.id,
    product_name: "Yarn",
    description: "Comes in as a ball of yarn. Please let me know the color you'd like before purchasing.",
    price: 10.99,
    category_id: category8.id
)
product4.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/4.jpg"), filename: "4.jpg")

product5 = Product.create!(
    seller_id: user3.id,
    product_name: "Paint Brushes",
    description: "Various sizes available! Currently on a special for all brushes to be the same price. Paint your loved ones something nice!",
    price: 12.59,
    category_id: category8.id
)
product5.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/5.jpg"), filename: "5.jpg")

product6 = Product.create!(
    seller_id: user3.id,
    product_name: "Heart Shaped Cut outs",
    description: "Heart shaped cut out decorations to place anywhere to your liking. Sizes are 13in length and 5 in width.",
    price: 5.99,
    category_id: category5.id
)
product6.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/6.jpg"), filename: "6.jpg")

product7 = Product.create!(
    seller_id: user1.id,
    product_name: "Plastic Roses",
    description: "Hate it when you receive a Rose and have it die a day later? Gift someone a plastic rose that gives the same aesthetic!",
    price: 10.25,
    category_id: category5.id
)
product7.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/7.jpg"), filename: "7.jpg")

product8 = Product.create!(
    seller_id: user2.id,
    product_name: "Mechanical Keyboard",
    description: "Wireless through bluetooth connection, comes with USB-C Cable as well. It is a 60% layout, with arrow keys. Switches: Cherry MX Red.",
    price: 150.99,
    category_id: category1.id 
)
product8.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/8.jpg"), filename: "8.jpg")

product9 = Product.create!(
    seller_id: user1.id,
    product_name: "Custom Food Pins",
    description: "Custom food pins, they're roughly 1 inch in size, please be aware.",
    price: 5.99,
    category_id: category7.id
)
product9.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/9.jpg"), filename: "9.jpg")

product10 = Product.create!(
    seller_id: user3.id,
    product_name: "Ribbed Knit Sweater",
    description: "Comes strictly in the color of grey. Made with premium soft cotton.",
    price: 25.99,
    category_id: category3.id
)
product10.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/10.jpg"), filename: "10.jpg")

product11 = Product.create!(
    seller_id: user2.id,
    product_name: "Moon Shaped Necklace",
    description: "Moon crescent shaped necklace, comes in 30inch length.",
    price: 20.99,
    category_id: category2.id
)
product11.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/11.jpg"), filename: "11.jpg")

product12 = Product.create!(
    seller_id: user3.id,
    product_name: "Metal Chain Necklace",
    description: "Metal chain necklace, comes in 25inch length. It weighs 2 lbs.",
    price: 40.99,
    category_id: category2.id
)
product12.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/12.jpg"), filename: "12.jpg")

product13 = Product.create!(
    seller_id: user1.id,
    product_name: "Rubber Ducks",
    description: "Bathe with them, talk to them, whatver you'd like. Who can even hate a rubber duck? ",
    price: 4.99,
    category_id: category6.id
)
product13.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/13.jpg"), filename: "13.jpg")

product14 = Product.create!(
    seller_id: user1.id,
    product_name: "Framed Felt Letter Board",
    description: "Decorate your room/home with a cute Felt letter board. Dimensions are: 10in X 10in",
    price: 30.68,
    category_id: category4.id
)
product14.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/14.jpg"), filename: "14.jpg")

product15 = Product.create!(
    seller_id: user2.id,
    product_name: "Custom Premium Dices",
    description: "Dice comes with 20 faces and weighs 0.5 ounces. Great for board games ",
    price: 24.99,
    category_id: category7.id
)
product15.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/15.jpg"), filename: "15.jpg")

product16 = Product.create!(
    seller_id: user2.id,
    product_name: "Orange Leather Couch",
    description: "Premium couch made with ox leather. Very comfortable. Dimensions(in): 72.5 x 32 x 35, color: orange, weight capacity: 900lbs, seats up to 3",
    price: 500.21,
    category_id: category4.id
)
product16.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/16.jpg"), filename: "16.jpg")

product17 = Product.create!(
    seller_id: user2.id,
    product_name: "Simple TShirt",
    description: "White simple tee, with box logo. One Size fits most",
    price: 19.99,
    category_id: category3.id
)
product17.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/17.jpg"), filename: "17.jpg")


product18 = Product.create!(
    seller_id: user3.id,
    product_name: "Sneaker pins",
    description: "Premium sneaker pins. Approximately 1 inch in size.",
    price: 11.99,
    category_id: category7.id
)
product18.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/18.jpg"), filename: "18.jpg")

product19 = Product.create!(
    seller_id: user2.id,
    product_name: "Baby Palm Tree",
    description: "Aesthetically pleasing baby palm tree for your home!",
    price: 100.22,
    category_id: category4.id
)
product19.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/19.jpg"), filename: "19.jpg")

product20 = Product.create!(
    seller_id: user1.id,
    product_name: "Texted Vase",
    description: "Texted Vase, comes in various colors. Dimensions are: 10 x 12 x 5",
    price: 30.65,
    category_id: category4.id
)
product20.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/20.jpg"), filename: "20.jpg")

product21 = Product.create!(
    seller_id: user3.id,
    product_name: "Candle with cute animal faces",
    description: "Cute candles with cute animal faces --- comes in various colors and face expressions!",
    price: 15.68,
    category_id: category4.id
)
product21.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/21.jpg"), filename: "21.jpg")

product22 = Product.create!(
    seller_id: user1.id,
    product_name: "Single Seater Chair",
    description: "Single seater chair that can be added to your home! Comes only in the color of white. ",
    price: 240.99,
    category_id: category4.id
)
product22.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/22.jpg"), filename: "22.jpg")

product23 = Product.create!(
    seller_id: user2.id,
    product_name: "Large Lamp",
    description: "Large Lamp. VERY LARGE.",
    price: 500.55,
    category_id: category4.id
)
product23.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/23.jpg"), filename: "23.jpg")

product24 = Product.create!(
    seller_id: user3.id,
    product_name: "Glass Vase",
    description: "Glass Vase, Color is a bit darker than in picture if not exposed to light.",
    price: 28.11,
    category_id: category4.id
)
product24.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/24.jpg"), filename: "24.jpg")

product25 = Product.create!(
    seller_id: user1.id,
    product_name: "Delicious Cinnamon Rolls",
    description: "Delicious Cinnamon Rolls that come in a box of 12! Order for you and your loved ones. You'll come back wanting more",
    price: 35.55,
    category_id: category5.id
)
product25.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/25.jpg"), filename: "25.jpg")

product26 = Product.create!(
    seller_id: user2.id,
    product_name: "Doraemon-themed keycaps",
    description: "Cherry-profile keycaps with doraemon theme. This cute keycap set would look perfect on your keyboard :)",
    price: 50.55,
    category_id: category1.id
)
product26.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/26.jpg"), filename: "26.jpg")

product27 = Product.create!(
    seller_id: user3.id,
    product_name: "Keychron",
    description: "75% keyboard layout. Can be used wireless through Bluetooth connection or wired. Pefect for those who travel around with their keyboards often.",
    price: 99.99,
    category_id: category1.id
)
product27.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/27.jpg"), filename: "27.jpg")

product28 = Product.create!(
    seller_id: user2.id,
    product_name: "Custom sneaker keycap",
    description: "This cute little adidas sneaker can be on your keyboard to kick yourself to doing work!",
    price: 20.99,
    category_id: category1.id
)
product28.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/28.jpg"), filename: "28.jpg")

product29 = Product.create!(
    seller_id: user3.id,
    product_name: "Mario lego piece",
    description: "Super cute mario lego piece that will fit perfectly in your mario world or in your lego world.",
    price: 32.49,
    category_id: category7.id
)
product29.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/29.jpg"), filename: "29.jpg")

product30 = Product.create!(
    seller_id: user3.id,
    product_name: "Plastic Thor Hammer",
    description: "This plastic Thor Hammer will amaze your friends due to the fact of how cool it simply is. Dimensions: 30inx15in",
    price: 40.49,
    category_id: category7.id
)
product30.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/30.jpg"), filename: "30.jpg")

product31 = Product.create!(
    seller_id: user6.id,
    product_name: "Highlight yellow accent keycaps",
    description: "These super bright highlight yellow keycaps will definitely brighten your day!",
    price: 27.88,
    category_id: category1.id
)
product31.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/31.jpg"), filename: "31.jpg")

product32 = Product.create!(
    seller_id: user5.id,
    product_name: "Cute earrings",
    description: "cute baby blue earrings that can match your very blue outfit",
    price: 10.99,
    category_id: category2.id
)
product32.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/32.jpg"), filename: "32.jpg")

product33 = Product.create!(
    seller_id: user5.id,
    product_name: "Brown switches",
    description: "Brown tactile switches, 40g actuation force. Comes in a pack of 10",
    price: 5.66,
    category_id: category1.id
)
product33.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/33.jpg"), filename: "33.jpg")

product34 = Product.create!(
    seller_id: user5.id,
    product_name: "Cute cat face masks",
    description: "Size should fit kids from 5-12 years old. Comes in a pack of one.",
    price: 4.22,
    category_id: category2.id
)
product34.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/34.jpg"), filename: "34.jpg")

product35 = Product.create!(
    seller_id: user5.id,
    product_name: "Leather Gloves",
    description: "Leather gloves for those cold nights you ever have to cold with no heat on",
    price: 32.11,
    category_id: category2.id
)
product35.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/35.jpg"), filename: "35.jpg")

product38 = Product.create!(
    seller_id: user5.id,
    product_name: "Swarovski crystal Bracelet",
    description: "Beautiful bracelet 3 inches in diameter",
    price: 45.44,
    category_id: category2.id
)
product38.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/36.jpg"), filename: "38.jpg")

product36 = Product.create!(
    seller_id: user5.id,
    product_name: "Hiking Backpack",
    description: "Cute yet convenient backpack --great for traveling. Has lots of compartments!",
    price: 60.44,
    category_id: category2.id
)
product36.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/37.jpg"), filename: "36.jpg")

product37 = Product.create!(
    seller_id: user5.id,
    product_name: "Ruby stone necklace",
    description: "Authentic Ruby Stone necklace. Great as a gift.",
    price: 40.49,
    category_id: category2.id
)
product37.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/38.jpg"), filename: "37.jpg")

product39 = Product.create!(
    seller_id: user5.id,
    product_name: "Diamond Ring",
    description: "Pear cut diamond ring. 3 carat diamond",
    price: 29999.99,
    category_id: category2.id
)
product39.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/39.jpg"), filename: "39.jpg")

product40 = Product.create!(
    seller_id: user7.id,
    product_name: "Cable knit socks",
    description: "1 pair of socks. Very warm for the winter -- comes in the color lavender",
    price: 12.11,
    category_id: category3.id
)
product40.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/40.jpg"), filename: "40.jpg")

product41 = Product.create!(
    seller_id: user7.id,
    product_name: "Skate sneakers",
    description: "Comes in men size 10. Color shown in photo, grey.",
    price: 60.99,
    category_id: category3.id
)
product41.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/41.jpg"), filename: "41.jpg")

product42 = Product.create!(
    seller_id: user7.id,
    product_name: "Nike hat",
    description: "Red nike hat with white lettering",
    price: 20.99,
    category_id: category3.id
)
product42.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/42.jpg"), filename: "42.jpg")

product43 = Product.create!(
    seller_id: user7.id,
    product_name: "Womens printed tshirt",
    description: "Womens grey t-shirt. Please specify size in seller's notes during checkout.",
    price: 15.99,
    category_id: category3.id
)
product43.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/43.jpg"), filename: "43.jpg")

product44 = Product.create!(
    seller_id: user7.id,
    product_name: "Beach hat",
    description: "Beautiful beach hat with a black ribbon accent.",
    price: 18.44,
    category_id: category3.id
)
product44.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/44.jpg"), filename: "44.jpg")

product45 = Product.create!(
    seller_id: user7.id,
    product_name: "Regrets Crop Tee",
    description: "Womens cropped 'Regrets' tshirt. Please specify size in seller's notes during checkout!",
    price: 9.99,
    category_id: category3.id
)
product45.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/45.jpg"), filename: "45.jpg")

product46 = Product.create!(
    seller_id: user8.id,
    product_name: "Floral Maxi Dress",
    description: "White women's dress with floral detailing. Please specify size in seller's notes during checkout",
    price: 29.99,
    category_id: category3.id
)
product46.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/46.jpg"), filename: "46.jpg")

product47 = Product.create!(
    seller_id: user8.id,
    product_name: "Introvert Unisex Tshirt",
    description: "Black introvert tshirt. Please specify size in seller's notes during checkout",
    price: 9.99,
    category_id: category3.id
)
product47.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/47.jpg"), filename: "47.jpg")

product48 = Product.create!(
    seller_id: user8.id,
    product_name: "Black Satin Dress",
    description: "Black Satin Dress, mid length dress. Please specify size in seller's notes during checkout.",
    price: 39.99,
    category_id: category3.id
)
product48.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/48.jpg"), filename: "48.jpg")

product49 = Product.create!(
    seller_id: user8.id,
    product_name: "Men's Sweat Set",
    description: "Comes in Salmon colorway, as show in photo. Please specify pants and top size in seller's notes during checkout.",
    price: 39.99,
    category_id: category3.id
)
product49.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/49.jpg"), filename: "49.jpg")

product50 = Product.create!(
    seller_id: user8.id,
    product_name: "Men's Yellow Tshirt",
    description: "Plain yellow tshirt made of 100% cotton. Please specify size in seller's notes during checkout.",
    price: 9.99,
    category_id: category3.id
)
product50.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/50.jpg"), filename: "50.jpg")

product51 = Product.create!(
    seller_id: user8.id,
    product_name: "Unisex black tshirt",
    description: "Black tshirt with a TV logo on left chest side. Please specify size in seller's notes during checkout.",
    price: 9.99,
    category_id: category3.id
)
product51.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/51.jpg"), filename: "51.jpg")

product52 = Product.create!(
    seller_id: user6.id,
    product_name: "Novelkey Creams",
    description: "Kovelkey Cream linear switches. Linear | 4mm travel | 2mm operating | 55g actuation | 70g bottom out. Switches sold in packs of 10.",
    price: 5.55,
    category_id: category1.id
)
product52.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/52.jpg"), filename: "52.jpg")

product53 = Product.create!(
    seller_id: user6.id,
    product_name: "DZ65RGB DYI KIT",
    description: "Includes: Hotswap DZ65RGB v2 PCB, USB-C cable, Cherry screw-in stabilizers, Grey Aluminum case, and aluminum plate.",
    price: 199.99,
    category_id: category1.id
)
product53.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/53.jpg"), filename: "53.jpg")

product54 = Product.create!(
    seller_id: user6.id,
    product_name: "Gateron Milky Black",
    description: "Linear | 4.0mm travel | 60g actuation",
    price: 2.44,
    category_id: category1.id
)
product54.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/54.jpg"), filename: "54.jpg")

product55 = Product.create!(
    seller_id: user10.id,
    product_name: "Grey cloth stool",
    description: "Black stool, with a grey top cloth. Height: 30in, Width: 10in, Length: 10in.",
    price: 39.99,
    category_id: category4.id
)
product55.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/55.jpg"), filename: "55.jpg")

product56 = Product.create!(
    seller_id: user10.id,
    product_name: "Black and White Cactus",
    description: "Black and white Cactus picture displayed on wooden frame. Dimensions: 40in x 25in.",
    price: 49.99,
    category_id: category4.id
)
product56.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/56.jpg"), filename: "56.jpg")

product57 = Product.create!(
    seller_id: user10.id,
    product_name: "I Hate Mondays",
    description: "Small, 'I hate Mondays' display frame. Dimensions: 12in X 8in",
    price: 19.99,
    category_id: category4.id
)
product57.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/57.jpg"), filename: "57.jpg")

product58 = Product.create!(
    seller_id: user10.id,
    product_name: "Rose Gold Lamp",
    description: "Rose Gold side table lamp. Great for those late night readings!",
    price: 39.99,
    category_id: category4.id
)
product58.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/58.jpg"), filename: "58.jpg")

product59 = Product.create!(
    seller_id: user11.id,
    product_name: "8 Pool Ball",
    description: "8 Ball pool with plastic housing of the same ball pattern/color/number. Please state in seller's notes which number ball you'd like.",
    price: 29.99,
    category_id: category6.id
)
product59.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/59.jpg"), filename: "59.jpg")

product60 = Product.create!(
    seller_id: user11.id,
    product_name: "Aluminum Chess Set",
    description: "Very unique aluminum chess set!!! Very heavy on weight and details.",
    price: 199.99,
    category_id: category6.id
)
product60.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/60.jpg"), filename: "60.jpg")

product61 = Product.create!(
    seller_id: user11.id,
    product_name: "Magnetic Dart Board",
    description: "Fun magnetic dart board to play with your friends, with no accidents!",
    price: 9.99,
    category_id: category6.id
)
product61.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/61.jpg"), filename: "61.jpg")

product62 = Product.create!(
    seller_id: user11.id,
    product_name: "Wooden Jenga",
    description: "Wooden Jenga game, with authentic wood pieces.",
    price: 29.99,
    category_id: category6.id
)
product62.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/62.jpg"), filename: "62.jpg")

product63 = Product.create!(
    seller_id: user11.id,
    product_name: "Baby Yoda",
    description: "Baby Yoda with coat. Dimensions: 12in x 5in x 3in",
    price: 49.99,
    category_id: category6.id
)
product63.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/63.jpg"), filename: "63.jpg")

product64 = Product.create!(
    seller_id: user11.id,
    product_name: "Horse Pinata",
    description: "Paper horse pinata, comes in rainbow colorway. DOES NOT COME WITH ANY CANDY OR ANYTHING INSIDE.",
    price: 19.99,
    category_id: category6.id
)
product64.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/64.jpg"), filename: "64.jpg")

product65 = Product.create!(
    seller_id: user11.id,
    product_name: "Poke Ball",
    description: "Live out your Pokemon Trainer Dreams with this classic Poke Ball!",
    price: 14.99,
    category_id: category6.id
)
product65.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/65.jpg"), filename: "65.jpg")

product66 = Product.create!(
    seller_id: user11.id,
    product_name: "Avocado Stuffed Toy",
    description: "Friendly avocado stuffed toy. Dimensions: 15in x 6in x 5in",
    price: 12.99,
    category_id: category6.id
)
product66.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/66.jpg"), filename: "66.jpg")

product67 = Product.create!(
    seller_id: user1.id,
    product_name: "Plastic Tiaras",
    description: "Kids plastic tiaras, come in a set of three, as show in photo.",
    price: 7.99,
    category_id: category6.id
)
product67.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/67.jpg"), filename: "67.jpg")

product68 = Product.create!(
    seller_id: user11.id,
    product_name: "Vintage Yellow Toy Car",
    description: "Vintage toy car, but still in decent quality. Tried to repaint any paint that deteriorated over time.",
    price: 29.99,
    category_id: category6.id
)
product68.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/68.jpg"), filename: "68.jpg")

product69 = Product.create!(
    seller_id: user8.id,
    product_name: "Small Dog Bee Costume",
    description: "Bee costume for smaller sized dogs, comes with a hood.",
    price: 29.99,
    category_id: category3.id
)
product69.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/69.jpg"), filename: "69.jpg")

product70 = Product.create!(
    seller_id: user11.id,
    product_name: "Unique Measuring Cups",
    description: "Custom measuring cups, comes in a set of 4: 1/2 cup, 1/3 cup, 1 cup, and 1/4 cup.",
    price: 39.99,
    category_id: category7.id
)
product70.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/70.jpg"), filename: "70.jpg")

product71 = Product.create!(
    seller_id: user3.id,
    product_name: "Snowman Ornament",
    description: "Glass snowman ornament collectable to display on your tree.",
    price: 14.99,
    category_id: category7.id
)
product71.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/71.jpg"), filename: "71.jpg")

product72 = Product.create!(
    seller_id: user3.id,
    product_name: "Rare Kidney Beans",
    description: "Rare kidney beans with special patterns and colors. Will come in a set of 10 random beans.",
    price: 9.99,
    category_id: category7.id
)
product72.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/72.jpg"), filename: "72.jpg")

product73 = Product.create!(
    seller_id: user3.id,
    product_name: "Beautiful seashell",
    description: "Beautiful seashell you can use as display.",
    price: 5.99,
    category_id: category7.id
)
product73.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/73.jpg"), filename: "73.jpg")

product74 = Product.create!(
    seller_id: user1.id,
    product_name: "Gemstones",
    description: "Beautiful gemstones to add to your collection. Your stone will be chosen randomly.",
    price: 9.99,
    category_id: category7.id
)
product74.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/74.jpg"), filename: "74.jpg")

product75 = Product.create!(
    seller_id: user1.id,
    product_name: "Crystals",
    description: "A random crystal will be picked from our collection and shipped to you.",
    price: 9.99,
    category_id: category7.id
)
product75.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/75.jpg"), filename: "75.jpg")

product76 = Product.create!(
    seller_id: user2.id,
    product_name: "Beautiful Rocks",
    description: "Colorful rocks you can display around your house for decoration. Comes in randomly in a set of 10.",
    price: 2.99,
    category_id: category7.id
)
product76.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/76.jpg"), filename: "76.jpg")

product77 = Product.create!(
    seller_id: user3.id,
    product_name: "Unique Hourglass",
    description: "Unique hourglass filled with colored sand. Please state in seller note which hourglass you'd like -- 1 or 2.",
    price: 39.99,
    category_id: category7.id
)
product77.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/77.jpg"), filename: "77.jpg")

product78 = Product.create!(
    seller_id: user12.id,
    product_name: "Thin Yarn",
    description: "Comes in pack of three of the same color. Please state in seller's note which color(s) you'd like. This type of yarn is commonly used for bracelet making.",
    price: 9.99,
    category_id: category8.id
)
product78.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/78.jpg"), filename: "78.jpg")

product79 = Product.create!(
    seller_id: user12.id,
    product_name: "Colored Pencils",
    description: "Comes in pack of 24.",
    price: 13.99,
    category_id: category8.id
)
product79.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/79.jpg"), filename: "79.jpg")

product80 = Product.create!(
    seller_id: user12.id,
    product_name: "Thread",
    description: "500g of thread. Please specify color in seller's notes during checkout.",
    price: 19.99,
    category_id: category8.id
)
product80.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/80.jpg"), filename: "80.jpg")

product81 = Product.create!(
    seller_id: user12.id,
    product_name: "Crayons",
    description: "Crayons will come in a pack of 24.",
    price: 6.99,
    category_id: category8.id
)
product81.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/81.jpg"), filename: "81.jpg")

product82 = Product.create!(
    seller_id: user12.id,
    product_name: "Gold Glitter",
    description: "**NOT EDIBLE, PLEASE BE CAUTIOUS WITH KIDS** Gold glitter for decoration, projects, etc.",
    price: 4.99,
    category_id: category8.id
)
product82.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/82.jpg"), filename: "82.jpg")

product83 = Product.create!(
    seller_id: user12.id,
    product_name: "Plastic Discs",
    description: "Will come in a pack of 1000. Only in colors: red, white and blue.",
    price: 9.99,
    category_id: category8.id
)
product83.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/83.jpg"), filename: "83.jpg")

product84 = Product.create!(
    seller_id: user2.id,
    product_name: "Ceramic Bowls (not glazed)",
    description: "Ceramic Bowls that will come in ready to decorate and glaze.",
    price: 12.99,
    category_id: category8.id
)
product84.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/84.jpg"), filename: "84.jpg")

product85 = Product.create!(
    seller_id: user12.id,
    product_name: "Paint",
    description: "4oz of paint in a small bottle. Please specify color in seller's notes during checkout.",
    price: 5.99,
    category_id: category8.id
)
product85.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/85.jpg"), filename: "85.jpg")

product86 = Product.create!(
    seller_id: user2.id,
    product_name: "Measuring Tape",
    description: "10 ft measruing tape, great for taking measurements.",
    price: 2.99,
    category_id: category8.id
)
product86.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/86.jpg"), filename: "86.jpg")

product87 = Product.create!(
    seller_id: user12.id,
    product_name: "Coloring Pencils",
    description: "Comes in pack of 24. Great quality colored pencils with high pigmentation.",
    price: 19.99,
    category_id: category8.id
)
product87.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/87.jpg"), filename: "87.jpg")

product88 = Product.create!(
    seller_id: user9.id,
    product_name: "Keytsy Gift Card",
    description: "Keysy E-gift card to send to your loved ones, friends, etc.",
    price: 99.99,
    category_id: category9.id
)
product88.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/88.jpg"), filename: "88.jpg")

product89 = Product.create!(
    seller_id: user9.id,
    product_name: "Keytsy Gift Card",
    description: "Keysy E-gift card to send to your loved ones, friends, etc.",
    price: 49.99,
    category_id: category9.id
)
product89.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/89.jpg"), filename: "89.jpg")

product90 = Product.create!(
    seller_id: user9.id,
    product_name: "Keytsy Gift Card",
    description: "Keysy E-gift card to send to your loved ones, friends, etc.",
    price: 9.99,
    category_id: category9.id
)
product90.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/90.jpg"), filename: "90.jpg")

product91 = Product.create!(
    seller_id: user9.id,
    product_name: "Keytsy Gift Card",
    description: "Keysy E-gift card to send to your loved ones, friends, etc.",
    price: 19.99,
    category_id: category9.id
)
product91.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/91.jpg"), filename: "91.jpg")


product92 = Product.create!(
    seller_id: user8.id,
    product_name: "Custom event table cards",
    description: "Great to use in large events, to label tables. Please let us know how you'd like the font to be in seller's notes during checkout. Comes in set of 10, cardboard.",
    price: 19.99,
    category_id: category5.id
)
product92.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/92.jpg"), filename: "92.jpg")


product93 = Product.create!(
    seller_id: user8.id,
    product_name: "Mr & Mrs Paper Goodie Bags",
    description: "Comes in pack of 100. Only one design available, as seen in photo. Size: 6in X 4in",
    price: 8.99,
    category_id: category5.id
)
product93.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/93.jpg"), filename: "93.jpg")


product94 = Product.create!(
    seller_id: user9.id,
    product_name: "Rainbow Confetti",
    description: "Small, 1cm diameter confetti circles, can be used to stuff balloons for a better pop effect!",
    price: 2.99,
    category_id: category5.id
)
product94.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/94.jpg"), filename: "94.jpg")


product95 = Product.create!(
    seller_id: user2.id,
    product_name: "String Lights",
    description: "Colored string lights, length: 3ft per string. Comes in only three colors: red, blue, and yellow. (pack of 3 in each color)",
    price: 29.99,
    category_id: category5.id
)
product95.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/95.jpg"), filename: "95.jpg")


product96 = Product.create!(
    seller_id: user7.id,
    product_name: "Emoji Balloons",
    description: "Very limited in emojis: Smiley, ring, kiss, heart eyes.",
    price: 15.99,
    category_id: category5.id
)
product96.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/96.jpg"), filename: "96.jpg")


product97 = Product.create!(
    seller_id: user12.id,
    product_name: "Metallic Balloons",
    description: "Comes in a pack of 25 balloons. Only available in the colors shown in photo.",
    price: 12.99,
    category_id: category5.id
)
product97.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/97.jpg"), filename: "97.jpg")


product98 = Product.create!(
    seller_id: user1.id,
    product_name: "Halloween-Themed Cookies",
    description: "These Halloween-themed cookies will come in a pack of 10, 2 cookies each for each design. The icing is vanilla flavored, with food coloring. Cookies are plain sugar cookies.",
    price: 16.99,
    category_id: category5.id
)
product98.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/98.jpg"), filename: "98.jpg")


product99 = Product.create!(
    seller_id: user2.id,
    product_name: "Lettered Balloons",
    description: "Available for all alphabet characters only. Each order only comes with one balloon with the character of your choice. Please let us know in seller's notes.",
    price: 8.99,
    category_id: category5.id
)
product99.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/99.jpg"), filename: "99.jpg")


product100 = Product.create!(
    seller_id: user3.id,
    product_name: "Everyone Can Code",
    description: "A Banner to celebrate everyone can code.",
    price: 5.99,
    category_id: category5.id
)
product100.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/100.jpg"), filename: "100.jpg")

product101 = Product.create!(
    seller_id: user9.id,
    product_name: "Alpaca Linear Switches",
    description: "Alpaca linear switches, will come in pack of 10. Smooth linear switches with gold plated 62g springs. Top housing is polycarbonate. Bottom housing is nylon. Stem is POM. These switches are PCB mount(5-pin)",
    price: 6.99,
    category_id: category1.id
)
product101.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/101.jpg"), filename: "101.jpg")

product102 = Product.create!(
    seller_id: user9.id,
    product_name: "GMK Noel Set",
    description: "No accent keys or anything. Only everything in photo included.",
    price: 134.99,
    category_id: category1.id
)
product102.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/102.jpg"), filename: "102.jpg")

product103 = Product.create!(
    seller_id: user9.id,
    product_name: "Durock POM Switches",
    description: "POM blend for top and bottom housing with a redesigned stem. Linear switch with 63.5g bottom out. Plate mount 5-pin switch.",
    price: 6.99,
    category_id: category1.id
)
product103.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/103.jpg"), filename: "103.jpg")

product106 = Product.create!(
    seller_id: user9.id,
    product_name: "Switch Lubing Station",
    description: "Comes in the color purple. Can lube up to 42 switches at the same time.",
    price: 29.99,
    category_id: category1.id
)
product106.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/106.jpg"), filename: "106.jpg")

product105 = Product.create!(
    seller_id: user9.id,
    product_name: "Satisfaction75",
    description: "75% layout keyboard. DOES NOT COME WITH KEYCAPS OR SWITCHES. Will come with brass-rose gold knob.",
    price: 475.99,
    category_id: category1.id
)
product105.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/105.jpg"), filename: "105.jpg")

product107 = Product.create!(
    seller_id: user9.id,
    product_name: "Krytox 205g0",
    description: "0.5 oz tube of pute Krytox 205g0.",
    price: 21.89,
    category_id: category1.id
)
product107.photo.attach(io: URI.open("https://keytsy-seeds.s3.amazonaws.com/1st+edit/107.jpg"), filename: "107.jpg")









