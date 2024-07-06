require("dotenv").config();
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
var findOrCreate = require("mongoose-findorcreate");

main().catch((err) => console.log(err));

//Mongo DB connection
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

const postsSchema = new mongoose.Schema({
  userName: String,
  postPhoto: {
    imgType: String,
    imgUrl: String,
  },
  profileImage: {
    imgType: String,
    imgUrl: String,
  },
  time: Date,
  location: String,
  caption: String,
  tags: [String],
  likes: Number,
});

const Post = new mongoose.model("Post", postsSchema);

const userSchema = new mongoose.Schema({
  profileImage: {
    imgType: String,
    imgUrl: String,
  },
  name: String,
  username: String,
  email: String,
  password: String,
  bio: String,
});

const messagesSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  message: String,
  sentTime: Date,
  clientOffset: String,
});

const Message = new mongoose.model("Message", messagesSchema);

const options = {
  hashField: "password",
  usernameQueryFields: ["email", "username"],
};

userSchema.plugin(passportLocalMongoose, options);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("user", userSchema);

module.exports = { main, Post, User, Message };
