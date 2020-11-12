var date = new Date();
var d =date.getDate();
var m =date.getMonth()+1;
var y =date.getFullYear();
if (d < 10) {
          d ='0' = d;
}
if (m < 10) {
          m = '0' + m;
}
m = --m;
mArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
date = m + " " + d + ", " + y;
console.log(date);
