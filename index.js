const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
mongoose.connect("mongodb://127.0.0.1:27017/my_database");
//Creating document
BlogPost.create(
  {
    title: "title1",
    body:
      "If you have been here a long time, you might remember when I went on ITV ",
  },
  (err, blogpost) => {
    console.log(err, blogpost);
  }
);

// return all blog
BlogPost.find({}, (error, blogspot) => {
  console.log(error, blogspot);
});

// return blog with title1
BlogPost.find({ title: "title1" }, (error, blogspot) => {
  console.log(error, blogspot);
});

// return blog with tit wildward // like %
BlogPost.find({ title: /tit/ }, (error, blogspot) => {
  console.log(error, blogspot);
});

var id = "606075b77b868905d91aab20";
BlogPost.findById(id, (error, blogspot) => {
  console.log(error, blogspot);
});

// Updating record
var id = "606075b77b868905d91aab20";
BlogPost.findByIdAndUpdate(
  id,
  { title: "Updated title" },
  (error, blogspot) => {
    console.log(error, blogspot);
  }
);

// Deleting Record
var id = "6060720c660544050c7193cb";
BlogPost.findByIdAndDelete(id, (error, blogspot) => {
  console.log(error, blogspot);
});
