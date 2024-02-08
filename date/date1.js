//var date = new Date();
//var date = new Date(2007,0)
//var date = new Date(2007,0,26,12,1,1,1)
var date = new Date()
console.log(date);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toUTCString());

//get
console.log("get date..",date.getDate());
console.log("get day..",date.getDay());
console.log("get month..",date.getMonth());
console.log("get year..",date.getFullYear());
console.log("get hours..",date.getHours());
console.log("get minutes..",date.getMinutes());
console.log("get seconds..",date.getSeconds());
console.log("get milliseconds..",date.getMilliseconds());
console.log("get time..",date.getTime());

//set

var date2 = new Date();
date2.setDate(15);
date2.setMonth(7);
date2.setFullYear(1947);
date2.setHours(12);
date2.setMinutes(12);
date2.setSeconds(12);
date2.setMilliseconds(12);

console.log(date2);

