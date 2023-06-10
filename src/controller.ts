import { Request, Response } from 'express';
import { DataRepo } from './repository';
import createDebug from 'debug';
const debug = createDebug('W6:DataController');

export class DataController {
  repo: DataRepo;
  constructor() {
    this.repo = new DataRepo();
    debug('Instantiated DataController');
    debug(this.repo);
  }

  async getAll(request: Request, response: Response) {
    response.send(await this.repo.readAll());
  }

  getById(request: Request, response: Response) {
    response.send('GetById' + request.params.id);
  }
}
