const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res, next) => {
  let sql = `INSERT INTO Friendship VALUES (?, ?), (?, ?);`;
  dbConnection.query(sql, [req.body.id, req.cookies.id, req.cookies.id, req.body.id], (err, result) => {
    if(err) {console.log(err); res.send(false);}
    else{
      return next();
    }
  })
}
