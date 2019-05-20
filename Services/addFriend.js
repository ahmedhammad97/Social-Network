const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res) => {
  let sql = "INSERT INTO Request (Sender, Reciever) VALUES (?, ?)";
  dbConnection.query(sql, req.cookies.id, req.body.friendId, (err, result) => {
    if(err) throw err;
    else{
      res.send(true)
    }
  })
}
