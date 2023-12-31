const express = require('express');
const routes = require('./routes');
const db = require("./config/database");
const app = express();
const PORT = process.env.PORT || 3000
// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for = running on port ${PORT}!`);
  });
});
