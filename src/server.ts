import app from "../src/config/app.js";
import "../src/config/setup.js"

const PORT:number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log("The server is running on port " + PORT));