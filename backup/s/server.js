const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app
const app = express();

// db
  mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.cwbqu.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Database Connection Successful!!'))
  .catch(err => console.error(err));


// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port} ${process.env.MONGO_DB_DATABASE}`));



