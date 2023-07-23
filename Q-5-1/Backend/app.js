const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const bcrypt = require("bcrypt");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({
      email: email,
      password: password,
    });

    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (err) {
    console.log(err);
    res.json("not exist");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      console.log("exist");
      res.json("exist");
    } else {
      console.log("Entered");
      await collection.insertMany([data]); 
      res.json("not exist");
    }
  } catch (err) {
    console.log(err);
    res.json("not exist");
  }
});

app.listen(8000, () => {
  console.log("listening on 8000");
});
