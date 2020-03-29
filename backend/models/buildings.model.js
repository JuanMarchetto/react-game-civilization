const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const buildingSchema = new Schema(
  {
    type: { type: String, required: true },
    level: { type: Number, required: true },
    owner: { type: String, required: true },
    game: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Building = mongoose.model("Building", buildingSchema);

module.exports = Building;
