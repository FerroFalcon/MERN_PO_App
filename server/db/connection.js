const mongoose = require("mongoose");

//

const DB =
  "mongodb+srv://user404:ZgXOAaN89eCjz5eE@cluster0.j1x3i0z.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conection started");
  })
  .catch((err) => {
    console.log(err.message);
  });
