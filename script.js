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

var totalNumber = 0

addAgility.addEventListener("click", function() {agilityNumber = agilityNumber + 1; agilityString.innerHTML = String(agilityNumber);},false);

subtractAgility.addEventListener("click", function() {agilityNumber = agilityNumber - 1; agilityString.innerHTML = String(agilityNumber);},false);

addIntelligence.addEventListener("click", function() {intelligenceNumber = intelligenceNumber + 1; intelligenceString.innerHTML = String(intelligenceNumber);},false);

subtractIntelligence.addEventListener("click", function() {intelligenceNumber = intelligenceNumber - 1; intelligenceString.innerHTML = String(intelligenceNumber);},false);

addStrength.addEventListener("click", function() {strengthNumber = strengthNumber + 1; strengthString.innerHTML = String(strengthNumber);},false);

subtractStrength.addEventListener("click", function() {strengthNumber = strengthNumber - 1; strengthString.innerHTML = String(strengthNumber);},false);






                      
