//your JS code here. If required.
let form = document.querySelector(".form-group");
let tableBody = document.querySelector(".book-list");
let userData = document.querySelectorAll("input[type='text']");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  for (let t of userData) {
    if (!t.value) {
      t.style.outline = "1px solid red";
      return;
    }
  }
  let row = tableBody.insertRow();
  let td;
  for (let t of userData) {
    td = row.insertCell();
    td.innerText = t.value;
  }

  let clearBtn = document.createElement("button");
  clearBtn.innerText = "Clear";
  clearBtn.classList.add("clear");
  clearBtn.addEventListener("click", handleClr);

  let tdBtn = row.insertCell();
  tdBtn.append(clearBtn);
  form.reset();
}

function handleClr(e) {
  e.target.parentElement.parentElement.remove();
}
