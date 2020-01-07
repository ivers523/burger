import API from "../JS/API";

// Grab elements from HTML page

const nameEl = document.getElementById("namebox")
const nameBtnEl = document.getElementById("namebtn")
const readyEl = document.getElementById("ready")
const devouredEl = document.getElementById("devoured")

const refreshBurgers = function() {
    API.getExamples().then(function(data) {
      const burgerEls = data.map(function(burger) {
        const aEl = document.createElement("a");
        aEl.innerHTML = burger.name;
        aEl.setAttribute("href", "/example/?id=" + burger.id);
  
        const liEl = document.createElement("li");
        liEl.classList.add("list-group-item");
        liEl.setAttribute("data-id", burger.id);
        liEl.append(aEl);
  
        const buttonEl = document.createElement("button");
        buttonEl.classList.add("btn", "btn-danger", "float-right", "devour");
        buttonEl.innerHTML = "devour";
        buttonEl.addEventListener("click", handleDevBtnClick);
  
        liEl.append(buttonEl);
  
        return liEl;
      });
  
      readyEl.innerHTML = "";
      readyEl.append(...burgerEls);
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

  