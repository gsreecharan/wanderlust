require("dotenv").config();
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]); // Bypasses JioFiber/College DNS blocks

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongoURL = process.env.ATLASDB_URL; 

main().then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log("Database connection failed:", err);
})

async function main(){
    await mongoose.connect(mongoURL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj , owner: "6ab7559393681ac3c08c330f"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();