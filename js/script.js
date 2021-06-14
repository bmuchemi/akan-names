

function akan() { 
    var year = parseInt(document.getElementById("year")).value;
    var month = parseInt(document.getElementById("month")).value;
    var day = parseInt(document.getElementById("date")).value;
    var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;

    var maleNames = ["Kwasi","Kwadwo","Kwadena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    var date = new Date(month+'/'+date+'/'+year);
    var akanDay = date.getDay()
    console.log(akanDay);
    var gender = null;
    
    if (akanDay == 0 ){
        day = "Sunday";
    }
    else if (akanDay == 1){
        day = "Monday";
    }
    else if (akanDay == 2){
        day = "Teusday";
    }
    else if (akanDay == 3){
        day = "Wednesday"; 
    }
    else if (akanDay == 4){
        day = "Thursday";
    }
    else if (akanDay == 5){
        day = "Friday";
    }
    else {
        day = Saturday
    }
    
    
    var birth  = new Date(year + "/" + month + "/" + day);
    var born = birth.getDay();
    
    if (day<0 || day>31){
        alert ("Enter valid day")
    }
    if (year>2023 || year<1900){
        alert ("No one's that old!")
    }
    if (month>12 || month<1){
        alert ("Enter valid month!")
    }
    

    
if (gender === "female") {
    alert("Your name is: " + femaleNames[born] + "and you were born on " + akanDay[born])
} else if (gender === "male") {
    alert("Your name is: " + maleNames[born] + "and you were born on " + akanDay[born])
}

    
}



   
      