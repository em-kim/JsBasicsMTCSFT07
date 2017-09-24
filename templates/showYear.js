var d = new Date();
var thisYear = d.getFullYear();
console.log(thisYear);
var dayOfWeek = d.getDay();
console.log(dayOfWeek);

var myArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


document.getElementById('today').innerHTML = myArr[dayOfWeek] + ", " + thisYear;