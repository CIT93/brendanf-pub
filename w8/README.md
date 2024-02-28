# Week 8 Code Along Review

1. I started by inputting data into the form: `Firstname(r), Lastname(r), household(4), housesize(Apartment)` and hit the submit button
2. The `FORM.addEventListner('submit', function(e))` function starts as a result:
   1. The `e.preventDefault()` method will cancel form submital if the values inputted are null or go against charcter requirements of the HTML form
3. Then moves to the line `const firstName = FROM.firstname.value` to reference the HTML input value and the `firstName` parameter from the start method function for `cfpData`
4. Then moves to the line `const lastName = FROM.lastname.value` to reference the HTML input value and the `lastName` parameter from the start method function for `cfpData`
5. Then moves to the line `const houseHoldMember = parseInt(FROM.household.value)` to reference the HTML input value and the `houseHoldMember` parameter from the start method function for `cfpData`
   1. The `parseInt` converts the string into an integer needed for this type of input
6. Then moves to the line `const houseSize = FROM.housesize.value` to reference the HTML dropdown select option value and the `houseSize` parameter from the start method function for `cfpData`
7. The `start` method function for `cfpData` runs these four parameters listed above
8. The `OUTPUT.innerHTML = ""` clears any output in the div element in the HTML page. I do not think it is working because we removed the `displayOutput` function
9. It then starts at the `renderTblData(cfpData)`:
   1. It is referencing the object arrays in the lines above. See object array below that created in the main.js page 
   2. `obj: cfpTotal:10 firstN:"r" houseM:4 houseMPTS:8 houseS:"apartment" houseSPTS:2 lastN:"r" [[Prototype]]:Object`
10. Then it moves to the the `renderTblData(data)` function:
11. Then it moves to the `const table = renderTblHeading()` pulling the header table row created by the function above
12. Then it applies the `TBL.innerHTML = ""` to clear any duplicate header rows generated when new data is inputted
13. Then it moves to the `const table = document.createElement("table")` to start the table structure
14. Then it moves to the `const thead = document.createElement("thead")` to create the table header structure
15. Then it moves to the `const tr = document.createElement("tr")` to create header row
16. The it reads the array for "Name" and "Footprint" under the line `const headingTextArr = ["Name", "Footprint"]`
17. Then it moves into the `headingTextArr.forEach(function(text))` nested function. It starts with the "Name" text first
18. Then it moves to the line `const th = document.createElement("th")` that is nested in the function:
    1.  It is also referrencing the heading data cell (`th`) for the first text in the array
19. Then it moves down to the line `th.textContent = text`:
    1.  It is appling the "Name" text into the heading data cell (`th`)
20. Then it moves to the line `tr.appendChild(th)`:
    1.  It is taking the first heading data cell and placing it into the table header row
21. Then it returns back to the `headingTextArr.forEach(function(text))` nested function. It starts with the "Footprint" text second
22. Then it moves back to the line `const th = document.createElement("th")` that is nested in the function:
    1.  It is also referrencing the heading data cell (`th`) again for the second text in the array
23. Then it moves back down to the line `th.textContent = text`:
    1.  It is appling the "Footprint" text into the heading data cell (`th`)
24. Then it moves back to the line `tr.appendChild(th)`:
    1.  It is taking the second heading data cell and placing it into the table header row
25. Then it leaves the `headingTextArr.forEach(function(text))` nested function and moves to the line `const th = document.createElement("th")`
    1.  It is creating the heading data cells again
26. Then it moves to the line `tr.appendChild(th)`:
    1.  It is placing the heading data cells (`th`) above within the table header row
27. Then it moves to the line `table.appendChild(thead)`:
    1.  It is placing the table header row within the table structure
28. Then moves to the `return table` line and then moves to the `renderTbl(data)` nested function
    1.  The line `const table = renderTblHeading()` is pulling the header table data from the created in the `renderTblHeading()` function above, which is why the `return table` line was needed above to reference that data
29. Then it moves to the line `const tbody = document.createElement("tbody")` to create the table body structure
30. Then moves to the line `const tr = document.createElement("tr")` to create the table row
31. It then moves to the `data.forEach(function(obj))` function:
   1. It is referencing the same objects from the main.js page again for use in this function
32. Then moves to the line `const tr = document.createElement("tr")`:
   1. It is referencing the table row in the document again for this function
33. Then it moves to the line `const tdName = document.createElement("td")`:
   1. It is referrencing the data cell (`td`) for this function
   2. It is taking the `tdName` and associates it to the data cell
34. Then it moves to the line `tdName.textContent = obj.firstN`:
   1. It is referrencing the object `firstN` from the main.js and associating the `tdName`
35. Then it moves to the line `const tdTotal = document.createElement("td")`:
   1. It is also referrencing the data cell (`td`) for this function
   2. It is taking the `tdTotal` and associates it to the data cell
36. Then it moves to the line`tdTotal.textContent = obj.cfpTotal`:
   1. It is referrencing the object `cpfTotal` from the main.js page and associates the `tdTotal`
37. Then it moves to the line `tr.appendChild(tdName)`:
   1. It is placing the `tdName` data cell (`td`) within the table row in the table
38. Then it moves to the line `tr.appendChild(tdTotal)`:
   1.  It is placing the `tdTotal` data cell (`td`) within the table row in the table
39. Then it moves to the line `tbody.appendChild(tr)`:
    1.  It is placing the table rows with the created data cells (`td`) above within the table body
40. Then it moves to the line `tbody.appendChild(tr)` leaving the `data.forEach(function(obj))` nested function:
    1. I believe it is doing the same thing as before, but actually placing the table rows within the table body that is created in the `renderTbl(data)` function
41. Then it moves to the line `table.appendChild(tbody)`:
    1. It is placing the table body created above within the whole table structure. The table header (`thead`) from the `renderTblHeading` function above is also being referenced as part of this same table.
42. Then the "Name" and "Footprint" headers appear as a header row on the web browser. And data input from the form appears into the table row below the header row. The first cell under the header "Name" returns the firstname "r" while the second cell under the header "Footprint" returns the total score of "10"
43. Then goes back to the main.js page to reference the `FORM.reset()` to clear the table from the web browser page and the input data from the form

## My Feedback on the Video

- I feel that this video was helpful in better understanding this code. I understood what different parts of the code are doing, but the confusing part was the understanding of total code being like a complex machine with many different parts that have different functions with the total goal for functioning as the machine has been designed to do. It is getting more and more complex and it can get confusing on where to start in the code. I started with `renderTblData(cfpData)` when the `FORM.addEventListner('submit', function(e))` block has functions that need to process first while pulling the results from the `start` function with the `cfpData` data and meanwhile the cfp.js functions are being referenced for the household and housesize points during this point and so on... Your video gave me the "big picture" look at the complete code. This is why I had problems in the week 7 assignments because I just throwing in functions (that did work individually) without thinking about the whole JavaScript code and if it made sense to do so. What I needed to was reference code from other places and add functions if it is was neccessary to do so.

## My comment for How we Handle the Edit

- I believe we could try to use the `splice()` method again to over write the array that was enter with new information in the form.
- `data.splice(index, 0, "firstN", "houseM", "houseS", "cfpData")`
- I am not sure if this would actually work in overriding the existing data cells in the table row with a new input.