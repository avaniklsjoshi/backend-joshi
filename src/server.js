import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

// adding Helmet to enhance your API's security
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// adding morgan to log HTTP requests
app.use(morgan("combined"));

// get driver connection
const dbo = require("./db/conn");

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("frontend/build"));
}

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
