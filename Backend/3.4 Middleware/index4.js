import express from "express";
import fileURLToPath from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var brandname="";

app.use(bodyParser.urlencoded({extended: true }));//raat lo

function brandnameGenarator(req,res,next)
{
  console.log(req.body);
  brandname=req.body["street"]+req.body["pet"];
  next();
}
app.use(brandnameGenarator);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
