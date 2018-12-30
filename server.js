const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// create express app
const app = express();

// parse request of content-type -
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse request of content-type - application/json
app.use(express.json());

// DB Config
const db = require("./config/db");
mongoose.Promise = global.Promise;

// Connecting to database
mongoose
  .connect(
    db.url,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log(err);
    process.exit();
  });

// Require Notes route
require("./app/routes/notes")(app);

// define a simple route
app.get("/", (req, res) => {
  res.json({ message: " Welcome to Easy Notes application!!" });
});

// define PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server starting at port ${PORT}`));
