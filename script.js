const date = new Date();
let currentMonth = date.getMonth();
let year = date.getFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[currentMonth];
const dateELement = document.getElementsByClassName("current-date")[0]
dateELement.innerHTML = monthName + '  ' + year;
const DayELement = document.getElementsByClassName("days");
let WeekDay = date.getDay();

let leftArrow = document.querySelector('.leftArrow');
let rightArrow = document.querySelector('.rightArrow');

leftArrow.addEventListener('click', function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    year--;
  }
  
  updateCalendar();
});

rightArrow.addEventListener('click', function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    year++;
  }
  updateCalendar();
});

function updateCalendar() { 
  let dayM = []; // reset day to an empty array
  const firstDay = new Date(year, currentMonth, 1).getDay();
  const lastDay = new Date(year, currentMonth+1, 0).getDate();
  
    for (let i = 0; i <firstDay; i++){
      dayM+='<li></li>';
    }


    for (let i = 1; i <= lastDay; i++) {
      dayM += '<li>' + i + '</li>';
    }


    for (let i = 0; i < DayELement.length; i++) {
      DayELement[i].innerHTML = dayM;
    }

    monthName = monthNames[currentMonth];
    dateELement.innerHTML = monthName + ' ' + year;
    
}





