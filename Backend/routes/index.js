const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/city/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=94749519e1ef7e1c176399f75ffb04c3`
    );
    res.send(resp.data); // Send the response data directly
  } catch (error) {
    res
      .status(500)
      .send(
        error.response ? error.response.data : "Error fetching weather data"
      );
  }
});

router.get("/forecast/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=94749519e1ef7e1c176399f75ffb04c3`
    );
    res.send(resp.data);
  } catch (error) {
    res
      .status(500)
      .send(
        error.response ? error.response.data : "Error fetching forecast data"
      );
  }
});

router.get("/coordinates", async (req, res) => {
  const { lat, lon } = req.query;
  console.log(req.query);
  try {
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=94749519e1ef7e1c176399f75ffb04c3`
    );
    res.send(resp.data);
  } catch (error) {
    res
      .status(500)
      .send(
        error.response
          ? error.response.data
          : "Error fetching weather data by coordinates"
      );
  }
});
module.exports = router;
