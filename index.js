const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const mysql = require("mysql")

app.use(cors());
app.use(express.json());


// var Connection = require('tedious').Connection;

// var config = {
//     server: 'localhost',  //update me
//     authentication: {
//         type: 'default',
//         options: {
//             userName: 'sa', //update me
//             password: 'AAsdfg10'  //update me
//         }
//     },
//     options: {
//         // If you are on Microsoft Azure, you need encryption:
//         database: 'ApplicantsData'  //update me
//     }
// };


// // var config = {
// //     userName: 'sa',
// //     password: 'AAsdfg10',
// //     database: 'ApplicantsData',
// //     server: '127.0.0.1',
// //     port: 1443,
// //     debug: true,
// //     driver: 'tedious',
// //     options: {
// //         port: 1443,
// //         encrypt: false,
// //         database: 'ApplicantsData',
// //         useColumnNames: false,
// //         debug: {
// //             packet: true,
// //             data: true,
// //             payload: true,
// //             token: true,
// //             log: true
// //         }
// //     }
// // };



// var connection = new Connection(config);

// connection.on("connect", function (err) {
//     if (err) {
//         console.log('Error: ', err)
//     } else {
//         console.log("Successful connection");

//     }
// });

// connection.connect();
// var Request = require('tedious').Request;
// var TYPES = require('tedious').TYPES;


// function executeStatement() {
//     request = new Request("SELECT * FROM dbo.ApplicantsInfo;", function (err) {
//         if (err) {
//             console.log('******************')
//             console.log('******************')
//             console.log('******************')
//             console.log('******************')
//             console.log(err);
//         }
//     });
//     var result = "";
//     request.on('row', function (columns) {
//         columns.forEach(function (column) {
//             if (column.value === null) {
//                 console.log('NULL');
//             } else {
//                 result += column.value + " ";
//             }
//         });
//         console.log(result);
//         result = "";
//     });

//     request.on('done', function (rowCount, more) {
//         console.log(rowCount + ' rows returned');
//     });

//     // Close the connection after the final event emitted by the request, after the callback passes
//     request.on("requestCompleted", function (rowCount, more) {
//         connection.close();
//     });
//     connection.execSql(request);
// }










app.get("/", (req, res) => {

    res.send("Hello World!");
});









app.post("/basicData", (req, res) => {
    console.log(req.body)
    console.log('i have been hit')
});

app.post("/educationData", (req, res) => {
    console.log(req.body)
    console.log('i have been hit')
});

app.post("/skillsData", (req, res) => {
    console.log(req.body)
    console.log('i have been hit')
});

app.post("/coursesData", (req, res) => {
    console.log(req.body)
    console.log('i have been hit')
});

app.post("/experienceData", (req, res) => {
    console.log(req.body)
    console.log('i have been hit')
});


app.listen(port, () => {
    // perform a database connection when server starts

    console.log(`Server is running on port: ${port}`);
});