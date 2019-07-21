const request = require("request");
const express = require("express");
const app = express();
const geocode = require(__dirname + "/geocode.js");
const forecast = require(__dirname + "/forecast.js");
app.use(express.static("public"));

app.listen(3000, function() {
  console.log("server is fired up");
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/weather", function(req, res) {
  var address = req.query.address;
  var time = req.query.time;
  console.log(address, time);
  geocode(address, (error, data) => {
    if (error) {
      return res.send({
        error: error
      });
    }
    console.log(data.latitude);
    console.log(data.longitude);
    forecast(data, time, (error, forecast) => {
      if (error) {
        return res.send({
          error: error
        });
      }
      console.log(forecast);
      res.send({
        forecast,
        location: data.place,
        address: address
      });
    });
  });
});
