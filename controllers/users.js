const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

// CHANGE: Added missing `next` parameter so req.login error handling doesn't throw ReferenceError
module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.demoLogin = async (req, res, next) => {
    try {
        const demoUsername = "demo_guest";
        const demoEmail = "demo.guest@wanderlust.app";

        let demoUser = await User.findOne({
            $or: [{ username: demoUsername }, { email: demoEmail }],
        });

        if (!demoUser) {
            const newDemoUser = new User({
                email: demoEmail,
                username: demoUsername,
            });
            demoUser = await User.register(newDemoUser, "WanderlustDemo#2026");
        }

        req.login(demoUser, (err) => {
            if (err) {
                console.error("Demo req.login error:", err);
                return next(err);
            }
            req.flash("success", "Welcome! Signed in with the demo guest account.");
            return req.session.save((saveErr) => {
                if (saveErr) {
                    console.error("Demo session save error:", saveErr);
                    return next(saveErr);
                }
                res.redirect("/listings");
            });
        });
    } catch (e) {
        console.error("Demo login error:", e);
        req.flash("error", "Demo login failed. Please try signing up.");
        res.redirect("/login");
    }
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out.");
        res.redirect("/listings");
    });
};