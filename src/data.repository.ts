import fs from 'fs/promises';
import createDebug from 'debug';
const debug = createDebug('W6:SampleRepo');

type Subject = {
  id: string;
  name: string;
};

const file = './data.json';

export class DataRepo {
  constructor() {
    debug('Data Repo');
  }

  async readAll() {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    return JSON.parse(stringData) as Subject[];
  }
}
