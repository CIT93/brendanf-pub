# localStorage

- When inputting data into the form fields, the data will clear once the browser session ends or the computer turns off. (volatile memory)
- localStorage saves this data so it can be used in multiple different browser sessions even after the computer is powered off.
  - sessionStorage is similar expect the data clears after the browser session ends
  - When using "private browsing" or "incognito", localStorage data is cleared after the last "private" tab is closed
  - In localStorage, HTTPS and HTTP have different storage for objects depending on the protocol the web page is using
  - For localStorage, the browser uses the web storage API interface to store the key/value pairs
- `localStorage.setItem("key", "value")` is used to access the local storage object and add the data item to it
  - The object has to be converted from a JavaScript value into a JSON string for storage `JSON.stringify(object)`
  - JSON string is {"key":"value"}
  - In devtools, you can see the Local Storage data under the Application tab (once stringifyed into the JSON format (serialized format))
  - `JSON.parse(object)` is used convert the JSON string back to a JavaScript value to be used in the JavaScript code
- The items in storage can be cleared manually under the Application tab in the browser

- I do not have any questions on the localStorage concept