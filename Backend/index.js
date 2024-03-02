const express = require("express");
const app = express();
const weatherRoute = require("./routes");
const cors = require("cors");

app.use(cors());
app.use("/weather-info", weatherRoute);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8080, () => {
  console.log("Listening on port " + 8080);
});
