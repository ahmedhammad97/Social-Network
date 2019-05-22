const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res) => {
  let sql = `SELECT DISTINCT u1.Id, u1.NickName, u1.Picture
              FROM User u1
              LEFT JOIN (
                  SELECT ID2 AS id
                  FROM Friendship
                  WHERE ID1 = ?
                  UNION ALL
                  SELECT ID1
                  FROM Friendship
                  WHERE ID2 = ?
                  UNION ALL
                  SELECT Sender
                  FROM Request
                  WHERE Reciever = ?
                  UNION ALL
                  SELECT Reciever
                  FROM Request
                  WHERE Sender = ?
                  ) ux
              ON ux.id = u1.id
              WHERE ux.id IS null
              and u1.Id <> ?
              LIMIT 9`;
  dbConnection.query(sql, [req.cookies.id, req.cookies.id, req.cookies.id, req.cookies.id, req.cookies.id], (err, result) => {
    if(err) throw err;
    else{
      res.send(result)
    }
  })
}
