const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.0,
};

function logAttendeeName(attendeeObj) {
  console.log(attendeeObj.name);
}

function logTicketPrice(attendeeObj) {
  console.log(attendeeObj.ticketPrice);
}

function updateTicketType(attendeeObj, newTicketType) {
  attendeeObj.ticketType = newTicketType;
}

function updateTicketPrice(attendeeObj, newTicketPrice) {
  attendeeObj.ticketPrice = newTicketPrice;
}

function removeEventProperty(attendeeObj) {
  delete attendeeObj.event;
}

function addCheckedInProperty(attendeeObj) {
  attendeeObj.checkedIn = true;
}

// Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
