let d = new Date();

let year = d.getFullYear();

document.getElementById("year").textContent = year;
var LastUpdated = document.lastModified;

document.getElementById("lastupdated").innerHTML = LastUpdated.toString();

const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside");

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

function toogleMenu(){
    document.getElementById("navigation").classList.toogle("open");
}