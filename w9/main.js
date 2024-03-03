import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const firstNameEl = document.getElementById('firstName');
const lastNameEl = document.getElementById('lastName');
const submitEl = document.getElementById("submitError");
// const errorElement = document.getElementById("error")

function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstN: firstName,
    lastN: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
};

renderTbl(cfpData);

function validateField(event) {
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

firstNameEl.addEventListener('blur', validateField);
lastNameEl.addEventListener('blur', validateField);

FORM.addEventListener('submit', function(e) {
  // e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  // const houseHoldMembers = parseInt(FORM.household.value);
  // const houseSize = FORM.housesize.value;
  // start(firstName, lastName, houseHoldMembers, houseSize);
  const firstNameIsValid = firstNameEl.value !== '';
  const lastNameIsValid = lastNameEl.value !== '';
  // const messages = [];
  // if (firstName === '' && lastName === '') {
    // messages.push('Name is required');
  if (firstNameIsValid && lastNameIsValid) {
    submitEl.textContent = '';
    const houseHoldMembers = parseInt(FORM.household.value);
    const houseSize = FORM.housesize.value;
    start(firstName, lastName, houseHoldMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    submitEl.textContent = "Form requires first name and last name";
  }
  // if (messages.length > 0) {
  //   e.preventDefault();
  //   errorElement.innerText = messages.join(', ');
  // };
  // saveLS(cfpData);
  // renderTbl(cfpData);
  // FORM.reset();
});