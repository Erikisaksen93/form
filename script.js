var firstName = "";
var lastName = "";
let age = 0;
var adress = "";
var country = "";
var storeFname = [];
var storeLname = [];
var storeAge = [];
var storeAdress = [];
var storeCountry = [];


function getData() {

firstName = document.getElementById('fname').value;
storeFname.push(firstName);

lastName = document.getElementById('lname').value;
storeLname.push(lastName);

age = document.getElementById('age').value;
storeAge.push(age);

adress = document.getElementById('adress').value;
storeAdress.push(adress);

country = document.getElementById('country').value;
storeCountry.push(country);


document.getElementById('output_fname').innerHTML = storeFname + ", ";
document.getElementById('output_lname').innerHTML = storeLname + ", ";
document.getElementById('output_age').innerHTML = storeAge + ", ";
document.getElementById('output_adress').innerHTML = storeAdress + ", ";
document.getElementById('output_countries').innerHTML = storeCountry + ", ";


document.getElementById('fname').value = "";
document.getElementById('lname').value = "";
document.getElementById('age').value = "";
document.getElementById('adress').value = "";
document.getElementById('country').value = "";
};