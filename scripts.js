const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.skypicker.com/locations?term=PRG&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name', true);
request.onload = function () {

  //GET https://api.skypicker.com/locations?term=VLC&locale=en-US&location_types=airport&limit=2&active_only=true&sort=name
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(this.response);
  debugger;
  console.log(request.status);
  if (request.status >= 200 && request.status < 400) {
    debugger;
    //   // data.forEach(movie => {
    //   const card = document.createElement('div');
    //   card.setAttribute('class', 'card');

    //   const h1 = document.createElement('h1');
    //   h1.textContent = movie.title;

    //   const p = document.createElement('p');
    //   movie.description = movie.description.substring(0, 300);
    //   p.textContent = `${movie.description}...`;

    //   container.appendChild(card);
    //   card.appendChild(h1);
    //   card.appendChild(p);
    //  });
  }
  else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();