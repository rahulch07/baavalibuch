const UserText = require('../models/UserText');
const axios = require('axios');

const logUserText = async (req, res) =>{
    try{
        const {text} = req.body;

        const userText = new UserText({text: text});
        await userText.save();

        

        // Retrieve the two most recent strings from the database (assuming you have a model to store the strings)
    const recentStrings = await UserText.find({}).sort({ _id: -1 }).limit(2);
    //console.log(recentStrings);

    // Extract the strings from the recentStrings array
    const [string1, string2] = recentStrings.map((stringObj) => stringObj.text);
    //console.log(string1,",",string2);

    // Make a request to the Django API endpoint with the two strings
    const djangoAPIUrl = 'http://127.0.0.1:8000/ngrams'; // Replace with the actual URL of your Django API
    const response = await axios.post(djangoAPIUrl, { string1: string1, string2:string2 });

    // Extract the ngrams from the response and send them back to the frontend
    const ngrams = response.data.ngrams;
    console.log(ngrams);
    res.json({ message: "Text inserted successfully", ngrams: ngrams, string1:string1, string2:string2});
    //res.json({ ngrams });

    }
    catch(error){
        console.log("Error logging Text: ", error);
        res.status(500).json({error: "Internal srver error"})
    }
};

module.exports = { logUserText };