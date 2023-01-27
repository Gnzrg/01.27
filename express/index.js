const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 8090;
const app = express();

let products = [
  {
    id: 1,
    productName: "Lettuce",
    categoryId: 1,
    categoryName: "VEGETABLES",
    isStock: true,
    price: "$2.99",
  },
  {
    id: 2,
    productName: "Premium Burger Buns",
    categoryId: 2,
    categoryName: "BREADS",
    isStock: true,
    price: "$4.99",
  },
  {
    id: 3,
    productName: "Mince",
    categoryId: 3,
    categoryName: "MEAT",
    isStock: true,
    price: "$12.99",
  },
  {
    id: 4,
    productName: "Mayonaisse",
    categoryId: 4,
    categoryName: "SPREADS",
    isStock: true,
    price: "$3.99",
  },
  {
    id: 5,
    productName: "Carrots",
    categoryId: 1,
    categoryName: "VEGETABLES",
    isStock: true,
    price: "$1.99",
  },
  {
    id: 6,
    productName: "Premium Sauce",
    categoryId: 4,
    categoryName: "SPREADS",
    isStock: false,
    price: "$13.99",
  },
];

app.use(cors());
app.use(bodyParser());

app.get("/", (req, res) => {
  res.json({ products });
});

app.get("/products", (req, res) => {
  if (!id) res.json({ status: false, message: "id not found" });
  const newArr = products.filter((e) => e.id == id);
  if (newArr.length == 0) {
    res.json({ status: false, message: "product id not found" });
  }

  res.json({ status: true, result: newArr[0] });
});
app.post("/product", (req, res) => {
  console.log(req.body);
  const { productName, categoryId, categoryName, isStock, price } = req.body;
  let id = products.length + 1;

  products.push({ id, productName, categoryName, categoryId, isStock, price });
  res.json({ status: true, result: products });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
