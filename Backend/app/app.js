const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const { db } = require("./config");
const router  =  require("./routes/index");

const app = express();


app.use(bodyParser.json());
app.use("/api/v1",router);

mongoose.connect(db.url, { useNewUrlParser: true });
const mongo = mongoose.connection;

mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
	.once("open", () => console.log("Connected to database"));
    

app.listen(process.env.PORT || 8000,() => {
    console.log('Estoy corriendo');

})
