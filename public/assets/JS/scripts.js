import API from "../JS/API.js";

// Grab elements from HTML page

const nameEl = document.getElementById("namebox")
const nameBtnEl = document.getElementById("namebtn")
const readyEl = document.getElementById("ready")
const devouredEl = document.getElementById("devoured")

const refreshBurgers = function() {
    API.getBurger().then(function(data) {
      readyEl.innerHTML = "";
      devouredEl.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        if (!data[i].devoured) {
          const pEl = document.createElement("p");
          pEl.innerHTML = data[i].name;
  
          const liEl = document.createElement("li");
          liEl.classList.add("list-group-item");
          liEl.setAttribute("data-id", data[i].id);
          liEl.append(pEl);
  
          const buttonEl = document.createElement("button");
          buttonEl.classList.add("btn", "btn-warning", "devour");
          buttonEl.innerHTML = "devour burger";
          buttonEl.addEventListener("click", handleDevBtnClick);
  
          liEl.append(buttonEl);
          devouredEl.append(liEl);
        } else {
          const pEl = document.createElement("p");
          pEl.innerHTML = data[i].name;
  
          const liEl = document.createElement("li");
          liEl.classList.add("list-group-item");
          liEl.setAttribute("data-id", data[i].id);
          liEl.append(pEl);
  
          const buttonEl = document.createElement("button");
          buttonEl.classList.add("btn", "btn-danger", "devour");
          buttonEl.innerHTML = "delete";
          buttonEl.addEventListener("click", handleDeleteBtnClick);
  
          liEl.append(buttonEl);
          readyEl.append(liEl);
        }
      }
    });
  };
  refreshBurgers();
  
  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  const handleNameSubmit = function(event) {
    event.preventDefault();
  
    const burger = {
      name: nameEl.value.trim(),
    };
  
    // if (!(example.text && example.description)) {
    //   alert("You must enter an example text and description!");
    //   return;
    // }
  
    API.saveBurger(burger).then(function() {
      refreshBurgers();
    });
  
    readyEl.value = "";

  };
  
  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
//   const handleDevBtnClick = function(event) {
//     const devBurger = event.target.parentElement.getAttribute("data-id");
//     API.devBurger(idToDelete).then(function() {
//       refreshExamples();
//     });
//   };
  
  // Add event listeners to the submit and delete buttons
  nameBtnEl.addEventListener("click", handleNameSubmit);
//   document.querySelectorAll(".delete").forEach(btn => {
//     btn.addEventListener("click", handleDeleteBtnClick);

  