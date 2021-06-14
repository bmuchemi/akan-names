var femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

    var maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
];
var dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];


function akan(){

    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("date").value;
    var gender = null;
    if (document.getElementById("female").checked) {
        gender = "Female"
    } else if (document.getElementById("male").checked) {
        gender = "Male"
    
    
    var birth  = new Date(year + "/" + month + "/" + day);
    var born = birth.getDay(); 

    
if (gender === "female") {
    alert("Your name is: " + femaleNames[born] + "and you were born on " + dayOfTheWeek[born])
} else if (gender === "male") {
    alert("Your name is: " + maleNames[born] + "and you were born on " + dayOfTheWeek[born])
}

}


   
      