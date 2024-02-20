import { renderTbl } from "./render.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apartment") {
    houseSizePoints = 2;
  };
  return houseSizePoints;
};

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  };
  return houseHoldPoints;
};

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

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.household.value);
  const houseSize = FORM.housesize.value;
  start(firstName, lastName, houseHoldMembers, houseSize);
  OUTPUT.innerHTML = "";
  // displayOutput();
  renderTbl(cfpData);
  FORM.reset();
});

// we received the error because td has not been defined for the btnEdit and btnDel under the renderTbl() and cannot find the html element in the DOM

// There was an error code because cfpData is not found on the render.js page, it is on the main.js page

// I understand the concept of JavaScript modules and the need to move code to a module on different JavaScript page. I understand that when programs get too big, they need to be put into modules. But what exactly should stay on the main.js page and long does a program need to be to determine that it needs to be separated into a module (is there an industry standard for JavaScript modules)?