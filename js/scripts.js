//Business User Interface

function Ticket(time, age, movie, price) {
this.time = time;
this.age = age;
this.movie = movie;
this.price = price;
}

Ticket.prototype.timePrice = function() {
  let timePrice = 0
  if (this.time === "matinee") {
    timePrice += 5;
  }
  else if (this.time === "afternoon") {
    timePrice += 10;
  }
  else {
    timePrice += 15;
  }
  return timePrice;
}

Ticket.prototype.agePrice = function() {
  let agePrice = 0;
  if (this.age === "youth") {
    agePrice += 2;
  }
  else if (this.age === "senior") {
    agePrice += 5;
  }
  else {
    agePrice += 10;
  }
  return agePrice;
}

Ticket.prototype.moviePrice = function() {
  let moviePrice = 0;
  if (this.movie === "old movie") {
    moviePrice += 2;
  }
  else {
    moviePrice += 5;
  }
  return moviePrice;
}

Ticket.prototype.totalPrice = function() {
  let totalPrice = (this.timePrice() + this.agePrice() + this.moviePrice()).toString();
  return totalPrice;
}


//User Interface Logic



function displayPrice(movieTicket) {
  let displayDiv = document.querySelector("div#display-price");
  displayDiv.innerText = null;
  let h4 = document.createElement("h4");
  h4.append("Your ticket costs: $" + movieTicket.totalPrice())
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
