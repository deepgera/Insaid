const { connect } = require("./schema");
let connection = connect();
async function AddData(body) {
  let name=''
  let email=''
  let phone=''
  if(body.name){
   name=body.name;
  }
  if(body.email){
   email=body.email;
  }
  if(body.phone){
   phone=body.phone;
  }
  let sql = `INSERT INTO Person(name,email,phonenumber) VALUES("${name}","${email}","${phone}")`;
  let res={};
  if(connection){
    res = (await connection).query(sql, (err, results, fields) => {
        if (err) {
        return console.error(err.message);
        }
        // get inserted id
        console.log(' Id:' + results.insertId);
        let obj={ message: "Data added", status: "ok" }
        return obj;
        })
    }
  //connection.end();
  return res;
}

module.exports={ AddData };
