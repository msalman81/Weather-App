const search = document.querySelector('input')
document.querySelector("form").addEventListener("submit",function(e){
  e.preventDefault();
  const location = search.value;
  const timeVar=new Date(document.querySelector(".Bday").value).getTime() / 1000;

  fetch('https://cors-anywhere.herokuapp.com/http://localhost:3000/weather?address=' + location+"&time="+timeVar).then((response) => {
      response.json().then((data) => {
          if (data.error) {
            console.log(data);
          } else {
            console.log(data);
          }
      })
  })
});
