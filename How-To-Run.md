# How to Run
1. Make sure you have [Node.js](https://nodejs.org/en/) installed properly.
2. Make sure both [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are running the latest versions.
3. Clone or download the project from the Github [repo](https://github.com/ahmedhammad97/Social-Network).
4. Install all required dependencies by typing `npm install` in the terminal
5. Run the project by typing `node app.js` in the terminal.
6. You should see a series of messages stating the state of the server and the database. Ex. 
```bash
Listening at port 10001...
Database connected!
Database Ready to use...
```
7. From your browser, head to `http://localhost:10001`, you should see the app running.

**Note:** We assume the existence of a MYSQL database with the name "FriendsNet", We created a DDL module in the project that should do the job of populating the database, but it must connect the existing database first.
