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


                      
