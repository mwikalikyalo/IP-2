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
};

//arrays
let dayOfTheWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let maleNames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let femaleNames=['Akosua', 'Adwoa', 'Abenna', 'Akua', 'Yaa', 'Afua', 'Ama'];
let gender = ["male", "female"];

//calculations
function calculateTheDay(){
    getdayOfTheWeek();
        dayOfTheWeek= ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + days ) % 7;
        console.log("Day of the week");
        return (math.floor(dayOfTheWeek));    
}

if(dayOfTheWeek === 0 || "0" && male){
    prompt("Your Akan Name is Kwasi");
} else{
    prompt("Your Akan Name is Akosua");
}

if(dayOfTheWeek === 1 || "1" && male){
    prompt("Your Akan Name is Kwadwo");
} else{
    prompt("Your Akan Name is Adwoa");
}

if(dayOfTheWeek === 2 || "2" && male){
    prompt("Your Akan Name is Kwabena");
} else{
    prompt("Your Akan Name is Abenna");
}

if(dayOfTheWeek === 3 || "3" && male){
    prompt("Your Akan Name is Kwaku");
} else{
    prompt("Your Akan Name is Akua");
}

if(dayOfTheWeek === 4 || "4" && male){
    prompt("Your Akan Name is Yaw");
} else{
    prompt("Your Akan Name is Yaa");
}

if(dayOfTheWeek === 5 || "5" && male){
    prompt("Your Akan Name is Kofi");
} else{
    prompt("Your Akan Name is Afua");
}

if(dayOfTheWeek === 6 || "6" && male){
    prompt("Your Akan Name is Kwame");
} else{
    prompt("Your Akan Name is Ama");
}
