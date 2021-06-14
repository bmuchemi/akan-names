var akan = function(
    year, 
    month, 
    date, 
    gender
    ) {


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
        "Kudwo", 
        "Kwabena", 
        "Kwaku", 
        "Yaw", 
        "Kofi", 
        "Kwame"
    ];
    var weekDay = new Date(year, --month, date);
    var akanDay = weekDay.getDay()
  console.log(akanDay);
  if (akanDay == 0)
  {
      Day = "Sunday";
  }
  else if (akanDay == 1)
  {
      Day = "Monday";
  }
  else if (akanDay == 2)
  {
      Day = "Tuesday";
  }
  else if (akanDay == 3)
  {
      Day = "Wednesday";
  }
  else if (akanDay == 4)
  {
      Day = "Thursday";
  }
  else if (akanDay == 5)
  {
      Day = "Friday";
  }
  else
  {
      Day = "Saturday";
  }

  if(date<0 || date>31){
    alert("Please Enter a valid day")
  }
  if(month<0 || month>13){
    alert("Please Enter a valid Month")
  }
  if(year<1950 || year>2022){
      alert("Come on,no one is that old!!!")
  }
    if (gender === "Male") {
        return weekDay && maleNames[weekDay.getDay()];
    } else {
        return weekDay && femaleNames[weekDay.getDay()];
    }
}


$(document).ready(function() {
    $("form#form").submit(function(click) {
        click.preventDefault();
        var year = parseInt($("#year").val());
        var month = parseInt($("#month").val());
        var day = parseInt($("#date").val());
        var gender = $("input:radio[name=gender]:checked").val();
        var result = akan(year, month, day, gender);
        alert("Your akan name is: " + result + "  because you were born on a " + Day);
        document.getElementById("form").reset();
    });
});



   
      
