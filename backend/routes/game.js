const router = require("express").Router();
let Game = require("../models/games.model");

router.route("/").get((req, res) => {
  Game.find()
    .then(games => res.json(games))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const owner = req.body.owner;
  const players = req.body.players;

  const newGame = new Game({
    owner,
    players
  });

  newGame
    .save()
    .then(() => res.json("Game added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Game.findById(req.params.id)
    .then(game => res.json(game))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Game.findById(req.params.id)
    .then(game => {
      game.owner = req.body.owner;
      game.players = req.body.players;
      game
        .save()
        .then(() => res.json("Game updated."))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
