"use strict";
require("express-async-errors");
const express = require("express");
require("dotenv").config();
const { mongooseConnection } = require("./startup/mongooseConnection");
const PORT = process.env?.PORT || 8000;
const cors = require("cors");
const app = express();
app.use(express.json());

//! cors
// app.use(cors());//* tüm istemci urllerine ve tüm http methodlarına izin verir
//* specific
app.use(
	cors({
		origin: "http://localhost:3000", //* sondaki slash olmayacak. sadece localhost:3000 e izin ver. Host adresi
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE", //* methodlara verilecek izinleri ayarlanabilir.
	})
);
app.all("/", (req, res) => {
	res.send("Hello TutorialApp");
});

app.use("/tutorials", require("./routes/tutorialRoute"));

app.use(require("./middlewares/errorHandler"));
mongooseConnection();
app.listen(PORT, () => console.log("Listening http://127.0.0.1:" + PORT));
