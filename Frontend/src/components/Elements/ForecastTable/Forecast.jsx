import React, { useState, useEffect } from "react";
import "./forecast.css";

const Forecast = ({ city = "London" }) => {
  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=94749519e1ef7e1c176399f75ffb04c3`
        );
        const respdata = await response.json();
        const forecasts = respdata.list;

        // Process the forecast to select one forecast per day
        const dailyData = {};
        forecasts.forEach((forecast) => {
          const date = new Date(forecast.dt * 1000).toDateString();
          if (!dailyData[date]) {
            dailyData[date] = forecast;
          }
        });

        // Convert the object to an array of forecast values
        const dailyForecastArray = Object.values(dailyData).slice(0, 6); // Ensure we only get 5 days
        setDailyForecast(dailyForecastArray);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    fetchForecast();
  }, [city]);

  return (
    <div className="forecastTable">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°C)</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {dailyForecast.map((item, index) => (
            <tr key={index}>
              <td>{new Date(item.dt * 1000).toDateString()}</td>
              <td>{item.main.temp}°C</td>
              <td>
                {item.weather[0].main} ({item.weather[0].description})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Forecast;
