// code is wrapped in a jQuery selector to prevent code from running until jQuery library has been installed
$(function () {
  //dayjs is used to obtain the current date, time and hour.
  var currentHour = parseInt(dayjs().format('H'));
  var currentDate = dayjs().format('MMMM-D-YYYY dddd h:mm a');

// date and time is displayed
  $("#currentDay").text(currentDate);
  
  // click feature is attached to the saveBtn
  $('.saveBtn').on('click', function(){
    // the value of the textarea is saved to local storage upon click
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('.description').val());
    
  })
 
  // when page is opened, each time block is given a class value of either past, present, or future
  $('.time-block').each(function (){
    var timeBlockHour = parseInt($(this).attr('id').split('-').pop());

    if (timeBlockHour === currentHour){
      $(this).addClass('present');
      $(this).removeClass('past');
      $(this).removeClass('future');
    } else if (timeBlockHour < currentHour) {
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
  
// when page is opened or refreshed, the textarea is filled with the corresponding value thats been saved in the local storage
  $('.time-block').each(function(){
    $(this).children("textarea").val(localStorage.getItem($(this).attr('id')));
  })
  
});


//-------------------------------------------
