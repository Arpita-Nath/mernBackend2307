const mongoose = require("mongoose")

// const connectionDb = async () => {
//     try{
//         // const databaseInstance = await mongoose.connect("mongodb+srv://arpitanath39:xzWUukJg72ow1AtR@cluster0.c31sv.mongodb.net/Mern2307Backend")
//         const databaseInstance = await mongoose.connect("mongodb+srv://arpitanath39:xzWUukJg72ow1AtR@cluster0.c31sv.mongodb.net")
      
//         if(databaseInstance){
//             console.log("Database Connected"); 
//         }
//     } catch(error){
//         console.log("From database connection error", error); 
//     }
// }

module.exports = { connectionDb }