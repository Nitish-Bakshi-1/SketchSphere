import express from "express";
const app = express();
const port = 3000;

app.post("/signup", (req, res) => {});
app.post("/signin", (req, res) => {});
app.post("/create-room", (req, res) => {});

app.listen(port, () => {
  console.log("listening to - " + port);
});
