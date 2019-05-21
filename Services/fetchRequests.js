const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res) => {
  let sql = `SELECT User.Id, User.NickName, User.Picture FROM User INNER JOIN Request ON User.Id = Request.Reciever
              WHERE Request.Reciever = ?;`;
  dbConnection.query(sql, req.params.id, (err, result) => {
    if (err) {console.log(err); res.render('error');}
    else{
      console.log(result);
      res.render('requestlist', {"loggedin" : req.loggedin, "data": result})
    }
  })
}
