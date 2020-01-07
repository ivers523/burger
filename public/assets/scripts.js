// Grab elements from HTML page

const nameEl = document.getElementById("namebox")
const nameBtnEl = document.getElementById("namebtn")
const readyEl = document.getElementById("ready")
const devouredEl = document.getElementById("devoured")

// Add a new Burger
nameBtnEl.addEventListener("click", function () {
    if (nameEl.value) {
        newBurger = nameEl.value
        axios.post('/api/burgers', {
            name: newBurger
        })
            .then(function (res) {
                displayBurger();
            })
            .catch(function (error) {
                console.log(error);
            });
    } 
})

// Display added burger

function displayBurger(){
    axios.get('/api/burger')
      .then(function (res) {

        //  DISPLAY BURGERS FUNCTION
//         console.log(res);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }

// Devour Burger