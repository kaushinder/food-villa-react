const express = require("express");
const cors = require("cors");
const restaurants = require("./restaurants.json");

const app = express();
app.use(cors());

app.get("/api/restaurants", (req, res) => {
  res.json(restaurants);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port", PORT));
