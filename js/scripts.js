var itemsNeeded= ['century', 'year', 'month', 'day'];

//parseint and validate
function validate() {
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);

  if (century==="") {
      alert("Enter the century:");
      return false;
  } else if(year===""){
      alert("Enter the year:");
      return false;
  } else if(month===""){
      alert("Enter the month:");
  } else if(day===""){
      alert("Enter the day of the month:")
  } else if(gender===""){
      alert("Gender input required:");
  }
}

//arrays
let daysOfTheWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let maleNames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let femaleNames=['Akosua', 'Adwoa', 'Abenna', 'Akua', 'Yaa', 'Afua', 'Ama'];

//calculations
function calculateTheDay(){
    getdayOfTheWeek();
        dayOfTheWeek= ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + days ) % 7;
        console.log("Day of the week");
        return (math.floor(dayOfTheWeek));    
}





