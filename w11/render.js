import {FORM, TBL} from "./global.js";
import {saveLS} from "./storage.js";

const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "Household", "HouseSize", "FoodChoice", "FoodConvenience", "Footprint", "Actions"]; 
  headingTextArr.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table
};

const onUpdate = (index, data) => {
  data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
}

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', e => {
    // console.log(e);
    onUpdate(index, data);
  });
  btnEdit.addEventListener('click', e => {
    FORM.firstN.value = obj.first;
    FORM.lastN.value = obj.last;
    FORM.household.value = obj.houseMembers;
    FORM.housesize.value = obj.houseSize;
    FORM.foodchoice.value = obj.foodChoice;
    FORM.foodconvenience.value = obj.foodConvenience;
    onUpdate(index, data);
  });
  return td;
};

const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    // console.log(index);
    const tr = document.createElement("tr");
    for(const [key, value] of Object.entries(obj)) {
      // console.log(`key ${key} value ${value}`);
      if(key !== "last" && key !== "houseHoldPoints" && key !== "houseSizePoints" && key !== "foodChoicePoints" && key !== "foodConveniencePoints"){
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }; 
    };
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
};
  
const renderTbl = data => {
  TBL.innerHTML = "";
  if(data.length !== 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  };
};

export {renderTbl, renderTblHeading};