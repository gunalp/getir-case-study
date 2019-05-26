require('./config');

const Server = require('./Init/Server');
const Mongo = require('./Init/Mongo');

class App {
	static async initialize() {
		console.info('[GETIR CASE NETWORK APP] STARTING');
		const server = new Server();
		await server.start();
		await Mongo.initialize();
	}
}
App.initialize()
    .then(() => console.log('[GETIR CASE NETWORK APP] STARTED'))
    .catch(err => {
			console.error(err);
			process.exit();
		});
