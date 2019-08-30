

// import {kiwiapikey} from '.env';
console.log(kiwiapikey);

const app = document.getElementById('results');

const header = document.getElementById('header');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');
header.appendChild(logo);
app.appendChild(container);


//SEARCH

var apiendpoint = 'https://kiwicom-prod.apigee.net/v2/search'
var fly_from = 'city:FRA';
var fly_to = 'city:HND';
var date_from = '10/09/2019';
var date_to = '10/09/2019';
var return_from = '5/10/2019';
var return_to = '5/10/2019';
var locale = 'en-US';
var flight_type= 'round';
var currency = 'EUR';
var sort = 'price';

document.getElementById("entrydata").innerHTML = 'From: ' + fly_from
        + '<br>To: ' + fly_to
        + '<br>locale: ' + locale
        + '<br>dates: ' + date_from + '..' + date_to + ' -- ' + return_from + '..' + return_to 
        + '<br>flight type:' + flight_type
        + '<br>sort:' + sort; 

var searchapicall = '?fly_from=' + fly_from + '&fly_to=' + fly_to +'&locale=' + locale 
                + '&date_from=' + date_from + '&date_to=' + date_to
                + '&return_from=' + return_from + '&return_to=' + return_to
                + '&flight_type=' + flight_type
                + '&curr=' + currency +
                + '&sort=' + sort;
console.log(apiendpoint+searchapicall);
var request = new XMLHttpRequest();
// request.open('GET', 'https://api.skypicker.com/locations?term=PRG&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name', true);

// *** FOR TEQUILA *** 
request.open('GET', apiendpoint+searchapicall, true);
request.setRequestHeader("Content-type", "application/json");
request.setRequestHeader('apikey', kiwiapikey);


request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
    // debugger;
  var allresults = data.data.length;
  for (var i = 0; i < allresults; i++) {
    console.log(data.data[i].flyFrom + ' - ' + data.data[i].flyTo +  ' | ' + data.data[i].price + currency);
    const line = document.createElement('div');
    line.setAttribute('class', 'longlist');
    var fullroute = data.data[i].flyFrom;
    var routelength = data.data[i].route.length; 
    for (var j = 0; j < routelength; j++) {
      fullroute = fullroute + '-' + data.data[i].route[j].flyTo;
    }
    const div = document.createElement('p');
    div.textContent = fullroute + '  ' + data.data[i].price + currency;
    div.class 
    container.appendChild(p);
    }

  //   data.forEach(id => {
    // const card = document.createElement('div');
  //   card.setAttribute('class', 'card');

  //   const h1 = document.createElement('h1');
  //   h1.textContent = id;

  //   //   const p = document.createElement('p');
  //   //   movie.description = movie.description.substring(0, 300);
  //   //   p.textContent = `${movie.description}...`;

    // card.appendChild(p);
  //  });
  }
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();