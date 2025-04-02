const express = require("express"); // include
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));  // IMPORTANTE PONER BIEN EL NOMBRE HSHDHDS
app.get("/",(req, res) => { res.sendFile(__dirname + "/public/index.html"); } ); // Esto nos devuelve el folder a publc

app.post("/process", (req, res) => {
  const userInput = req.body.userInput;
  res.send(`<p> enviado: ${userInput}</p>`); // Backticks para que se interprete como variable
});

// Iniciamos el servidor //////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
//////////////////////////////////////////////////////////////////////
