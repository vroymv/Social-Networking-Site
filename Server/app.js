require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { main, Post, User, Message } = require("./Database.js");
const http = require("http");
var passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
const cookieParser = require("cookie-parser");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const socketServer = http.createServer(app);
const io = new Server(socketServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
  transports: ["websocket"],
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use(cors());

main();

//for saving sessions on server
const MONGO_URL = process.env.MONGO_URL;

app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URL,
    }),
    cookie: { secure: false },
  })
);

passport.use(User.createStrategy());

passport.serializeUser(function (user, cb) {
  console.log(user);
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.get("/api", async function (req, res) {
  const cursor = parseInt(req.query.cursor);
  const pageSize = 2;

  const skipAmount = cursor * pageSize;

  const nextId = cursor + 1;
  const prevId = cursor;
  try {
    const posts = await Post.find().skip(skipAmount).limit(pageSize);
    res.json({
      posts,
      nextId,
      prevId,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/auth", async function (req, res) {
  try {
    if (req.session.user) {
      res.json({
        status: true,
        userId: req.session.user.userId,
      });
    } else {
      res.json({
        status: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/getUserData", async function (req, res) {
  try {
    const user = await User.find({ _id: req.body.userId });
    res.json({
      user: user[0],
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/getMessages", async function (req, res) {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    console.log(err);
  }
});

app.get("/getUsers", async function (req, res) {
  try {
    const Users = await User.find();
    res.json({
      Users,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/createPost", async function (req, res) {
  try {
    const newPost = new Post({
      userName: "Roy",
      postPhoto: {
        imgType: req.body.imgType,
        imgUrl: req.body.imgURL,
      },
      profileImage: {
        imgType: req.body.imgType,
        imgUrl: req.body.imgURL,
      },
      time: new Date(),
      location: req.body.formText.location,
      caption: req.body.formText.caption,
      tags: req.body.formText.tags.split(","),
      likes: 0,
    });

    await newPost.save();
    res.json({
      message: "Post Received by server",
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/updateProfile", async function (req, res) {
  try {
    const filter = { _id: req.body.userId };
    const update = {
      profileImage: {
        imgType: null,
        imgUrl: req.body.imgURL,
      },
      name: req.body.formText.name,
      username: req.body.formText.username,
      bio: req.body.formText.bio,
    };
    await User.findOneAndUpdate(filter, update);

    res.json({
      message: "Update Received by server",
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async function (req, res) {
  try {
    const authenticate = User.authenticate();
    authenticate(req.body.email, req.body.pwd, function (err, result) {
      console.log(err);
      if (err) {
        console.log("Sorry, error occured!");
      } else {
        if (result) {
          req.session.user = {
            username: result.username,
            userId: result._id,
          };
          res.json({
            success: true,
            userId: req.session.user.userId,
          });
        } else {
          console.log("Sorry user not found!");
          res.json({
            success: false,
          });
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/logout", async function (req, res) {
  try {
    req.session.destroy();
    console.log("logged out");
    res.json({
      status: "logged out",
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/register", async function (req, res) {
  try {
    User.register(
      {
        email: req.body.email,
        username: req.body.username,
        name: req.body.name,
      },
      req.body.pwd,
      function (err, user) {
        if (err) {
          console.log(err);
        }
        console.log("new user created");
        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

socketServer.listen(3001);

io.on("connection", (socket) => {
  //Join a room
  // socket
  socket.on("SendMessage", async (msg, sendInfo) => {
    try {
      console.log(msg, sendInfo);
      const message = new Message({
        sender: sendInfo.sender,
        recipient: sendInfo.recipient,
        message: msg,
        sentTime: sendInfo.sendTime,
        clientOffset: null,
      });
      await message.save();
      io.emit("receiveMessage", msg, sendInfo);
      // console.log("message: " + msg + "\nfrom: " + sender.sender);
    } catch (err) {
      console.log(err);
    }
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
