// <editor-fold> desc="Require Functions"
const bodyparser = require('body-parser');
const cors = require('cors');
const express =  require( 'express');
const methodOverride =  require( 'method-override');
const morgan =  require( 'morgan');
const helmet =  require( 'helmet');
const Routes =  require('../Route/Main');
// </editor-fold>

class Server {
	
	constructor() {
		this.routesAll = new Routes();
		this.app = express();
		this.config();
		this.routesAll.routes(this.app);
	}

	config () {
		this.app.use(cors());
		this.app.use(helmet());
		this.app.use(morgan('[:date[iso]] :method :url :status - :response-time ms'));
		this.app.use(bodyparser.urlencoded({ extended: true }));
		this.app.use(bodyparser.json({ limit: '50mb' }));
		this.app.use(bodyparser.json({ type: 'application/vnd.api+json' }));
		this.app.use(methodOverride('X-HTTP-Method-Override'));
		this.app.use((_req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
			res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length');
			res.setHeader('Access-Control-Allow-Credentials', 'true');
			next();
		});
		this.app.use((err, _req, res, next) => {
			res.status(err.status || 500).json({
				code: 0,
				msg: 'Success',
			});
			next(err);
		});
	}

	async start () {
		return new Promise(resolve => {
			this.app.listen(process.env.PORT || process.env.SERVER_PORT, () => {
				console.info(`[EXPRESS] ${process.env.SERVER_PORT}`);
				resolve();
			});
		});
	}
}

module.exports = Server;
