const express = require("express");
const app = express();
const path = require("path");
const commentData = require("./comments.json");
const fs = require("node:fs");
const jsonFormat = require("json-format");
const { v4: uuidv4 } = require("uuid");
const port = process.argv[2] || 3000;
const methodOverride = require("method-override");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
    console.log(`LISTENING TO PORT ${port}`);
});

//Get all comments
app.get("/comments", (req, res) => {
    res.render("comments/index", { comments: commentData });
});

//Create new comment
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    if (!username || !comment) {
        return;
    }

    newCommentData = {
        id: uuidv4(),
        username: username,
        comment: comment,
    };
    commentData.push(newCommentData);
    updateJSON();
    res.redirect("comments");
});

//Get a comment
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = searchID(id);
    if (!comment) {
        res.redirect("/comments");
    }

    res.render("comments/show", { ...comment });
});

//Prevent user from going to the following URL
//by clicking comments on /comments/id.
//It's a slightly cursed solution, but yeah.
app.get("/comments/comments/:id", (req, res) => {
    const { id } = req.params;
    res.redirect(`../../comments/${id}`);
});

//Edit a comment
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newContent = req.body.comment;
    const comment = searchID(id);
    comment.comment = newContent;
    updateJSON();
    res.json({ sucess: true, reload: true });
});

//Delete a comment
app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;

    const index = commentData.findIndex((element) => element.id == id);
    commentData.splice(index, 1);
    updateJSON();

    res.redirect("/comments");
});

app.get("*", (req, res) => {
    res.redirect("/comments");
});

function updateJSON() {
    fs.writeFile("comments.json", jsonFormat(commentData), () => {});
}

function searchID(id) {
    return commentData.find((element) => element.id == id);
}
