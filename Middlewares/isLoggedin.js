const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res, next) => {
  if(!req.cookies.id) req.isLoggedin = false;
  else{
    let sql = "Select * FROM User WHERE id = ?";
    dbConnection.query(sql, req.cookies.id, (err, result)=>{
      if(err) throw err;
      else{
        if(result.length === 0) req.isLoggedin = false;
        else req.isLoggedin = true;
      }
    })
  }
  return next()
}
