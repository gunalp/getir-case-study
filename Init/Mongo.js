const mongoose = require('mongoose');

class Mongo {
	static async initialize() {

		return new Promise((resolve, reject) => {
			mongoose.connect(process.env.MONGO_URL, {
				useCreateIndex: true,
				useFindAndModify: false,
				useNewUrlParser: true
			})
				.then(() => {
					console.info('[MONGO] Successfully connected to the database');
					resolve();
				})
				.catch(err => {
					console.error(`[MONGO] Could not connect to the database. Exiting now... ${err}`);
					reject(err);
				});
		});

	}
}

module.exports = Mongo;

