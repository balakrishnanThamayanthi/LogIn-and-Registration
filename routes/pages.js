const express = require('express');
const router = express.Router();
const userController = require("../controllers/users");


router.get(["/", "/login"], (req, res) =>{
    //res.send("<h1> Hello </h1>");
    res.render("login");
});

router.get("/register", (req, res) =>{
    res.render("register");
});

router.get("/profile", userController.isLoggedIn, (req, res,) =>{
    res.render("profile");
    // res.render("profile", { user: req.user });
    
    // if (req.user) {
    //     res.render("profile", {user: req.user});

    // } else {
    //     res.redirect("/login");
    // }
});

router.get("/home", userController.isLoggedIn, (req, res) =>{
     res.render("home");
    // if (req.user) {
    //     res.render("home", {user: req.user});
    // } else {
    //     res.redirect("/login");
    // }
});


module.exports = router;
