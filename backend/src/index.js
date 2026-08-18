import express from "express";
import router from "./router/routes.js";

const app = express();
const port = 3000;

app.use("/api", router);

app.listen(port, ()=>{
    console.log("App corriendo en el puerto " + port);
})

