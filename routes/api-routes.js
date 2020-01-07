const db = require("../models");

module.exports = function(app) {
    // Create a burger
    app.post("/api/burger", async function (req,res){
       const burger = await db.Burger.create({name: req.body.name})
       res.json(burger);
    })
    // devour burger
    app.put("/api/burger/:id", async function (req, res) {
        const devBurger = await db.Burger.update({devoured: true},{where:{id: req.params.id}})
        res.json(devBurger);
    })

  
}

