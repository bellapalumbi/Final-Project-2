var character = {
    agilitynumber: "",
    intelligencenumber: "",
    strengthnumber: "",
    fighter: ""
}

var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");

opt1.style.backgroundColor = 'darkorchid';
opt2.style.backgroundColor = 'cornflowerblue';
opt3.style.backgroundColor = 'chartreuse';

opt1.addEventListener("click", function() {character.fighter = 'Archer'},false);
opt1.addEventListener("click", function() {character.fighter = 'Mage'},false);
opt1.addEventListener("click", function() {character.fighter = 'Warrior'},false);

var addAgility = document.getElementById("addagility");
var subtractAgility = document.getElementById("subtractagility");
var addIntelligence = document.getElementById("addintelligence");
var subtractIntelligence = document.getElementById("subtractintelligence");
var addStrength = document.getElementById("addstrength");
var subtractStrength = document.getElementById("subtractstrength");

var agilityNumber = parseInt(document.getElementById("agility-number").innerHTML);
var agilityString = document.getElementById("agility-number");

var intelligenceNumber = parseInt(document.getElementById("intelligence-number").innerHTML);
var intelligenceString = document.getElementById("intelligence-number");

var strengthNumber = parseInt(document.getElementById("strength-number").innerHTML);
var strengthString = document.getElementById("strength-number");

var totalNumber = agilityNumber + intelligenceNumber + strengthNumber;

function changeTotal() {
    //console.log("changeTotal has been called");
    totalNumber = agilityNumber + intelligenceNumber + strengthNumber;
    //console.log(totalNumber);
}

addAgility.addEventListener("click", function() {if(totalNumber == 15) {return;} agilityNumber = agilityNumber + 1; agilityString.innerHTML = String(agilityNumber);changeTotal();},false);

subtractAgility.addEventListener("click", function() {if(agilityNumber == 0) {return;} agilityNumber = agilityNumber - 1; agilityString.innerHTML = String(agilityNumber);changeTotal();},false);

addIntelligence.addEventListener("click", function() {if(totalNumber == 15) {return;} intelligenceNumber = intelligenceNumber + 1; intelligenceString.innerHTML = String(intelligenceNumber);changeTotal();},false);

subtractIntelligence.addEventListener("click", function() {if(intelligenceNumber == 0) {return;} intelligenceNumber = intelligenceNumber - 1; intelligenceString.innerHTML = String(intelligenceNumber);changeTotal();},false);

addStrength.addEventListener("click", function() {if(totalNumber == 15) {return;} strengthNumber = strengthNumber + 1; strengthString.innerHTML = String(strengthNumber);changeTotal();},false);

subtractStrength.addEventListener("click", function() {if(strengthNumber == 0) {return;} strengthNumber = strengthNumber - 1; strengthString.innerHTML = String(strengthNumber);changeTotal();},false);






                      
