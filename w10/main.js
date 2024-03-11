import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const start = (...a) => {
  // const firstName = arry[0];
  // const lastName = arry[1];
  // const houseHoldMembers = arry[2];
  // const houseSize = arry[3];
  const houseHoldPTS = determineHouseHoldPts(a[2]);
  const houseSizePTS = determineHouseSizePts(a[3]);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstN: a[0],
    lastN: a[1],
    houseM: a[2],
    houseS: a[3],
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
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
    start(FNAME.value, LNAME.value, parseInt(FORM.household.value), FORM.housesize.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
  };
});


// rest operator
// const add2 = function(...a) { // parameter (default value if no parameter is passed through)
//   return 2 + a[3];
// };

// const result = add2(1,2,3,4);  // arguement

// arrow function
// const add2 = a => 2 + a;

// const result = add2(100);

//IIFE

// const a = 3;

// (function(a){
//   console.log("inside IIFE ");
// })(a);