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
                console.log(nameEl)
            })
            .catch(function (error) {
                console.log(error);
            });
    } 
})

// Display added burger


// Devour Burger