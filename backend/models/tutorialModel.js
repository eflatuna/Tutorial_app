"use strict";
const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			required: true,
		},
		description: {
			type: String,
			trim: true,
			required: true,
		},
	},
	{
		collection: "tutorial",
		timestamps: false,
	}
);

tutorialSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (doc, ret) {
		delete ret._id;
	},
});
// tutorialSchema.set("toJSON", {
//   transform: function (doc, ret, options) {
//     ret.id = ret._id;
//     delete ret._id;
//     delete ret.__v;
//   },
// });
const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;
