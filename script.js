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
// console.log(currentHour);

//loads time at top of page & refreshes
setInterval(function() {
  currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(currentTime);
}, 999);

//sets color for input blocks
// console.log(currentHour);
for (let i = 9; i < 18; i++) {
  let timeSlot = $("#" + i);
  if (i == currentHour) {
    timeSlot.removeClass("past future").addClass("present");
  } else if (i < currentHour) {
    timeSlot.removeClass("present future").addClass("past");
  } else {
    timeSlot.removeClass("past present").addClass("future");
  }
  $("." + i).on("click", function() {
    console.log(this);
  });
}
//make an object and target text area

// for (let j = 0; j < 9; j++) {
//   for (let i = 9; i < 18; i++) {
//     $("." + i).on("click", function() {
//       let timeSlot = $("#" + i);
//       // alert("button clicked");
//       var calArray = [
//         "9AM",
//         "10AM",
//         "11AM",
//         "12PM",
//         "1PM",
//         "2PM",
//         "3PM",
//         "4PM",
//         "5PM"
//       ];
//       var calItem = timeSlot.val();
//       // console.log(this);
//       calArray[j] = calItem;
//       console.log(calArray);
//       //   // console.log(calItem);
//       localStorage.setItem("calendarItem", JSON.stringify(calArray));
//     });
//     // let loadItems = localStorage.getItem("calendarItem");
//     // calArray = JSON.parse(loadItems);
//     // console.log(calArray);
//     // timeSlot.val(localStorage.getItem("calendarItem"));
//   }
// }
