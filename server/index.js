const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const HOST = 5000;
const app = express();
const path = require("path");


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


let products = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: `/product_1.png`,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: `/product_2.png`,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: `/product_3.png`,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/product_4.png",
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/product_5.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/product_6.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/product_7.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/product_8.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/product_9.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/product_10.png",
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/product_11.png",
    new_price: 95.0,
    old_price: 190.5,
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: "/product_12.png",
    new_price: 89.0,
    old_price: 90.5,
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_13.png",
    new_price: 895.0,
    old_price: 1290.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_14.png",
    new_price: 815.0,
    old_price: 1220.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_15.png",
    new_price: 835.0,
    old_price: 1240.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_16.png",
    new_price: 856.0,
    old_price: 1250.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_17.png",
    new_price: 835.0,
    old_price: 3320.5,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_18.png",
    new_price: 385.0,
    old_price: 1120.5,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_19.png",
    new_price: 105.0,
    old_price: 230.5,
  },

  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_20.png",
    new_price: 185.0,
    old_price: 220.5,
  },

  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_21.png",
    new_price: 145.0,
    old_price: 200.5,
  },

  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_22.png",
    new_price: 85.0,
    old_price: 120.5,
  },

  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_23.png",
    new_price: 85.0,
    old_price: 120.5,
  },

  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: "/product_24.png",
    new_price: 35.0,
    old_price: 66.5,
  },

  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_25.png",
    new_price: 45.0,
    old_price: 150.5,
  },

  {
    id: 26,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_26.png",
    new_price: 785.0,
    old_price: 1777.5,
  },

  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_27.png",
    new_price: 445.0,
    old_price: 620.5,
  },

  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_28.png",
    new_price: 855.0,
    old_price: 550.5,
  },

  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_29.png",
    new_price: 550.0,
    old_price: 630.5,
  },

  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_30.png",
    new_price: 43.0,
    old_price: 123.5,
  },

  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_31.png",
    new_price: 555.0,
    old_price: 1000,
  },

  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_32.png",
    new_price: 335.0,
    old_price: 440.5,
  },

  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_33.png",
    new_price: 632.0,
    old_price: 421.5,
  },

  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_34.png",
    new_price: 42.0,
    old_price: 1242.5,
  },

  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_35.png",
    new_price: 444.0,
    old_price: 932.5,
  },

  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: "/product_36.png",
    new_price: 234.0,
    old_price: 345.5,
  }];

let myBag = [];

let orders = [];

// let i = 1;
// products  = products .map((item) => {
//   let obj = { ...item, id: i++ };
//   return obj;
// });

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/my-bag", (req, res) => {
  res.json(myBag);
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/add-mybag", (req, res) => {
  let obj = req.body;
  myBag.push(obj);
  res.send(`Element with ${obj.name} was added to bag`);
});

// app.post("/add-orders", (req, res) => {
//   let obj = req.body;
//   orders.push(obj);
//   res.send(`Orders of ${obj.email} was added orders`);
// });

app.post("/add-orders", (req, res) => {
  let obj = req.body;
  orders.push(obj);
  res.json(orders);
});

app.delete("/delete-mybag/:id", (req, res) => {
  let id = parseInt(req.params.id);
  myBag = myBag.filter((item) => id !== item.id);
  res.send(
    `Element with ${myBag.find((item) => id === item.id).name
    } was deleted from bag`
  );
});

app.delete("/delete-admin/:id", (req, res) => {
  console.log('DELETE request received:', req.url);
  try {
    let id = parseInt(req.params.id);
    products = products.filter((item) => id !== item.id);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/add-admin", (req, res) => {
  let obj = req.body;
  obj.image = products[4].image;
  products.push(obj);
  res.send(`Element with ${obj.name} was added to products `);
});

app.put("/change-admin/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let index = products.findIndex((item) => id === item.id);
  products[index] = { ...req.body, image: products[index].image };
  res.send(`Element ${req.body.name} was changed`);
});

app.get("/search-products /:searchValue", (req, res) => {
  let searchValue = req.params.searchValue;
  let filteredArray = products.filter((item) =>
    item.name.startsWith(searchValue)
  );
  res.json(filteredArray);
});

app.get("/search-admin/:searchValue", (req, res) => {
  let searchValue = req.params.searchValue;
  let filteredArray = products.filter((item) =>
    item.name.startsWith(searchValue)
  );
  res.json(filteredArray);
});

app.listen(HOST, () => {
  console.log(HOST + " OK");
});
