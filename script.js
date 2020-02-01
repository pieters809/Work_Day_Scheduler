// Global variables
var currentDay = document.getElementById("currentDay");
var todaysDate = moment().format("MMMM Do YYYY, h:mm a"); 
var hourEl = $("#hour").data("time");
var saveButton = $(".saveBtn");
var description = $(".description");
var descriptionEl = $(".description").val();
var timeNow = moment().format('HH');
var table = $("#table");

console.log("this should be the current hour " + timeNow);
console.log("this is the hour element " + hourEl);



//Turns hours colors based on time 
function timePassing (){
        $(".row").each(function() {
            // console.log(i);
        var description = $(".row").length;
        console.log(description);
        hourEl = parseInt($(this).attr("id"));
        console.log(hourEl);
        console.log(this);
        if(hourEl < timeNow){
            $(this).addClass("past");
            console.log("past");
        } else if (hourEl === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
            console.log("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            console.log("future");
        };
     });
    };
    // save button listener.
$(".saveBtn").on("click", function(){
    console.log("register the click");
    var hourStore = parseInt($(this).parents("div").attr("id"));
    var descriptStore = $(this).siblings("textarea").val();
    console.log(hourStore);
    console.log(descriptStore);
    save(hourStore, descriptStore);

// Save button to add data to local storage.
function save(hStore, dStore) {
    event.preventDefault();
    localStorage.setItem(hStore , dStore);

 };
});

// // Prints items saved in the local storage.
$(document).ready(function(){
    $(".hour").each(function() {
        $("#0 .description").val(localStorage.getItem("0"));
        $("#1 .description").val(localStorage.getItem("1"));
        $("#2 .description").val(localStorage.getItem("2"));
        $("#3 .description").val(localStorage.getItem("3"));
        $("#4 .description").val(localStorage.getItem("4"));
        $("#5 .description").val(localStorage.getItem("5"));
        $("#6 .description").val(localStorage.getItem("6"));
        $("#7 .description").val(localStorage.getItem("7"));
        $("#8 .description").val(localStorage.getItem("8"));
});
});

// current time.
console.log("Current time: ", moment().format('LTS'));

// Date on top of the page.
currentDay.innerHTML = todaysDate;
timePassing();