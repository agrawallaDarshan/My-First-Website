const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

//EXPRESS SPECIFIC CONFIGURATION
app.use('/static',express.static('static')); //For serving static files
app.use(express.urlencoded()); //For form data submission

//PUG SPECIFIC CONFIGURATION
app.set('view engine','pug'); //set the template engine as pug
app.set('views',path.join(__dirname,'views')); //set the views directory

//ENDPOINTS
app.get('/', function (req, res) {
    // const changes = {
    //     "title": "PUG Templates",
    //     "content" : "PUG is one of the best templates in Express",
    //     "heading" : "Jai MahaKAl"
    // };
    res.status(200).render('index.pug');
  })

// app.post('/',(req,res)=>{
//     let name = req.body.name;
//     let age = req.body.age;
//     let gender = req.body.gender;
//     let address = req.body.address;
//     let hobbies = req.body.hobbies;

//     let outputFile = `Name: ${name}\nAge: ${age}\nGender: ${gender}\nAddress: ${address}\nHobbies: ${hobbies}`;

//     fs.writeFileSync('output.txt',outputFile);
//     console.log("Your response has been recorded");

// });

// server section - creating our server
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
});