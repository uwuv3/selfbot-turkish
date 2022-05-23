const chalk = require("chalk");
module.exports = client => {
	process.on("unhandledRejection", (reason, p) => {
		console.log(
			chalk.red("[antiCrash]") +
				chalk.blackBright("::") +
				chalk.white("Unhandled Rejection/Catch")
		);
		console.log(reason, p);
	});
	process.on("uncaughtException", (err, origin) => {
		console.log(
			chalk.red("[antiCrash]") +
				chalk.blackBright("::") +
				chalk.white("Uncaught Exception/Catch")
		);
		console.log(err, origin);
	});
	process.on("uncaughtExceptionMonitor", (err, origin) => {
		console.log(
			chalk.red("[antiCrash]") +
				chalk.blackBright("::") +
				chalk.white("Uncaught Exception/Catch (MONITOR)")
		);
		console.log(err, origin);
	});
	process.on("multipleResolves", (type, promise, reason) => {
		console.log(
			chalk.red("[antiCrash]") +
				chalk.blackBright("::") +
				chalk.white("MultipleRelsoves")
		);
		console.log(type, promise, reason);
	});
	client.on("shardError", error => {
		console.log(
			chalk.red("[antiCrash]") +
				chalk.blackBright("::") +
				chalk.white("ShardError")
		);
		console.log(error)
	});
};
