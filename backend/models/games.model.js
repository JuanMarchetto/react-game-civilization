const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    owner: { type: String, required: true },
    players: { type: Array, required: true }
  },
  {
    timestamps: true
  }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
