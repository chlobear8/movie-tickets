//Business User Interface

function Ticket(time, age, movie) {
this.time = time;
this.age = age;
this.movie = movie;
}

Ticket.prototype.addPrice = function() {
  let price = 0;
  if (time === "matinee") {
    price += 5;
  }
  else if (time === "afternoon") {
    price += 10;
  }
  else {
    price += 15
  }
}