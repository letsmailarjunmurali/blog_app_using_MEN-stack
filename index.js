const express = require("express");
const path = require("path");
const app = new express();
const ejs = require("ejs");

app.set("view engine", "ejs");

app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "public/pages/index.html"));
  res.render("index");
});
app.get("/about", (req, res) => {
  //res.sendFile(path.resolve(__dirname, "public/pages/about.html"));
  res.render("about");
});
app.get("/contact", (req, res) => {
  //res.sendFile(path.resolve(__dirname, "public/pages/contact.html"));
  res.render("contact");
});
app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/pages/post.html"));
  res.render("post");
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});
app.post("/posts/store", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
