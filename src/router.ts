import { Router as createRouter } from 'express';
import { DataController } from './controller';

const controller = new DataController();
export const dataRouter = createRouter();

dataRouter.get('/', controller.getAll.bind(controller));
dataRouter.get('/:id', controller.getById.bind(controller));
