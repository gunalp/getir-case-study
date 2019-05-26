const RecordController = require('../Controllers/Record');

class Route {

  constructor() {
		this.apiv1 = '/api/v1';
    this.recordController = new RecordController();
  }

  routes(app) {
		app.all('/', (_req, res) => res.status(200)
			.send({
				code: 0,
				msg: 'success'
			}));

		app.post(`${this.apiv1}/list/records`, this.recordController.list);
  }

}

module.exports = Route;
