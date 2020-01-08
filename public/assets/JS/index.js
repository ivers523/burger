import API from "./API;";

$(document).ready(function () {

  // // Get references to page elements
  const nameEl = document.getElementById("namebox")
  const nameBtnEl = document.getElementById("namebtn")
  const readyEl = document.getElementById("ready")
  const devouredEl = document.getElementById("devoured")
  // // handleDeleteBtnClick is called when an example's delete button is clicked
  // // Remove the example from the db and refresh the list

  // JQeury developed w/ help of tutor Vivian Nguyen

  // Send the GET request.
  $.ajax("/api/burger", {
    type: "GET",

  }).then(
    function (res) {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
      console.log(res)
      //dynamically create a div containing data, then append to the #ready
      for (var i = 0; i < res.length; i++) {
        //
        var alink = document.createElement("a");
        alink.innerHTML = res[i].name;
        alink.setAttribute("href", "/example/?id=" + res[i].id);

        const liEl = document.createElement("li");
        liEl.classList.add("list-group-item");
        liEl.setAttribute("data-id", res[i].id);
        liEl.append(alink);

        const buttonEl = document.createElement("button");
        buttonEl.classList.add("btn", "btn-danger", "float-right", "devour");
        buttonEl.setAttribute("id", res[i].id)
        buttonEl.innerHTML = "Devour Me!";

        liEl.append(buttonEl);
        $("#ready").append(liEl);
        console.log(liEl);

      }


    }
  );
});

// namebtn onclick
$(nameBtnEl).on("click", function (){
  const id = $(this).data("id");
  console.log(id);
  alert("name button clicked");
});


//devourbtn onclick
$("devour").on("click", function () {
  const id = $(this).data("id");
  console.log(id);
  alert("devoured burger");

  // Send the PUT request.
  $.ajax("/api/burger/" + id, {
    type: "PUT",
    devoured: true
  }).then(
    function () {
      console.log("changed devoured to true");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

// import API from "/JS/API.js";

// // Get references to page elements

// // refreshExamples gets new examples from the db and repopulates the list
// const refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     const exampleEls = data.map(function(example) {
//       const aEl = document.createElement("a");
//       aEl.innerHTML = example.name;
//       aEl.setAttribute("href", "/example/?id=" + example.id);

//       const liEl = document.createElement("li");
//       liEl.classList.add("list-group-item");
//       liEl.setAttribute("data-id", example.id);
//       liEl.append(aEl);

//       const buttonEl = document.createElement("button");
//       buttonEl.classList.add("btn", "btn-danger", "float-right", "delete");
//       buttonEl.innerHTML = "ｘ";
//       buttonEl.addEventListener("click", handleDeleteBtnClick);

//       liEl.append(buttonEl);

//       return liEl;
//     });

//     exampleListEl.innerHTML = "";
//     exampleListEl.append(...exampleEls);
//   });
// };
// refreshExamples();

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// const handleFormSubmit = function(event) {
//   event.preventDefault();

//   const example = {
//     text: exampleTextEl.value.trim(),
//     description: exampleDescriptionEl.value.trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   exampleTextEl.value = "";
//   exampleDescriptionEl.value = "";
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// const handleDeleteBtnClick = function(event) {
//   const idToDelete = event.target.parentElement.getAttribute("data-id");
//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// submitBtnEl.addEventListener("click", handleFormSubmit);
// document.querySelectorAll(".delete").forEach(btn => {
//   btn.addEventListener("click", handleDeleteBtnClick);
// });

// // import API from "/js/API.js";

// // // Grab elements from HTML page

// // const nameEl = document.getElementById("namebox")
// // const nameBtnEl = document.getElementById("namebtn")
// // const readyEl = document.getElementById("ready")
// // const devouredEl = document.getElementById("devoured")

// // const refreshBurgers = function() {
// //     API.getBurger().then(function(data) {
// //       for (let i = 0; i < data.length; i++) {
// //         if (!data[i].devoured) {
// //           const pEl = document.createElement("p");
// //           pEl.innerHTML = data[i].name;

// //           const liEl = document.createElement("li");
// //           liEl.classList.add("list-group-item");
// //           liEl.setAttribute("data-id", data[i].id);
// //           liEl.append(pEl);

// //           const buttonEl = document.createElement("button");
// //           buttonEl.classList.add("btn", "btn-warning", "devour");
// //           buttonEl.innerHTML = "devour!";
// //           buttonEl.addEventListener("click", handleDevBtnClick);

// //           liEl.append(buttonEl);
// //           devouredEl.append(liEl);
// //         } else {
// //           const pEl = document.createElement("p");
// //           pEl.innerHTML = data[i].name;

// //           const liEl = document.createElement("li");
// //           liEl.classList.add("list-group-item");
// //           liEl.setAttribute("data-id", data[i].id);
// //           liEl.append(pEl);

// //           const buttonEl = document.createElement("button");
// //           buttonEl.classList.add("btn", "btn-danger", "devour");
// //           buttonEl.innerHTML = "delete";
// //           buttonEl.addEventListener("click", handleDeleteBtnClick);

// //           liEl.append(buttonEl);
// //           return liEl;

// //         }
// //       }
// //     });
// //     readyEl.append(liEl);

// //   };
// //   refreshBurgers();

// //   // handleFormSubmit is called whenever we submit a new example
// //   // Save the new example to the db and refresh the list
// //   const handleNameSubmit = function(event) {
// //     event.preventDefault();

// //     const burger = {
// //       name: nameEl.value.trim(),
// //     };

// //     // if (!(example.text && example.description)) {
// //     //   alert("You must enter an example text and description!");
// //     //   return;
// //     // }

// //     API.saveBurger(burger).then(function() {
// //       refreshBurgers();
// //     });

// //     readyEl.value = "";

// //   };

// //   // handleDeleteBtnClick is called when an example's delete button is clicked
// //   // Remove the example from the db and refresh the list
// // //   const handleDevBtnClick = function(event) {
// // //     const devBurger = event.target.parentElement.getAttribute("data-id");
// // //     API.devBurger(idToDelete).then(function() {
// // //       refreshExamples();
// // //     });
// // //   };

// //   // Add event listeners to the submit and delete buttons
// //   nameBtnEl.addEventListener("click", handleNameSubmit);
// // //   document.querySelectorAll(".delete").forEach(btn => {
// // //     btn.addEventListener("click", handleDeleteBtnClick);

// //   