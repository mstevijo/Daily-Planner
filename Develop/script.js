// group all our code to run weh DOM is ready
$(document).ready(function () {
  // value.text(localStorage.getItem("hour-" + time, value));
  var rowArr = $(".time-block");
  // var userInput9 = $("#hour9");

  var currentHour = moment().format("HH");
  $("#currentDay").text(moment().format("LLLL"));
  console.log(currentHour);

  rowArr.each(function () {
    // console.log($(this).data("hour"))
    var thisHour = parseInt($(this).data("hour"));

    if (thisHour == currentHour) {
      $(this).addClass("present");
    } else if (thisHour < currentHour) {
      $(this).addClass("past");
      // console.log("This row is past" + $(this).data("hour"))
    } else if (thisHour > currentHour) {
      $(this).addClass("future");
      // console.log("This row is future" + $(this).data("hour"))
    }
  });
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("data-hour");
    var value = $(this).siblings("textarea").val();
    localStorage.setItem("hour-" + time, value);
    //        localStorage.setItem("hour9", userInput9.val());
    // console.log(userInput.val());
  });
  // $('.saveBtn').on('click', function(){
  // localStorage.setItem("hour9", userInput9.val());
  // localStorage.setItem("hour10", userInput10.val());
  // console.log(userInput.val());

  //  }
  //  $('.saveBtn').on('click', function(){
  //     localStorage.setItem("hour10", userInput10.val());
  //  }
  // )
});
