const mongoose = require("mongoose");

const DB =
  "mongodb+srv://bapi:bapi@cluster0.ywhjyhg.mongodb.net/instraDB?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
}

module.exports = main;
