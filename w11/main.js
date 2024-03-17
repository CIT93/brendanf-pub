import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import {FP} from "./fp.js";

const start = (firstName, lastName, houseHoldMembers, houseSize, foodChoice, foodConvenience) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const foodChoicePTS = foodChoicePoints(foodChoice);
  const foodConveniencePTS = foodConveniencePoints(foodConvenience);
  const total = houseHoldPTS + houseSizePTS + foodChoicePTS + foodConveniencePTS;
  cfpData.push({
    firstN: firstName,
    lastN: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    foodC: foodChoice,
    foodCon: foodChoice,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    foodCPTS: foodChoicePTS,
    foodConPTS: foodConveniencePTS,
    cfpTotal: total,
  });
};

renderTbl(cfpData);

// Function to validate a single field
const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  };
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

FORM.addEventListener('submit', e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    // start(FNAME.value, LNAME.value, parseInt(FORM.household.value), FORM.housesize.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.household.value), FORM.housesize.value, FORM.foodchoice.value, FORM.foodconvenience.value);
    // fpObj.houseHoldPoints();
    // fpObj.houseSizePoints();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  };
});

// const me = {
//   name: "Brendan",
//   hairColor: "Brown",
//   location: "Office",
//   sleepScore: 75,
//   introduce: function() {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in the ${this.location} right now!`)
//   },
// };

// const you = {
//   name: "Dan",
//   hairColor: "Red",
//   location: "Kitchen",
//   sleepScore: 95,
//   introduce: function() {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in the ${this.location} right now!`)
//   },
// };

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name, hairColor, location, sleepScore){
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   };
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in the ${this.location} right now and had a sleep score of ${this.sleepScore}!`);
//   };
// };

// const brendan = new Human("Brendan", "Brown", "Office", 75);
// const dan = new Human("Dan", "Red", "Kitchen", 95);
// brendan.introduce();
// dan.introduce();
// brendan.hrv = 50;