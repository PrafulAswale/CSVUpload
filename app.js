const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();

const path = require("path");
const { PORT, MONGODB_URL } = process.env;

app.use(expressEjsLayouts);

// set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(PORT || 5000, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`server is running on port: ${PORT}`);
});
