var currentTime;
var currentHour = moment().format("H");
var calendarItem = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: ""
};

//loads time at top of page & refreshes
setInterval(function() {
  currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(currentTime);
}, 999);

//On save click moves calendar item to local storage
for (let hour in calendarItem) {
  $("." + hour).on("click", function() {
    calendarItem[hour] = $(this)
      .parent()
      .children("textarea")
      .val();
    localStorage.setItem("calendarItem", JSON.stringify(calendarItem));
  });
}

//Sets calendarItem to information stored in local storage
calendarItem = JSON.parse(localStorage.getItem("calendarItem"));

//sets color for input blocks
for (let i = 9; i < 18; i++) {
  let timeSlot = $("#" + i);
  if (i == currentHour) {
    timeSlot.removeClass("past future").addClass("present");
  } else if (i < currentHour) {
    timeSlot.removeClass("present future").addClass("past");
  } else {
    timeSlot.removeClass("past present").addClass("future");
  }
  timeSlot.val(calendarItem[i]);
}
