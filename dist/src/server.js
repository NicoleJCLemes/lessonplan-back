import app from "../src/config/app.js";
import "../src/config/setup.js";
var PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, function () { return console.log("The server is running on port " + PORT); });
