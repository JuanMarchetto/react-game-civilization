const router = require("express").Router();
let Game = require("../models/games.model");

router.route("/").get((req, res) => {
  Game.find()
    .then(games => res.json(games))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const creator = req.body.creator;
  const players = req.body.players;

  const newGame = new Game({
    creator,
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

router.route("/:id").delete((req, res) => {
  Game.findByIdAndDelete(req.params.id)
    .then(() => res.json("Game deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Game.findById(req.params.id)
    .then(game => {
      game.type = req.body.type;
      game.level = Number(req.body.level);
      game.owner = req.body.owner;
      game.game = req.body.game;
      game
        .save()
        .then(() => res.json("Game updated."))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
