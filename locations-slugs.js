
const app = document.getElementById('results');

const header = document.getElementById('header');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

const apiendpoint = 'https://kiwicom-prod.apigee.net/';
// const apiendpoint = 'https://api.skypicker.com/';

header.appendChild(logo);
app.appendChild(container);

// const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);

//LOCATIONS

var airports = 10;
var term = 'Brno';
var locale = 'en-US';
var locationtypes0 = 'airport';
// var locationtypes1 = '';
// var locationtypes2 = '';


document.getElementById("entrydata").innerHTML = 'Airports: ' + airports 
        + '<br>term: ' + term 
        + '<br>locale: ' + locale
        + '<br>locationtypes: ' + locationtypes0;
        // + ", " + locationtypes1
        //  + ", " + locationtypes2; 

var locationsapicall = apiendpoint + 'locations/query?term=' + term + '&locale=' + locale + '&location_types=' + locationtypes0 +'&limit=' + airports + '&active_only=true';
// +'&location_types=' +  locationtypes1 + '&location_types=' +  locationtypes2 


// load all SEM routes

var semrouteslist = 'https://r-albert-price-ranker.skypicker.com/albert-routes';

var semroutesrequest = new XMLHttpRequest();

request.open('GET',semrouteslist,true);
request.setRequestHeader("Content-type","application/json");

console.log(semroutesrequest);

//-----

console.log(locationsapicall);
var request = new XMLHttpRequest();

// ***  FOR API.SKYPICKER ***
// request.open('GET', 'https://api.skypicker.com/locations?term=Kyiv&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name', true);

// *** FOR TEQUILA *** 
request.open('GET', locationsapicall, true);
request.setRequestHeader("Content-type", "application/json");
request.setRequestHeader('apikey', kiwiapikey);

// curl -X GET "https://kiwicom-prod.apigee.net/locations/query?term=PRG&locale=en-US&location_types=airport&limit=10&active_only=true" -H "accept: application/json" -H "apikey: 6oXV63jo5UxlVhrZGsU4OzWjG27tDoDf"
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
    // debugger;
  var allentries = data.locations.length;
  console.log(allentries);
  for (var i = 0; i < allentries; i++) {
    console.log(data.locations[i].id);
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    const h1 = document.createElement('h1');
    if (data.locations[i].type = "city") {
      h1.textContent = "city: "+data.locations[i].name;
      console.log(h1.textContent);
      // } 
      // else { 
      //   if (data.locations[i].type = "city") {
      //     h1.textContent = "city: " + data.locations[i].name + "(" + data.locations[i].id + "), "  
      //     + data.locations[i].country.name;
      //   } else {
      //     h1.textContent = data.locations[i].name;
      //   } 
      };
      if (data.locations[i].type = "airport") {
        debugger;
        h1.textContent = "airport: "+data.locations[i].name+", ";
        console.log(h1.textContent);
      };
  
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

// ***  
