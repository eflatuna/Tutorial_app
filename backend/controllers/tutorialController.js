"use strict";
const { CustomError } = require("../errors/customError");
//*Tutorial Controller

const Tutorial = require("../models/tutorialModel");

module.exports.TutorialController = {
	list: async (req, res) => {
		const data = await Tutorial.find();
		res.status(200).send(data);
	},
	create: async (req, res) => {
		const data = await Tutorial.create(req.body);

		res.status(201).send({
			error: false,
			tutorial: data,
		});
	},
	read: async (req, res) => {
		const data = await Tutorial.findOne({ _id: req.params.id });

		res.status(200).send({
			error: false,
			tutorial: data,
		});
	},
	update: async (req, res) => {
		const data = await Tutorial.updateOne({ _id: req.params.id }, req.body);
		res.status(202).send({
			error: false,
			tutorial: data,
			newData: await Tutorial.findOne({ _id: req.params.id }),
		});
	},

	delete: async (req, res) => {
		const data = await Tutorial.deleteOne({ _id: req.params.id });
		if (data.deletedCount) {
			res.sendStatus(204);
		} else {
			//   res.status(404).send({
			//     error: true,
			//     message: "Tutorial not found",
			//   });
			// res.statusCode = 404
			throw new CustomError("Tutorial not found", 404);
		}
	},
};
