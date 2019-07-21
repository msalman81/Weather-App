require('dotenv').config()
const request = require("request");
const geocode = (address, callback) => {
  const mapBoxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token="+process.env.MAPBOX_APIKEY;
  request({
    url: mapBoxURL,
    json: true
  }, (error, response) => {
    if (error) {
      callback("There are some problems in connecting to mapbox API");
    } else if (response.body.features.length === 0) {
      callback("Invalid location added");
    } else {
      const longitude = response.body.features[0].center[0];
      const latitude = response.body.features[0].center[1];
      const place = response.body.features[0].place_name;
      callback(undefined, {
        longitude: longitude,
        latitude: latitude,
        place: place
      });
    }

  });
}
module.exports = geocode;
