//import image from "../../images/Peppery_Lemon.jpg";

const MENU = [
  {
    id: 1,
    category: "Soups",
    link:
      "https://img.freepik.com/premium-photo/healthy-vegetarian-soup-served-homemade-bowl-with-parsley-generated-by-artificial-intelligence_24911-97592.jpg",
    title: "Broccoli Soup ₹235.09",
    description: "Made from scratch with the freshest of ingredients possible. Served with freshly baked bread. Blanched broccoli blended and simmered in a rich, creamy broth."
  },
  {
    id: 2,
    category: "Soups",
    link:
      "https://c4.wallpaperflare.com/wallpaper/563/775/664/food-soup-mushroom-hd-wallpaper-preview.jpg ",
    title: "Mushroom and Parmesan Soup  ₹276.57",
    description: "Made from scratch with the freshest of ingredients possible. Served with freshly baked bread. A delicious cheesy mushroom soup."
  },
  {
    id: 3,
    category: "Soups",
    link:
      " https://c1.wallpaperflare.com/preview/1016/707/595/broth-chicken-healthy-homemade.jpg ",
    title: "Chicken Almond Soup ₹284.11",
    description: "Made from scratch with the freshest of ingredients possible. Served with freshly baked bread. A twist on the old favourite. Marinated chicken added to toasted almonds in a hearty broth. "
  },
  {
    id: 4,
    category: "Soups",
    link:
      "https://d1yfn1dfres2va.cloudfront.net/007/4a/79/4a79c33e2f3efe531b665f50e670b2ac_640m.jpg ",
    title: "The Classic Chicken Soup ₹270.29",
    description: "Made from scratch with the freshest of ingredients possible. Served with freshly baked bread. Chicken marinated in garlic butter and simmered to perfection in clear stock."
  },
  {
    id: 5,
    category: "Soups",
    link:
      " https://oursaltykitchen.com/wp-content/uploads/2021/04/lemon-chicken-orzo-soup-featured-image.jpg ",
    title: "Peppery Lemon Soup Chicken(Mc) ₹345",
    description: "Carrots, Chinese Cabbage, Button Mushroom, Straw Mushroom, Lemongrass, Kaffir Lime, White Pepper, Lemon Juice"
  },
  {
    id: 6,
    category: "Pizzas",
    link:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emElMjBtYXJnaGVyaXRhfGVufDB8fDB8fHww&w=1000&q=80 ",
    title: "Margherita Sourdough Pizza ₹553.14",
    description: "Authentic sourdough pizza loaded with mixed cheese and basil leave"
  },
  {
    id: 7,
    category: "Pizzas",
    link:
      "https://media.istockphoto.com/id/180817243/photo/small-pizza-with-chicken-spinach-and-double-cheese.jpg?s=612x612&w=0&k=20&c=smUmv0PDfrbs7UqjoauuEclDJ0ggeXUNT8q4QrbLh14= ",
    title: "Chicken Pesto Pizza ₹616",
    description: "Roasted chicken, onion & fresh basil pesto loaded with cheese on cheese"
  },
  {
    id: 8,
    category: "Pizzas",
    link:
      "https://media.istockphoto.com/id/489593343/photo/bbq-chicken-pizza.jpg?s=612x612&w=0&k=20&c=Lx264tmxrp3wpcwLdRdJyIvi3Yxm56jj2TW5WeoU8FI= ",
    title: "Chicken Bacon Pizza ₹691.43",
    description: "Chicken Bacon (100 % chicken) & onion loaded with mixed cheese"
  },
  {
    id: 9,
    category: "Pizzas",
    link:
      "https://t3.ftcdn.net/jpg/05/68/34/50/360_F_568345035_0jGBQlHsqHwMHbRCquCimvaKrhctKSJJ.jpg ",
    title: "Chicago Deep Dish Pizza ₹945",
    description: "A Classic Chicago Deep Dish Pizza Prepared with our signature pizza base & our classic house red pizza sauce, roast pepper, jalapenos & sun-dried tomato"
  },
  {
    id: 10,
    category: "Pizzas",
    link:
      "https://lh3.googleusercontent.com/FggCk09OFgkVw_pqMnweL7GEvCBVkh-a7B9PKjmzxG_4ewtGFGhWlgl-x6Rn99YXDbvka_lhYcAzP-U44WMQX2oA1-HocCoYLcFVEecl ",
    title: "Flame Grilled Chicken Pizza ₹495",
    description: "An Authentic Italian Naples Pizza Prepared with our signature pizza base & our classic house red pizza sauce with Flame Grilled Chicken with Roasted Pepper, Onion & Red Paprika."
  },
  {
    id: 11,
    category: "Pastas",
    link:
      "https://s-media-cache-ak0.pinimg.com/originals/66/96/48/669648df55e26fdfab60e358b7e5f3a3.jpg",
    title: "Veg Red Pesto Penne Pasta ₹353.26 ",
    description: "A spin on the classic pesto using blanched tomatoes with a roasted nut puree."
  },
  {
    id: 12,
    category: "Pastas",
    link:
      "https://theboiledpeanuts.com/wp-content/uploads/2020/10/make-ahead-vegetarian-lasagna-elegant-easy-ve-able-lasagna-of-make-ahead-vegetarian-lasagna.jpg",
    title: "Veg Lasagna ₹380.91",
    description: "Homemade lasagna topped with veggies, cheese and tomato sauce. Layers of deliciousness."
  },
  {
    id: 13,
    category: "Pastas",
    link:
      "https://img.taste.com.au/xNrBHHXt/taste/2016/11/chicken-and-vegetable-risotto-76118-1.jpeg",
    title: "Chicken Risotto ₹380.91",
    description: "Homemade lasagna topped with veggies, cheese and tomato sauce. Layers of deliciousness. "
  },
  {
    id: 14,
    category: "Pastas",
    link:
      "https://i1.wp.com/www.thecandidcooks.com/wp-content/uploads/2021/06/buffalo-chicken-mac-n-cheese-with-bread-in-bowl-feature2.jpg?resize=800%2C530&ssl=1",
    title: "Chicken Mac & Cheese ₹271.44",
    description: "Gooey Goodness!! Macaroni pasta in our ultra creamy cheese an crispy fried chicken"
  },
  {
    id: 15,
    category: "Pastas",
    link:
      "https://mission-food.com/wp-content/uploads/2009/06/Pasta-Bianca-After-Baking.jpg",
    title: "Bianca Pasta Veg ₹214.30",
    description: "A Choice of Pasta (Penne or Spaghetti) in Truffles Signature housemade spicy tomato sauce with notes of garlic, celery and basil, tossed with cream and topped with cheese and jalapenos"
  },
  {
    id: 16,
    category: "Desserts",
    link:
      "https://www.jonathanpollock.com/galleryimages/image597.jpg ",
    title: "Apple Crumble ₹150",
    description: "Green apples coated in cinnamon, baked in a light pastry dough and topped with an almond crumble"
  },
  {
    id: 17,
    category: "Desserts",
    link:
      "https://img.freepik.com/premium-photo/piece-chocolate-cake-with-chocolate-icing-top_192217-1923.jpg ",
    title: "Rich Chocolate Torte ₹220",
    description: "Rich moist chocolate cake served warm with vanilla ice cream and chocolate sauce and topped with a cocoa nib crumble."
  },
  {
    id: 18,
    category: "Desserts",
    link:
      "https://rare-gallery.com/uploads/posts/524764-candy-caramel.jpg ",
    title: "Hot Caramelo Pudding ₹175",
    description: "Sticky Toffee pudding served hot, with Nut Butterscotch ice ream and topped with caramel sauce"
  },
  {
    id: 19,
    category: "Desserts",
    link: "https://www.errenskitchen.com/wp-content/uploads/2017/01/Devils-Food-Cupcakes-feature-500x375.jpg ",
    title: "Devil's Food Mocha Cupcake ₹320",
    description: "Made with dutch cocoa and topped with chocolate espresso buttercream."
  },
  {
    id: 20,
    category: "Desserts",
    link: "https://www.eatwell101.com/wp-content/uploads/2022/02/easy-no-bake-cheesecake-in-a-jar.jpg ",
    title: "Brownie Baked Cheesecake Jar ₹280",
    description: "Let'S Get Rid Of All Those Frownie with Our High On Brownie Cheesecakes"
  },
  {
    id: 21,
    category: "Drinks",
    link: "https://c0.wallpaperflare.com/preview/975/513/206/alcoholic-beverage-beverage-black-background-close-up.jpg ",
    title: "Grape Slush ₹250",
    description: "Grape puree, grape juice, lemon juice"
  },
  {
    id: 22,
    category: "Drinks",
    link: "https://media.istockphoto.com/id/1163888909/photo/refreshing-strawberry-mint-and-lemon-iced-tea-or-lemonade-in-glasses.jpg?s=612x612&w=0&k=20&c=XESrDbYlF_Cg0JoAX1dquX3yHpM8A_sfo7auD-3yqik= ",
    title: "Pink Lemonade ₹200",
    description: "Strawberry crush, shake lemon juice and topped with soda"
  },
  {
    id: 23,
    category: "Drinks",
    link: "https://www.orchidsandsweettea.com/wp-content/uploads/2022/05/Orange-Crush-Mocktail-w-Basil-2-of-6.jpg ",
    title: "Orange Basil Spirits ₹220",
    description: "Orange chunks, Fresh basil leaves, Lemon juice, topped with spirit"
  },
  {
    id: 24,
    category: "Drinks",
    link: " https://media.istockphoto.com/id/526283742/photo/refreshing-homemade-classic-margarita.jpg?s=612x612&w=0&k=20&c=xbU428fBx7M1CQpGyx8_nYD3S7B0SIXFbQCmW39KYqM= ",
    title: "Margarita ₹450",
    description: "Tequila, Triple sec,Sweet and sour"
  },
  {
    id: 25,
    category: "Drinks",
    link: "https://media.istockphoto.com/id/1173533671/photo/chamomile-hot-toddy.jpg?s=612x612&w=0&k=20&c=1Gwn3O8CEXsn_jsFi_8DqO3OmP73H2lMp6-GWYbM1oE= ",
    title: "Hot Toddy ₹450",
    description: "Brandy, Indian Spiced Apple juice, Honey, Served hot"
  },
  
];

export default MENU;
