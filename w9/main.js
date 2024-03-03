import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

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

FORM.addEventListener('submit', function(e) {
  // e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.household.value);
  const houseSize = FORM.housesize.value;
  start(firstName, lastName, houseHoldMembers, houseSize);
  const errorElement = document.getElementById("error")
  const messages = [];
  if (firstName === '' || firstName === null && lastName === '' || lastName === null ) {
    messages.push('Name is required');
  } else {
    saveLS(cfpData);
    renderTbl(cfpData);
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  };
  // saveLS(cfpData);
  // renderTbl(cfpData);
  FORM.reset();
});