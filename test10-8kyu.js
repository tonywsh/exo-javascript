function setAlarm(employed, vacation){
  var alarm = true;
   if (employed == true && vacation == true) alarm = false;
  else if (employed == true && vacation == false) alarm = true;
  else if (employed == false && vacation == false) alarm = false;
  else alarm = false;
  return alarm
}
console.log(setAlarm(true, true))