const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes");
const cors = require('cors')

mongoose.connect(
	"mongodb://localhost:27017/eduwork",
	() => {
		console.log("connected to Database");
	},
	(e) => {
		console.error(e);
	},
);

const port = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("views"));
app.use(express.static("public"));

app.use("/api/", apiRouter);

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
});
