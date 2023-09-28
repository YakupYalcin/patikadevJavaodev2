

let addButton = document.getElementById("addButton");
let myList = document.getElementById("list");



const CLOSE_BTN = `
<button type="button" class="close" data-dismiss="toast" aria-label="Close">
<span aria-hidden="true">&times;</span></button>
`;

const itemSVG =
  `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="green" class="bi bi-check-lg done" id="itemSVG" viewBox="0 0 16 16">
<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
 </svg> `



let counter = 0;

addButton.addEventListener("click", function () {
  let takeTask = document.getElementById("task");
  let receivedTask = takeTask.value.trim();


  if (receivedTask === "") {
    return;
  }

  let newLi = document.createElement("li");
  newLi.textContent = receivedTask;

  if (counter % 2 == 0) {
    newLi.classList.add("list-group-item", "list-group-item-light");
  } else {
    newLi.classList.add("list-group-item", "list-group-item-dark");
  }

  newLi.innerHTML += CLOSE_BTN;
  myList.appendChild(newLi);

  takeTask.value = "";
  let closeBTN = newLi.querySelector(".close");

  closeBTN.addEventListener("click", function () {
    myList.removeChild(newLi);
  });

  let clickCounter = 0;

  newLi.addEventListener("click", function () {
    clickCounter++;
    if (clickCounter % 2 == 1) {
      newLi.insertAdjacentHTML("beforeend", itemSVG);
      newLi.classList.remove("list-group-item", "list-group-item-dark", "list-group-item-light")
      newLi.classList.add("special")

    } else {
      let itemSVGElement = newLi.querySelector("#itemSVG");
      if (itemSVGElement) {
        newLi.classList.remove("special")
        newLi.removeChild(itemSVGElement);
      }
    }
  });

  counter++;
});

