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
var addIntelligence = document.getElementById("addIntelligence");
var subtractIntelligence = document.getElementById("subtractIntelligence");
var addStrength = document.getElementById("addStrength");
var subtractStrength = document.getElementById("subtract");
var agilityNumber = parseInt(document.getElementById("agility-number").innerHTML);
var agilityString = document.getElementById("agility-number");
var intelligenceNumber = parseInt(document.getElementById("intelligence-number").innerHTML);
var strengthNumber = parseInt(document.getElementById("strength-number").innerHTML);
//var totalNumber = 0

//function checkTotal(){
//    totalNumber = agilityNumber + intelligenceNumber + strengthNumber;
//    if(totalNumber > 15){
//        
//    }
//}

addAgility.addEventListener("click", function() {agilityNumber = agilityNumber + 1; agilityString.innerHTML = String(agilityNumber); console.log(agilityNumber);},false);







                      
