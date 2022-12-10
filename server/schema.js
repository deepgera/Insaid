const mysql= require('mysql');
const dotenv = require("dotenv");
dotenv.config();


let createTable = `create table if not exists Person(
    id int primary key auto_increment,
    name varchar(255)not null,
    email varchar(255)not null,
    phonenumber varchar(255) not null
)`;

async function connect(){
    let connection=mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.PASSWORD,
        database: 'insaid'
    })
    connection.connect((err)=>{
        if (err){
            console.log(err)
            return err
        }
        else{
            console.log("connnected")
            connection.query(createTable, function(err, results, fields) {
                if (err) {
                    console.log("error while connecting creating table",err.message);
                    return connection
                }
                else{
                    console.log("table created")
                    return connection;
                }
            });
        }
    })
    return connection;
}

module.exports={connect}



// mongoose
//   .connect(
//     `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.rdcdm.mongodb.net/?retryWrites=true&w=majority`
//   )
//   .then(() => {
//     console.log("connnected");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const DataSchema = new mongoose.Schema({
//   Name: String,
//   Email: String,
//   Phone: Number
// });


