//define variables from HTML
const addButton = document.querySelector(".add-item");
const clearButton = document.querySelector(".clear-list");
const inputField = document.getElementById("input-field");
const listHeader = document.getElementById("list-header");
//define main variable
const toDoList = [];

//data from html field to array
const fromFieldToArray = () => {
  fieldValue = inputField.value;
  toDoList.push(fieldValue);
};
fromFieldToArray();
addButton.addEventListener("click", () => {
  if (inputField.value !== "") {
    fromFieldToArray();
  }
});
console.log(toDoList);
inputField.addEventListener(
  "keydown",
  (key = () => {
    if (key.key === "Enter") {
      fromFieldToArray;
    }
  })
);
