$(document).ready(function () {
  // listen for save button clicks
  $(".saveBtn").on("click", function () {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save data in localStorage
    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if the time has changed to move to different block
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  // Check if time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $("#hour-0 .description").val(localStorage.getItem("hour-0"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));
  $("#hour-6 .description").val(localStorage.getItem("hour-6"));
  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));

  // display current day on page
  $("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
});
