const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res, next) => {
  if(!req.cookies.id){
    req.loggedin = false;
    return next();
  }
  else{
    let sql = "SELECT * FROM User WHERE id = ?";
    dbConnection.query(sql, req.cookies.id, (err, result)=>{
      if(err) throw err;
      else{
        if(result.length === 0) req.loggedin = false;
        else req.loggedin = true;
        return next()
      }
    })
  }
}
