const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router.route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

router.route("/login")
    .get(userController.renderLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }),
        userController.login
    );

// CHANGE: Added POST /demo-login route for one-click recruiter testing
router.post("/demo-login", saveRedirectUrl, wrapAsync(userController.demoLogin));

router.get("/logout", userController.logout);

module.exports = router;