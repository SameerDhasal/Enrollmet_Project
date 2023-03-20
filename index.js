const express = require("express");
const app = express();
const port = 5000;
const port1 = 6000;

const router = require("./router");
const bodyParser = require("body-parser");

//app.get("/", (req, res) => { res.json({ message: "ok" });});

app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  
  app.use("/", router);



  

