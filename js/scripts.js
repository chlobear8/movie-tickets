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

function totalPrice() {
  return (timePrice + agePrice + moviePrice).toString();
}