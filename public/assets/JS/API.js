
// C/O "NES template" - bcbrian
export default {
    saveBurger: function(burger) {
      return fetch("/api/burger", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(burger)
      }).then(res => res.json());
    },
    
    getBurger: function() {
      return fetch("/api/burger").then(res => res.json());
    },

    // devBurger: function(id) {
    //     return fetch("/api/burgers/" + id, {
    //       method: "PUT"
    //     }).then(res => res.json);
    //   },


//     deleteExample: function(id) {
//       return fetch("/api/examples/" + id, {
//         method: "DELETE"
//       }).then(res => res.json);
//     }
  };