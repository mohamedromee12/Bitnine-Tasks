const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/auth")
  .then(() => {
    console.log("mogodb connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });


  const newSchema = new mongoose.Schema({
    email: {
        type: "string",
        required: true
    },
    password: {
        type: "string",
        required: true
    }
  })

  const collection = mongoose.model("collection", newSchema)

  module.exports = collection;