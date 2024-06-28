"use strict";
module.exports = (err, req, res, next) => {
	const statusCode = err.statusCode || res.statusCode || 500;
	res.status(statusCode).send({
		isError: true,
		message: err.message,
	});
};
