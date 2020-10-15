var firstName = "";
var lastName = "";
let age = 0;
var adress = "";
var country = "";
var storeInfo = [];
let i = 0;


//Maybe loop?
function getData() {

    for (i = 0; i < storeInfo.length; i++) {
    }
    
firstName = document.getElementById('fname').value;
storeInfo.push(firstName);

lastName = document.getElementById('lname').value;
storeInfo.push(lastName);

age = document.getElementById('age').value;
storeInfo.push(age);

adress = document.getElementById('adress').value;
storeInfo.push(adress);

country = document.getElementById('country').value;
storeInfo.push(country);

//output will always be the same array[x]??

document.getElementById('output_fname').innerHTML +=storeInfo[i] + ", ";
document.getElementById('output_lname').innerHTML += storeInfo[1] + ", ";
document.getElementById('output_age').innerHTML += storeInfo[2] + ", ";
document.getElementById('output_adress').innerHTML += storeInfo[3] + ", ";
document.getElementById('output_countries').innerHTML += storeInfo[4] + ", ";


//Must be a better way to clear all the boxes.
document.getElementById('fname').value = "";
document.getElementById('lname').value = "";
document.getElementById('age').value = "";
document.getElementById('adress').value = "";
document.getElementById('country').value = "";
};
