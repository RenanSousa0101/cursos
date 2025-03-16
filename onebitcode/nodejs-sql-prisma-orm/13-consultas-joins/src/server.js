const express = require("express");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const tagsRouter = require("./routes/tags");

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/tags", tagsRouter);

app.listen(5000, console.log("Server running on http://localhost:5000/"));