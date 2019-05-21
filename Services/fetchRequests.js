const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res) => {
  let sql = `SELECT User.Id, User.NickName, User.Picture FROM User INNER JOIN Request ON User.Id = Request.Sender
              WHERE Request.Reciever = ?;`;
  dbConnection.query(sql, req.cookies.id, (err, result) => {
    if (err) {console.log(err); res.render('error');}
    else{
      res.render('requestlist', {"loggedin" : req.loggedin, "data": result})
    }
  })
}
