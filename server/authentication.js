const user_collection = require("./database.js").user_collection;
const bcrypt = require("bcrypt");
const axios = require("axios");
const jwt = require("jsonwebtoken");

const login = async(req, res, next) => {

    console.log(req.body)
    const username = req.body.username;
    const password = req.body.password;

    if (userExists(username)) {
        if ((await checkPassword(username, password)) == true) {
            const user = { name: req.body.username };
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.send(accessToken);
        } else {
            next(new Error("Wrong credentials"));
        }
    } else {
        next(new Error("No such user exists!"));
    }

};


const register = async(req, res, next) => {
    if (!(await userExists(req.body.username))) {
        const passwordEncrypted = await hashPassword(req.body.password);
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: passwordEncrypted,
        };
        user_collection.insertOne(user, (err, res) => {
            if (err) throw err;
            console.log(res);
        });
        const userAuth = { name: req.body.username };
        const accessToken = jwt.sign(userAuth, process.env.ACCESS_TOKEN_SECRET);
        res.send(accessToken);

    } else {
        res.status(400).send('user exists')
    }
};

async function userExists(usernameParam) {
    if ((await user_collection.findOne({ username: usernameParam })) == null) {
        return false;
    } else {
        return true;
    }
}

async function checkPassword(usernameParam, passwordParam) {
    try {
        const user = await user_collection.findOne({ username: usernameParam });
        const password = user.password;
        console.log(bcrypt.compareSync(passwordParam, password));
        return bcrypt.compareSync(passwordParam, password);
    } catch (err) {
        return false;
    }
}

async function hashPassword(password, saltRounds = 5) {
    try {
        const salt = await bcrypt.genSalt(saltRounds);

        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log(error);
    }
    return null;
}


const authenticateToken = function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

        if (err) return res.sendStatus(403)
        console.log(user)
        req.user = user

        next()
    })
}

const getUserInfo = async function getUserInfo(req, res, next) {
    let result = await user_collection.findOne({ username: req.user.name })
        // result.password = ""
    res.send(result)
}

const updatePassword = async function updatePassword(req, res, next) {
    let cryptPassword = await hashPassword(req.body.password)
    await user_collection.updateOne({ username: req.user.name }, { $set: { password: cryptPassword } })
    res.send("Updated")
}

module.exports = {
    login,
    register,
    authenticateToken,
    getUserInfo,
    updatePassword
};