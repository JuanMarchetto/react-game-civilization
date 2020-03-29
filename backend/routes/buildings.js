const router = require("express").Router();
let Building = require("../models/buildings.model");

router.route("/").get((req, res) => {
  Building.find()
    .then(buildings => res.json(buildings))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const type = req.body.type;
  const level = Number(req.body.level);
  const owner = req.body.owner;
  const game = req.body.game;

  const newBuilding = new Building({
    type,
    level,
    owner,
    game
  });

  newBuilding
    .save()
    .then(() => res.json("Building added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Building.findById(req.params.id)
    .then(building => res.json(building))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Building.findById(req.params.id)
    .then(building => {
      building.type = req.body.type;
      building.level = Number(req.body.level);
      building.owner = req.body.owner;
      building.game = req.body.game;
      building
        .save()
        .then(() => res.json("Building updated."))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
