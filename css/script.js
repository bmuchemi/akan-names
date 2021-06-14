
function calculate(){

    var year = patseint(document.getElementById("year")).value;
    var month = parseint(document.getElementById("month")).value;
    var date = parseint(document.getElementById("date")).value;
    
    
    var date = new Date(year + "/" + month + "/" + day);
    var big = date.getDay(); 

    var femaleNames = [
        'Akosua',
        'Adwoa',
        'Abenaa',
        'Akua',
        'Yaa',
        'Afua',
        'Ama'
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
        'Sunday',
        'Monday',
        'Tuesday', 
        'Wednesday', 
        'Thursday', 
        'Friday', 
        'Saturday'
];


if (gender === "female") {
    alert("Your name is: " + femaleNames[big] + "and you were born on " + dayOfTheWeek[big])
} else if (gender === "male") {
    alert("Your name is: " + maleNames[big] + "and you were born on " + dayOfTheWeek[big])
}

}


   
      