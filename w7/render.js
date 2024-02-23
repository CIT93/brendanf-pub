const TBL = document.getElementById("tab-data");

function renderTblHeading(data){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    const headingObjects = [
       { fname: "Name" },
       { household: "Household" },
       { housesize: "HouseSize" },
       { footprint: "Footprint" },
       { action: "Actions" }
    ];
    function populateTable(object) {
      const tableHead = document.querySelector('#tab-data thead')
      Object.entries(object).forEach(([fname, household, housesize, footprint, action]) => {
        const row = tableHead.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        cell1.textContent = fname;
        cell2.textContent = household;
        cell3.textContent = housesize;
        cell4.textContent = footprint;
        cell5.textContent = action;
        const th = document.createElement("th");
        tr.appendChild(th);
      });
      populateTable(headingObjects);
      thead.innerHTML = "";
      thead.reset();
    };
    const name = document.createElement("th");
    const household = document.createElement("th");
    const housesize = document.createElement("th");
    const footprint = document.createElement("th");
    const action = document.createElement("th");
    name.textContent = "Name"
    household.textContent = "Household"
    housesize.textContent = "HouseSize"
    footprint.textContent = "Footprint"
    action.textContent = "Actions"
    th.appendChild(name);
    th.appendChild(household);
    th.appendChild(housesize);
    th.appendChild(footprint);
    th.appendChild(action);
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  };
    
  
function renderTbl(data){
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");
  Objects.forEach(function(item) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const name = document.createElement("td");
    const household = document.createElement("td")
    const housesize = document.createElement("td")
    const footprint = document.createElement("td")
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    name.textContent = item.name;
    household.textContent = item.household;
    housesize.textContent = item.housesize;
    footprint.textContent = item.footprint;
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    td.appendChild(name);
    td.appendChild(household);
    td.appendChild(housesize);
    td.appendChild(footprint);
    tr.appendChild(td)
    tbody.appendChild(tr);
  });
    table.appendChild(tbody);
    TBL.appendChild(table);
};

export {renderTbl, renderTblHeading};