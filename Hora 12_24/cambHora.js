const convertTime12to24 = time12h => {
    const [time, modifier] = time12h.split(" ");
   
    let [hours, minutes] = time.split(":");
   
    if (hours === "12") {
      hours = "00";
    }
   
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
   
    return `${hours}:${minutes}`;
  };
   
  var convertedTime = convertTime12to24("07:05 PM");
  console.log(convertedTime);
