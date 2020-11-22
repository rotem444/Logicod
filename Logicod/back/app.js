const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authorisation = require("./middleware/authorisation");

require("dotenv").config();

const app = express();

mongoose
  .connect("mongodb://localhost/logicod", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conect");
  })
  .catch((err) => console.error("Could not connect to mongodb", err));

app.use(cors());
app.use(require("morgan")("dev"));
app.use(express.json());

app.use("/user", require("./routes/user"));
app.use("/exerises", authorisation, require("./routes/exerises"));

const PORT = process.env.PORT || 3000;
app.listen(3900, () => console.log("conected to server"));
