const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (a) {
    if (a.target.tagName === "LI") {
      a.target.classList.toggle("checked");
      saveData();
      // ked sme klikli na li tak prida checked element
    } else if (a.target.tagName === "SPAN") {
      //ked je target element span tak odstrani parent element
      a.target.parentElement.remove();
      saveData();
    }
    // parent element je li
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  // data v list containeri sa nam savnu do local storagu
  // musime callnut funkciu vzdy ked urobime zmeny
}
// zobrazime data vzdy ked otvorime browser
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
