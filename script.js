// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentTime;
var currentHour = moment().format("H");

//loads time at top of page & refreshes
setInterval(function() {
  currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(currentTime);
}, 999);

//sets color for input blocks
// console.log(currentHour);
for (let i = 9; i < 18; i++) {
  let timeSlot = $("#" + i);
  //   console.log(timeSlot);
  if (i === currentHour) {
    timeSlot.addClass("present");
  } else if (i < currentHour) {
    timeSlot.addClass("past");
  } else {
    timeSlot.addClass("future");
  }
  $("." + i).on("click", "button", function() {
    timeSlot.value;
  });
}
