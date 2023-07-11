// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var currentTime = dayjs().format('H');
  // var timeBlocks = $('.time-block');
  // console.log(currentTime);
  
  $('.saveBtn').on('click', function(){
    // console.log($(this).siblings('.description').val());
    // console.log($(this).parent().attr('id'));
    
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('.description').val());
    
  })
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $('.time-block').each(function (){
    // console.log(currentTime)
    // console.log(parseInt($(this).attr('id').split('-').pop()));
    var timeBlockHour = parseInt($(this).attr('id').split('-').pop());
    // console.log($(this).attr('id').split('-').pop() > currentTime)

    if (timeBlockHour === currentTime){
      $(this).addClass('present');
      $(this).removeClass('past');
      $(this).removeClass('future');
    } else if (timeBlockHour < currentTime) {
      $(this).addClass('past');
      $(this).removeClass('present');
      $(this).removeClass('future');
    } else {
      $(this).addClass('future');
      $(this).removeClass('past');
      $(this).removeClass('present');
    }
  }
  )
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $('.time-block').each(function(){
    $(this).children("textarea").val(localStorage.getItem($(this).attr('id')));
    // console.log($(this).children("textarea").val())
  })
  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('MMMM-D-YYYY dddd h:m a');
  console.log(currentDate);
  
  $("#currentDay").text(currentDate);
});


//-------------------------------------------
