const app = document.getElementById('results');

const header = document.getElementById('header');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

header.appendChild(logo);
app.appendChild(container);

//LOCATIONS

var airports = 10;
var airport = 'Kyiv';
var locale = 'en-US';
var locationtypes = 'airport';

document.getElementById("entrydata").innerHTML = 'Airports: ' + airports 
        + '<br>airport: ' + airport 
        + '<br>locale: ' + locale
        + '<br>locationtypes: ' + airport; 

var locationsapicall = '?term=' + airport + '&locale=' + locale + '&location_types=' + locationtypes + '&limit=' + airports + '&active_only=true&sort=name';
console.log(locationsapicall);
var request = new XMLHttpRequest();
// request.open('GET', 'https://api.skypicker.com/locations?term=PRG&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name', true);
request.open('GET', 'https://api.skypicker.com/locations'+locationsapicall, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
    // debugger;
  var allairports = data.locations.length;
  console.log(allairports);
  for (var i = 0; i < allairports; i++) {
    console.log(data.locations[i].id);
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const h1 = document.createElement('h1');
    h1.textContent = "airport: " + data.locations[i].id + ", " + data.locations[i].city.name;
    container.appendChild(card);
    card.appendChild(h1);
    const p = document.createElement('p');
    p.textContent = `${data.locations[i].name}, ${data.locations[i].dst_popularity_score}`;
    card.appendChild(p);
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