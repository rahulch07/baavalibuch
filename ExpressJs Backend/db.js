const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/textanalyzer";
// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to MongoDB Successfully!")
//     })
// }

const db = async () =>{
    try{
        const con = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`mongodb connected: ${con.connection.host}`)
    }
    catch(error){
        console.error(error)
    }
}
module.exports = db;