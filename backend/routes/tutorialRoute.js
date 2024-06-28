"use strict";
const router = require("express").Router();

const { TutorialController } = require("../controllers/tutorialController");

router.route("/").get(TutorialController.list).post(TutorialController.create);

router
	.route("/:id")
	.get(TutorialController.read)
	.put(TutorialController.update)
	.delete(TutorialController.delete);

module.exports = router;
