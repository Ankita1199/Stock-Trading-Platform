const mongoose = require("mongoose");
const HoldingsSchema=require("../schemas/holdingsSchema");

const HoldingsModel = mongoose.model("Holding", HoldingsSchema);

module.exports = HoldingsModel;
