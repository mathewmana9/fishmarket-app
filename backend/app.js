const express = require("express");
const { connect } = require("mongoose");

// APP constants

const { DB, PORT } = require("./config");

// initialize the app
const app = express();

// connecting to the database
const ConnectDB = async () => {
  try {
    await connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Successfully connected to the ${DB}`);
  } catch (err) {
    console.log("Unable to connect to the Database");
  }
};

ConnectDB();

app.listen(PORT, (res, req) => {
  console.log(`Server started on PORT ${PORT}`);
});
