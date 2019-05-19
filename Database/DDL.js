module.exports = con => {
  let tablesCreation = `
  CREATE TABLE IF NOT EXISTS User (
    Id int(8) NOT NULL,
    FirstName varchar(32) NOT NULL,
    LastName varchar(32) NOT NULL,
    NickName varchar(32) DEFAULT NULL,
    Password varchar(128) NOT NULL,
    Email varchar(64) NOT NULL UNIQUE,
    Gender varchar(8) NOT NULL,
    Birthday date NOT NULL,
    HomeTown varchar(32) DEFAULT NULL,
    MaritalStatus varchar(16) DEFAULT NULL,
    AboutMe varchar(256) DEFAULT NULL,
    Picture varchar(64) DEFAULT NULL UNIQUE,
    PRIMARY KEY(Id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  CREATE TABLE IF NOT EXISTS Phone (
    Id int(8) NOT NULL,
    Number varchar(32) NOT NULL UNIQUE,
    PRIMARY KEY(Id, Number),
    FOREIGN KEY(Id) REFERENCES User(Id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  CREATE TABLE IF NOT EXISTS Friendship (
    Id1 int(8) NOT NULL,
    Id2 int(8) NOT NULL,
    PRIMARY KEY(Id1, Id2),
    FOREIGN KEY(Id1) REFERENCES User(Id),
    FOREIGN KEY(Id2) REFERENCES User(Id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  CREATE TABLE IF NOT EXISTS Request (
    Sender int(8) NOT NULL,
    Reciever int(8) NOT NULL,
    PRIMARY KEY(Sender, Reciever),
    FOREIGN KEY(Sender) REFERENCES User(Id),
    FOREIGN KEY(Reciever) REFERENCES User(Id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  `

  con.query(tablesCreation, (err, result) => {
    if(err) throw err;
    else console.log("Database Ready to use...");
  })
}
