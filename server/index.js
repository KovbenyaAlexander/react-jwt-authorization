const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = 5000;
const server = express();

const start = async () => {
  server.listen(PORT, () => {
    console.log(`STAAART - ${PORT}`);
  });
};

start();
