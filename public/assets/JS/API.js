// The API object contains methods for each kind of request we'll make
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
    return fetch("/api/examples").then(res => res.json());
  },
  getBurger: function(id) {
    return fetch(`/api/burger/${id}`).then(res => res.json());
  },

  delete: function(id) {
    return fetch("/api/examples/" + id, {
      method: "DELETE"
    }).then(res => res.json);
  }
};


// // C/O "NES template" - bcbrian
// export default {
//   saveBurger: function(burger) {
//       return fetch("/api/burger", {
//         headers: {
//           "Content-Type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify(burger)
//       }).then(res => res.json());
//     },
    
//     getBurger: function() {
//       return fetch("/api/burger").then(res => res.json());
//     }
// };

// export default 
//     saveBurger: function(burger) {
//       return fetch("/api/burger", {
//         headers: {
//           "Content-Type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify(burger)
//       }).then(res => res.json());
//     },
    
//     getBurger: function() {
//       return fetch("/api/burger").then(res => res.json());
//     }

    // devBurger: function(id) {
    //     return fetch("/api/burgers/" + id, {
    //       method: "PUT"
    //     }).then(res => res.json);
    //   },


//     deleteExample: function(id) {
//       return fetch("/api/examples/" + id, {
//         method: "DELETE"
//       }).then(res => res.json);
// //     }
//   };