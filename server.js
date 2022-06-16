const express = require("express")
const app = express();
const path = require('path')

require("dotenv").config()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})


const helmet = require("helmet")
app.use(helmet.frameguard())

const rateLimit = require("express-rate-limit")
const limiter = rateLimit({
  windowMs: 0.1 * 60 * 1000,
  max: 100,
});

app.use(limiter);

// const userRoutes = require("./routes/user");
require("./routes/menu.js")(app);

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(` Le serveur est en écoute sur le port ${PORT}.`);
});



const db = require("./models");

db.sequelize.sync();

//  db.sequelize.sync({ force: true }).then(() => {
  //  console.log("Drop and re-sync db.");
// //  run();
//  });

app.use('/images', express.static(path.join(__dirname, 'images')))


