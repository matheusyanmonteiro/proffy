import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
const classesController = new ClassesController();

const routes = express.Router();

const connectionsController = new ConnectionsController()

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);



export default routes;
