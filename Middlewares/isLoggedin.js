const dbConnection = require(__dirname + '/../Database/connection');

module.exports = async (req, res, next) => {
  if(!req.cookies.id) req.loggedin = false;
  else{
    let sql = "Select * FROM User WHERE id = ?";
    await dbConnection.query(sql, req.cookies.id, (err, result)=>{
      if(err) throw err;
      else{
        console.log("Hey!");
        if(result.length === 0) req.loggedin = false;
        else req.loggedin = true;
      }
    })
  }
  console.log(req.loggedin);
  return next()
}
