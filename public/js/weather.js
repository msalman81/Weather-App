const search = document.querySelector('input')
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.querySelector(".degrees").innerHTML = "Loading...";
  document.querySelector(".summary").textContent = "";
  document.querySelector(".date").textContent = "";
  document.querySelector(".location").textContent = "";
    document.querySelector(".weatherIcon").src = "";
  const location = search.value;
  const timeVar = new Date(document.querySelector(".Bday").value).getTime() / 1000;

  fetch('http://localhost:3000/weather?address=' + location + "&time=" + timeVar).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        document.querySelector(".degrees").innerHTML = data.error;
      } else {
        console.log(data);
        document.querySelector(".degrees").innerHTML = Math.floor(data.forecast.minTemp) + "-" + Math.floor(data.forecast.maxTemp) + " &#8457;";
        document.querySelector(".summary").textContent = data.forecast.icon+", "+data.forecast.summary;
        document.querySelector(".date").textContent = document.querySelector(".Bday").value;
        document.querySelector(".location").textContent = data.location;

        switch (data.forecast.icon) {
          case "clear-day":
            document.querySelector(".weatherIcon").src = "/img/Sunny.png";
            break;
          case "clear-night":
            document.querySelector(".weatherIcon").src = "/img/clear-night.png";
            break;
          case "rain":
            document.querySelector(".weatherIcon").src = "/img/rainy.png";
            break;
          case "snow":
            document.querySelector(".weatherIcon").src = "/img/snowing.png";
            break;
          case "sleet":
            document.querySelector(".weatherIcon").src = "/img/sleet.png";
            break;
          case "wind":
            document.querySelector(".weatherIcon").src = "/img/windy.png";
            break;
          case "fog":
            document.querySelector(".weatherIcon").src = "/img/foggy.png";
            break;
          case "cloudy":
            document.querySelector(".weatherIcon").src = "/img/Cloudy.png";
            break;
          case "partly-cloudy-day":
            document.querySelector(".weatherIcon").src = "/img/partly-cloudyD.png";
            break;
          case "partly-cloudy-night":
            document.querySelector(".weatherIcon").src = "/img/partly-cloudyN.png";
            break;

        }
      }
    })
  });
});
