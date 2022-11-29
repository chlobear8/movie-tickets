//Business User Interface

function Ticket(time, age, movie) {
this.time = time;
this.age = age;
this.movie = movie;
}

Ticket.prototype.timePrice = function() {
  let timePrice = 0;
  if (Ticket.time === "matinee") {
    timePrice += 5;
  }
  else if (Ticket.time === "afternoon") {
    timePrice += 10;
  }
  else {
    timePrice += 15;
  }
  return timePrice;
}

Ticket.prototype.agePrice = function() {
  let agePrice = 0;
  if (Ticket.age === "youth") {
    timePrice += 2;
  }
  else if (Ticket.age === "senior") {
    agePrice += 5;
  }
  else {
    agePrice += 10;
  }
  return agePrice;
}

Ticket.prototype.moviePrice = function() {
  let moviePrice = 0;
  if (Ticket.movie === "old movie") {
    moviePrice += 2;
  }
  else {
    moviePrice += 5;
  }
  return moviePrice;
}

Ticket.prototype.totalPrice = function() {
  return (timePrice + agePrice + moviePrice).toString();
}

//User Interface Logic



function displayPrice(totalPrice) {
  let displayDiv = document.querySelector("div#display-price");
  console.log(totalPrice);
  displayDiv.innerText = null;
  let h4 = document.createElement("h4");
  h4.append("Your ticket costs: $" + totalPrice)
  displayDiv.append(h4);
}


function handleRadio(event) {
  event.preventDefault();
  const timeSelection = document.querySelector("input[name='time']:checked").value;
  const ageSelection = document.querySelector("input[name='age']:checked").value;
  const movieSelection = document.querySelector("input[name='movie']:checked").value;
  let movieTicket = new Ticket(timeSelection, ageSelection, movieSelection);
  displayPrice(movieTicket);
}



window.addEventListener("load", function() {
  this.document.getElementById("radio-form").addEventListener("submit", handleRadio);
});
