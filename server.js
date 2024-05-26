
// METHOD - 1
// function add(a,b){
//     return a+b;
// }

// var result = add(5,4);
// console.log(result);


// METHOD - 2
// var add = function(a,b){
//     return a+b;
// }
// console.log(add(5,6))


//METHOD - 3
// var add =(a,b) =>{return a+b};
// console.log(add(6,4));


// CALLBACK FUNCTION

// const callback = ()=>{
//     console.log('deepu is calling a callback function');
// }

// const add = (a,b)=>{
//     var result = a+b;
//     console.log(result);
//     callback();
// }

// add(5,4);



// MODULES IN NODEJS
// ......will do it


//IMPORT FILE IN NODEJS
// const notes = require('./notes.js');

// var result = notes.add(51,4);
// console.log(result);




//LODASH

// var _ = require('lodash');
// var data = ["rohit","chimakandu","rohit",1,5,6,1,3,5,"name","age","6"];
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString('rohimt'));
// console.log(_.isString(223));



// Convert JSON to Javascript objects

// const jsonString = '{"name": "john", "age":30, "city":"new york"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);
// console.log(jsonObject.age);
// console.log(jsonObject.city);

// const objectToConvert = {
//     name: "deepu",
//     age:34,
//     city:"jaipur"
// };
// const jsonStringified = JSON.stringify(objectToConvert);
// console.log(jsonStringified);






// EXPRESS

// const express = require('express');
// const app = express();
// const db = require('./db');

// app.get('/',(req,res)=>{
//     res.send('Hello frrandss');
// })

// app.get('/new',(req,res)=>{
//     res.send(`this is a new page`);
// })

// app.get('/home',(req,res)=>{
//     res.send(`this is the home page`);
// })

// app.get('/menu',(req,res)=>{
//     var allmenu = {
//         name:'rohit hotel',
//         size:'5 aadmi to kha hi sakte h',
//         is_dosa:true,
//         is_uttapam:true,
//         bill:500
//     }
//     res.send(allmenu);
// })

// app.listen(3002,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(`server is listening on port : 3002`);
//     }
// });







//CRUD operation


const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send('Hello frrandss');
})


const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuItemRoutes = require('./routes/menuRoutes');
app.use('/menu',menuItemRoutes);


app.listen(3002,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server is listening on port : 3002`);
    }
});