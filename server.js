require("dotenv").config();

const express = require("express");
const path = require("path");
const http = require("http");
const mongoose = require("mongoose");
const socketServer = require("socket.io");

const app = express();

app.use(express.json({ extended: false }));

// app.get("/chat", async (req, res) => res.send("Hello"));
// app.get("/", async (req, res) => res.send("Hello"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// MONGOOSE CONNECT

connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();

const ser = http.createServer(app);
const io = socketServer(ser);

ser.listen(process.env.PORT, () =>
  console.log(`Server started on port: ${process.env.PORT}`)
);

const connections = [];
io.on("connection", function(socket) {
  console.log("Connected to Socket!!" + socket.id);
  connections.push(socket);
  socket.on("disconnect", function() {
    console.log("Disconnected - " + socket.id);
  });

  socket.on("chat-message", data => {
    console.log("HOHOHO");
    io.emit("hohoho", data);
  });
});
