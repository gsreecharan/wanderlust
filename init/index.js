const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongoURL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect(mongoURL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj , owner: "6aacaa4a22aed79329016b18"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();