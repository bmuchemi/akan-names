function akan(){

    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var male = document.getElementById("Male").value;
    var female = document.getElementById("Female").value;


    var maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
      ];
      var femaleNames = [
        "Akosua",
        " Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama"
      ];
    
      var  akanDay = parseInt( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date )%7;
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
  else if (akanday == 5)
  {
      Day = "Friday";
  }
  else 
  {
      Day = "Saturday";
  }

  if (date<0 || date>31){
    alert("Please Enter a valid day")
  }
  if (month<0 || month>12){
    alert("Please Enter a valid Month")
  }
  if (year<1900 || year>2022){
      alert("Is that really your age?")
  }
}