var express = require("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	bcrypt = require('bcryptjs')
passportLocalMongoose =
	require("passport-local-mongoose"),
	User = require("./models/user");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/petcave");

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));

app.use(require("express-session")({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===================== 
// ROUTES 
//===================== 

// Showing home page 
app.get("/", function (req, res) {
	res.render("login");
});

// Showing secret page 
app.get("/secret", isLoggedIn, function (req, res) {
	res.render("secret");
});

// Showing register form 
app.get("/register", function (req, res) {
	res.render("register");
});

// Handling user signup 
app.post("/register", async function (req, res) {
	try {
		const salt = await bcrypt.genSalt()
		var username = req.body.username
		var password = req.body.password
		var hashedPassword = await bcrypt.hash(password, salt)
		User.register(new User({ username: username, Password: hashedPassword }), password,
			function (err, user) {
				if (err) {
					alert(err);
					return res.render("register");
				}
				else {

					res.render("login")
				}
			})
	}
	catch {
		res.status(500).send()
	}
})

//Showing login form 
app.get("/login", function (req, res) {
	res.render("login");
});

//Handling user login 
app.post("/login", async (req, res) => {
	var username = req.body.username
	var password = req.body.password
	User.findOne({ username: username })
		.exec(function (error, user) {
			if (error) {
				res.render("login")
				return callback(error)
			} else if (!user) {
				console.log('User not found!');
				res.render("login")
			}
			else if (user == null) {
				return res.status(400).send("Cant find the user")
			}
			else {
				if (bcrypt.compare(password, user.Password)) {
					res.render("secret")
				}
			}
		})
})
//Handling user logout 
app.get("/logout", function (req, res) {
	req.logout();
	res.redirect("/");
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/login");
}

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server Has Started!");
})
