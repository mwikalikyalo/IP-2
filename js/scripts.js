//arrays
let dayOfTheWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let maleNames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
let femaleNames=['Akosua', 'Adwoa', 'Abenna', 'Akua', 'Yaa', 'Afua', 'Ama'];
let gender = ["male", "female"];

//parseint
    year = document.getElementById("year");
    month = document.getElementById("month");
    dayOfMonth = document.getElementById("dayOfMonth");

//validate
var button= document.getElementById("register");
button.addEventListener("submit", validate);
function validate(e) {
    e.preventDefault();
    if(year.value===""){
      alert("Enter the year:");
      return false;
  } else if(month.value===""){
      alert("Enter the month:");
  } else if(dayOfMonth.value===""){
      alert("Enter the day of the month:");
  } else if(male.checked!==true || female.checked!== true){
      alert("Gender input required:");
  }  else{
    nameGenerator();
  }
};

//namegenerator
function nameGenerator(){
    let date= `${month.value}-${dayOfMonth.value}-${year.value}`;
    const d= new Date(date);
    var dateOfBirth= d.getDay();
    if (female.checked== true){
        alert(`Your Akan name is ${femaleNames[dateOfBirth]}`)
    } else {
        alert(`Your Akan name is ${maleNames[dateOfBirth]}`)
    }
}

document.getElementById("register").onclick= validate;





