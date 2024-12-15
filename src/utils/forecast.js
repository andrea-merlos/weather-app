const request = require("request");

const forecast = (latitude, longitude, temperature, callback) => {
  const url =
    `http://api.weatherstack.com/current?access_key=2a5b274c6cde612fe0396d5e33a53c56&query=${latitude},${longitude}&units=${temperature}` +
    latitude +
    "," +
    longitude +
    "&units=" +
    temperature;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degress out."
      );
    }
  });
};

module.exports = forecast;
