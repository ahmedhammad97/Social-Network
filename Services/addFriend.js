const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res) => {
  let sql = "INSERT INTO Request (Sender, Reciever) VALUES (?, ?), (?, ?)";
  dbConnection.query(sql, [req.cookies.id, req.body.friendId, req.body.friendId, req.cookies.id], (err, result) => {
    if(err) {console.log(err); res.send(false)}
    else{
      res.send(true)
    }
  })
}
