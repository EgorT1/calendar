const date = new Date();
let currentMonth = date.getMonth();
let currentMonthDay = date.getDate();
let year = date.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthName = monthNames[currentMonth];
const dateELement = document.getElementsByClassName("current-date")[0]
dateELement.innerHTML = monthName + '  ' + year;
const DayELement = document.getElementsByClassName("days");
let leftArrow = document.querySelector('.leftArrow');
let rightArrow = document.querySelector('.rightArrow');
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const currentWeekIndex = date.getDay();
const currentWeekDay = weekdays[currentWeekIndex];
const WeekElements = document.querySelectorAll('.day');


updateCalendar()

//move to previous month
leftArrow.addEventListener('click', function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    year--;
  }
  
  updateCalendar();
});

//move to next month
rightArrow.addEventListener('click', function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    year++;
  }
  updateCalendar();
});



function updateCalendar() { 
  let dayM = [];// reset day to an empty array  
  let weekdaysHTML = []; // reset weekdays to an empty array 
  const WeekDay = new Date(year, currentMonth, 1).getDay()-1;  // Calculate the weekday index of the first day of the current month

  const lastDay = new Date(year, currentMonth + 1, 0).getDate();  // Calculate the last day of the current month
  const prevLastDay = new Date(year, currentMonth, 0).getDate();  // Calculate the last day of the previous month
  const lastDayIndex = new Date(year, currentMonth + 1, 0).getDay();  // Calculate the weekday index of the last day of the current month

//prsntDay


  // generate  days of the week
    for (let i = 0; i < weekdays.length; i++) {
    weekdaysHTML += '<li>' + weekdays[i] + '</li>';
    }

    // Loop through WeekElements array and highlight current weekday
    for (let i = 0; i < WeekElements.length; i++) {
        if (i === currentWeekIndex) {
        WeekElements[i].classList.add("prsntWeek");
      }
    }
  
    
    // generate inactive days before the first day of the month
    for (let i = prevLastDay - WeekDay; i <= prevLastDay; i++){
      dayM += "<li class='inactive'>" + i +"</li>";
    }
  
    // generate active days for the current month
    for (let i = 1; i <= lastDay; i++) 
    {
      //mark the current day of month
        if(i === currentMonthDay && date.getMonth() === currentMonth)
        {
        dayM += '<li class="prsntDay">' + i + "</li>"
        }
        else{
          dayM += '<li>' + i + '</li>';
          }
      }

    // generate inactive days after the last day of the month
    for(let i = 1; i <= 6 - lastDayIndex; i++)
    {
      dayM += "<li class='inactive'>" + i +"</li>";
    }

    // update the HTML elements with the new calendar
    for (let i = 0; i < DayELement.length; i++) {
      DayELement[i].innerHTML = dayM;
    }

    monthName = monthNames[currentMonth];
    dateELement.innerHTML = monthName + ' ' + year;

}





