var character = {
    agilitynumber: "",
    intelligencenumber: "",
    strengthnumber: "",
    fighter: ""
}
//sets up 'character' object with following attributes, but leaves them blank for user to input

var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
//gets class selection buttons from DOM


opt1.style.backgroundColor = 'darkorchid';
opt2.style.backgroundColor = 'cornflowerblue';
opt3.style.backgroundColor = 'chartreuse';
//changes background color of class buttons

var fighterChosen = false;
//boolean 'fighterChosen' set as false, but will be changed when a class button is clicked. The class button function first checks to see if fighterChosen is true because that would mean a class has already been chosen. If it is true, the function ends before changing the class

opt1.addEventListener("click", function() {if(fighterChosen == true){return;} character.fighter = 'Archer'; opt1.style.borderColor = 'yellow'; fighterChosen = true;},false);
opt2.addEventListener("click", function() {if(fighterChosen == true){return;} character.fighter = 'Mage'; opt2.style.borderColor = 'yellow'; fighterChosen = true;},false);
opt3.addEventListener("click", function() {if(fighterChosen == true){return;} character.fighter = 'Warrior'; opt3.style.borderColor = 'yellow'; fighterChosen = true;},false);
//event listeners and functions for choosing class

var pointsLeft = parseInt(document.getElementById("numberLeft").innerHTML);
var pointsLeftString = document.getElementById("numberLeft");
//sets up string in the sentence that tells the user how many unspent points they have.


var addAgility = document.getElementById("addagility");
var subtractAgility = document.getElementById("subtractagility");
var addIntelligence = document.getElementById("addintelligence");
var subtractIntelligence = document.getElementById("subtractintelligence");
var addStrength = document.getElementById("addstrength");
var subtractStrength = document.getElementById("subtractstrength");
//gets plus and minus buttons from DOM

var agilityNumber = parseInt(document.getElementById("agility-number").innerHTML);
var agilityString = document.getElementById("agility-number");
//sets up variables to change agility counter when button is clicked

var intelligenceNumber = parseInt(document.getElementById("intelligence-number").innerHTML);
var intelligenceString = document.getElementById("intelligence-number");
//sets up variables to change intelligence counter when button is clicked

var strengthNumber = parseInt(document.getElementById("strength-number").innerHTML);
var strengthString = document.getElementById("strength-number");
//sets up variables to change strength counter when button is clicked

//to better explain, agilityNumber is the innerHTML of the paragraph with the id 'agility-number', parsed into an integer. So if the paragraph says "0" as a string, agilityNumber will be 0
//agilityString is the paragraph itself
//we translate the string into an integer to modify it by pressing buttons, and then we translate it back into a String later(each time the button is clicked) to display it in the paragraph

var skillsLocked = false;
//skillsLocked is set to true when the 'lock your skills' button is clicked. The buttons to edit skill numbers first check to see if this boolean is true. If so, the skills have already been locked and the function will not run

var totalNumber = agilityNumber + intelligenceNumber + strengthNumber;
//sets up var called totalNumber. Could be set to zero, but it doesn't matter because when you start, all the skill values are set to zero anyway

function changeTotal() {
    totalNumber = agilityNumber + intelligenceNumber + strengthNumber;
    pointsLeft = 15 - totalNumber;
    //console.log(pointsLeft);
    pointsLeftString.innerHTML = String(pointsLeft);
}
//this runs every time one of the pus or minus buttons is pressed. It does multiple things. First it redefines totalNumber to be the sum of each counter. Then it redefines pointsLeft to 15 - totalNumber. For example, if I have used 12 points total in all three categories, I still have 3 points left (pointsLeft). Lastly, it sets the innerHTML of pointsLeftString to pointsLeft the number(which, using String. ,  has been turned into a String). Basically, the number is turned from a string to an integer and back again each time a button is pressed

addAgility.addEventListener("click", function() {if(totalNumber == 15 || skillsLocked == true) {return;} agilityNumber = agilityNumber + 1; agilityString.innerHTML = String(agilityNumber);changeTotal();},false);
//code for the plus button on the agility counter. First, it checks if the current number is 15. If so, the user can't add another because they only have 15 total points to spend. So if the current number is 15, the function stops. It also checks skillsLocked. If skillsLocked is true, that means the lock skills button has been clicked, and the counter can no longer be edited, so the function stops. If neither of those are the case, the function continues running. 1 is added to the agilityNumber counter, and the text showing the agility counter is changed (see above). Lastley, changeTotal is called(see above)

subtractAgility.addEventListener("click", function() {if(agilityNumber == 0 || skillsLocked == true) {return;} agilityNumber = agilityNumber - 1; agilityString.innerHTML = String(agilityNumber);changeTotal();},false);
//similar to above. Checks to see if current number is zero, because the counter can't go below zero. Checks if the skills have been locked. If neiether of those are the case, 1 is subtracted from agilityNumber and agilityString is updated. Then changeTotal is called.

addIntelligence.addEventListener("click", function() {if(totalNumber == 15 || skillsLocked == true) {return;} intelligenceNumber = intelligenceNumber + 1; intelligenceString.innerHTML = String(intelligenceNumber);changeTotal();},false);

subtractIntelligence.addEventListener("click", function() {if(intelligenceNumber == 0 || skillsLocked == true) {return;} intelligenceNumber = intelligenceNumber - 1; intelligenceString.innerHTML = String(intelligenceNumber);changeTotal();},false);

addStrength.addEventListener("click", function() {if(totalNumber == 15 || skillsLocked == true) {return;} strengthNumber = strengthNumber + 1; strengthString.innerHTML = String(strengthNumber);changeTotal();},false);

subtractStrength.addEventListener("click", function() {if(strengthNumber == 0 || skillsLocked == true) {return;} strengthNumber = strengthNumber - 1; strengthString.innerHTML = String(strengthNumber);changeTotal();},false);
//the intelligence and strength counters work exactly the same way as agility

var lockButton = document.getElementById("finishSkills");
//gets the lock button from the DOM

lockButton.addEventListener("click", function() {if(pointsLeft != 0) {alert("Distribute all your skill points before locking them!"); return;} if(skillsLocked == true){return;}  skillsLocked = true; character.agilitynumber = agilityString; character.intelligencenumber = intelligenceString; character.strengthnumber = strengthString;}, false);
//the function checks if pointsLeft is not set to zero. If it is not, that means not all 15 points have been distributed. The function is stopped, and an alert is sent to the user. If skillsLocked is true, this button has already been clicked, and the code inside should not run again, so the code stops. This is probably not necessary, because once it is clicked the first time, nothing will be changeable anyway. If skillsLocked is false, then this is the first time the user has clicked the button, and skillsLocked is set to true, locking the skill counters. Finally, the function set character's attributes to reflect the user input. 