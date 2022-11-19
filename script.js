function capitalCase(string) {
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

function generateTicket() {
  var dropdown = document.getElementById('form');
  var ticket = document.getElementById('ticket');

  // hide the form and show the ticket
  dropdown.classList.add('hidden');
  ticket.classList.remove('hidden');

  // get data from dropdown menus
  var start = document.getElementById('start').value.replace("_", " ");
  var destination = document.getElementById('destination').value.replace("_", " ");
  
  // add length of start and end location + 20 to get the fixed price
  var price = start.length + destination.length + 20;

  // get ticket elements || use this to generate my ticket form finally
  var ticketStart = document.getElementById('ticket-start');
  var ticketEnd = document.getElementById('ticket-end');
  var ticketPrice = document.getElementById('ticket-price');
  var ticketId = document.getElementById('ticket-id');

  // set the ticket values from the dropdowns
  ticketStart.innerHTML = capitalCase(start);
  ticketEnd.innerHTML = capitalCase(destination);
  ticketPrice.innerHTML = price;
  // generate a unique ticket id
  // id = 3 letters of start + 3 letters of end + the current time
  var date = new Date();
  var month = date.getMonth() + 1;
  ticketId.innerHTML = start.slice(0,3) + destination.slice(0,3) + date.getHours() + date.getMinutes() + date.getSeconds() + date.getDate() + month + date.getFullYear();

}