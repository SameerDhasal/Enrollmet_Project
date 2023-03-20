const fs = require('fs');
var soapconnection
// Read the JSON file
var jdate
const data = fs.readFileSync('C:/Users/SameerD3/Project/list.json',{encoding:'utf8', flag:'r'});
console.log(data)

const myJSON = JSON.stringify(data);

///document.getElementById("demo").innerHTML = myJSON;


