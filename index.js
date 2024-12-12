//

// const { connectionDb } = require("./src/Database/Home.js");
// const { app } = require("./app.js");
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://taufikcitbd:uMjCrW1kXe141dfQ@cluster0.60kn3.mongodb.net/esmern2307Backend")
  .then(() => {
    console.log("mongo db connnection sucessfully")
    // app.listen(4000 || 5000, () => { 
    //   console.log("Server running on port 4000");
    // });
  })
  .catch((err) => {
    console.log("err", err);
  });
// connectionDb().then(() => {
//     app.listen(4000 || 5000, () => {
//         console.log("Server running on port 4000");
//     })
// })
