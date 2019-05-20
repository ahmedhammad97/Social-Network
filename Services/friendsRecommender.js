const dbConnection = require(__dirname + '/Database/connection');

module.export = (req, res) => {
  let sql = "SELECT User.Id, User.NickName, User.Picture FROM User INNER JOIN Friendship ON User.Id = Friendship.Id1
             WHERE User.Id NOT = ? AND Friendship.Id2 NOT = ?";
  dbConnection.query(sql, req.cookies.id, req.cookies.id, (err, result) => {
    if(err) throw err;
    else{
      res.send(result)
    }
  })
}
