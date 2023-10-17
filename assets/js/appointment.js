var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;

const currentFormattedTime = date.toTimeString().substring(0, 5);

document.getElementById('appDate').value = today;
document.getElementById('appTime').value = currentFormattedTime;