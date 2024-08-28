const express = require("express");
const path = require("path");

const app = express();

//Built in middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "dist")));

//Catch all and server static file
app.get("/*", (req, res) => {
	return res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
