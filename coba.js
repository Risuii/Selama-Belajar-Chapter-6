const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json("berhasil");
});

app.listen(9000);
