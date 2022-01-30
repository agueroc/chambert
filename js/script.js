const datefield = document.querySelector("date");
const datefieldUK = document.querySelector("aside");

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();