var saveButton = $(".saveBtn");

$(document).ready(function () {
  var date = moment().format("dddd MMMM Do");
  $("#currentDay").text(date);

  function presentTime() {
    var current = moment().hours();
    var time = $(".time-block");
    time.each(function () {
      var hour = parseInt($(this).attr("id"));
      if (hour === current) {
        $(this)
          .children(".col-sm-10")
          .attr("class", "present col-sm-10 description");
      } else if (current > hour) {
        $(this)
          .children(".col-sm-10")
          .attr("class", "past col-sm-10 description");
      } else {
        $(this)
          .children(".col-sm-10")
          .attr("class", "future col-sm-10 description");
      }
    });
  }
  presentTime();

  saveButton.on("click", function (event) {
    event.preventDefault();

    var text = $(this).siblings(".col-sm-10").val();
    var parent = $(this).parent().attr("id");

    localStorage.setItem(parent, text);
  });

  $("#9 textarea").val(localStorage.getItem("9"));
  $("#10 textarea").val(localStorage.getItem("10"));
  $("#11 textarea").val(localStorage.getItem("11"));
  $("#12 textarea").val(localStorage.getItem("12"));
  $("#13 textarea").val(localStorage.getItem("13"));
  $("#14 textarea").val(localStorage.getItem("14"));
  $("#15 textarea").val(localStorage.getItem("15"));
  $("#16 textarea").val(localStorage.getItem("16"));
  $("#17 textarea").val(localStorage.getItem("17"));
});
