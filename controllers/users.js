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

// CHANGE: One-click Demo Login (auto-creates demo account if not in DB yet)
module.exports.demoLogin = async (req, res, next) => {
    try {
        let demoUser = await User.findOne({ username: "demo_guest" });
        if (!demoUser) {
            const newDemo = new User({
                username: "demo_recruiter",
                email: "demo@wanderlust.app",
            });
            demoUser = await User.register(newDemo, "WanderlustDemo@2026");
        }
        req.login(demoUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash(
                "success",
                "Logged in as demo_guest! Try creating a listing, editing your post, or leaving a review."
            );
            let redirectUrl = res.locals.redirectUrl || "/listings";
            return res.redirect(redirectUrl);
        });
    } catch (err) {
        req.flash("error", "Demo login failed. Please try signing up.");
        return res.redirect("/login");
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