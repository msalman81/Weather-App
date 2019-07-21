require('dotenv').config()
const request = require("request");
const forecast = (data, time, callback) => {
  const url = "https://api.darksky.net/forecast/"+process.env.DARKSKY_APIKEY+"/" + data.latitude + "," + data.longitude + "," + time;
  request({
    url: url,
    json: true
  }, (error, response) => {
    console.log(response.body);
    if (error) {
      callback("There are some problems in connecting to weather api", undefined);
    } else if (response.body.error) {
      callback("invalid location added", undefined);
    } else {
      if (response.body.daily) {
        const forecastVar = {
          summary: response.body.daily.data[0].summary,
          maxTemp: response.body.daily.data[0].temperatureHigh,
          minTemp: response.body.daily.data[0].temperatureLow,
          rainChance: response.body.daily.data[0].precipProbability * 100,
          icon: response.body.daily.data[0].icon
        }

        callback(undefined, forecastVar);
      } else {
        callback("Please try to be more specific in terms of location", undefined);
      }
    }

  });
}
module.exports = forecast;
