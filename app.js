let express = require('express');
let fs = require('fs');
let app = express();
let dataFile = require('./users.json');
let bodyParser = require('body-parser');
// let dataFile = "";

//parse incoming requests data

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// fs.readFile('./users.json', 'utf8', (err, fileContents) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   try {
//     dataFile = JSON.parse(fileContents)
//     console.log(dataFile);
//   } catch (err) {
//     console.error(err)
//   }
// });





app.get("/listAllUsers", (req, res, next) => {
  res.end(dataFile);
//   res.status(200).send({
//  dataFile
//   })

  // fs.readFile(dataFile, function(err, data){
  //   console.log(data);
  //   res.end(data);
  // })
});

// function searchByKey(arr, key){
//   for(let counter = 0, length = arr.length; counter < length; counter++){
//     // console.log("counter: ", counter);
//     // console.log("length: ", length);
//     console.log(arr);
//     // if(arr[counter]['Key'] === key){
//     // return arr[counter]['Values'];
//     // }
//   }
//   return false;
// }

// let jsonfile = JSON.parse(dataFile);
// let jsonstring = JSON.stringify(dataFile);

// get all todos
// app.get('/test', (req, res) => {
//   res.status(200).send({
//     success: 'true',
//     message: 'todos retrieved successfully',
//     todos: jsonstring
//   })
// });


// app.get("/listNames", (req, res, next) =>{

// });

// app.get("/listNames", (req, res, next) => {
  
//  fs.readFile(dataFile, function(err, data){
//    let test = JSON.parse(data);
//    console.log(test);
//   //  let test = searchByKey(data, "name");

//   // //  console.log(test);
//   //  console.log(err);   
//   // //  console.log(d;
//   //  res.end(test);
//   //  console.log(data);
//   console.log(test);
//    res.end(test);
//  })
// });

// var user = {
//   "user4": {
//     "name": "mohit",
//     "password": "password4",
//     "profession": "teacher",
//     "id": 4
//   }
// }

// app.post("/addUsers", (req, res, next) => {
//   fs.readFile(dataFile, function (err, data) {
//     data = JSON.parse(data);
//     data["user4"] = user["user4"];
    
//     console.log(data);
//     res.end(JSON.stringify(data));
//   })
// });


app.listen(3000, () => {
  console.log('Server running on port 3000')
});