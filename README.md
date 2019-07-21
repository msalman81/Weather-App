# Weather-App
This is a weather telling application that I made using MapBox API and DarkSky API. The application has weather.js which works on clientside and when user enters a date and the location and submits a fetch request is submitted to the app.js /weather route which parses the address and time and uses geocode.js which uses the mapbox api to get the latitude and longitude of the submitted location and the exact place. this data is sent back to app.js which then uses forecast.js to generate the forecast using the DarkSky API which uses the latitude and longitude to generate the weather and sends it back to app.js which then sends this data back to the clientside which then displays the data to the user accordingly.
To run this application, you can download the files and go into the app.js directory and run "npm i" and "node app.js" in the directory to run the server on localhost:3000.

preview:
![image](https://user-images.githubusercontent.com/46281169/61597691-f62a0c00-ac2c-11e9-8d52-cc90dc674178.png)
