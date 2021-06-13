function akan(){
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;


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
      var B = new Date(month+'/'+date+'/'+year);
      var akanday = B.getDay()
  console.log(akanday);
  if (akanday == 0)
  {
      Day = "Sunday";
  }
  else if (akanday == 1)
  {
      Day = "Monday";
  }
  else if (akanday == 2)
  {
      Day = "Tuesday";
  }
  else if (akanday == 3)
  {
      Day = "Wednesday";
  }
  else if (akanday == 4)
  {
      Day = "Thursday";
  }
  else if (akanday == 5)
  {
      Day = "Friday";
  }
  else if (akanday == 6)
  {
      Day = "Saturday";
  }

  if(date<0 || date>31){
    alert("Please Enter a valid day")
  }
  if(month<0 || month>12){
    alert("Please Enter a valid Month")
  }
  if(year<1900 || year>2022){
      alert("Is that really your age?")
  }
}