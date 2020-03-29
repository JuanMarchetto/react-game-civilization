const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    type: { type: String, required: true },
    level: { type: Number, required: true },
    owner: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
