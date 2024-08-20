const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json(corsOptions));
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.duidxgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const productsCollection = client.db("e-shop").collection("products");

    app.get("/products", async (req, res) => {
      const {
        page = 1,
        limit = 6,
        search = "",
        sort = "",
        category = "",
        price = "",
      } = req.query;

      const skip = (page - 1) * limit;
      const query = {};
      if (search) query.product_name = { $regex: search, $options: "i" };
      if (category) query.category = category;
      if (price) {
        const [min, max] = price.split("-");
        query.price = { $gte: parseFloat(min), $lte: parseFloat(max) };
      }
      const sortOptions = {};
      if (sort === "price_asc") sortOptions.price = 1;
      if (sort === "price_desc") sortOptions.price = -1;
      if (sort === "date_desc") sortOptions.createdAt = -1;
      const total = await productsCollection.countDocuments(query);
      const products = await productsCollection
        .find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(parseInt(limit))
        .toArray();

      res.send({ products, total });
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
