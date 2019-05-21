const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res, next) => {
  let sql = `DELETE FROM Request WHERE Sender = ? AND Reciever = ?`;
  dbConnection.query(sql, [req.body.id, req.cookies.id], (err, result) => {
    if(err) {console.log(err); res.send(false);}
    else{
      res.send(true);
    }
  })
}
