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

  async readById(id: string) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const subjectData = JSON.parse(stringData) as Subject[];
    return subjectData.find((item) => item.id === id);
  }

  async addSubject(subject: Subject) {
    const stringData = await fs.readFile(file, { encoding: 'utf-8' });
    const subjectData = JSON.parse(stringData) as Subject[];

    const newSubjectList = JSON.stringify([...subjectData, subject]);
    await fs.writeFile(file, newSubjectList, {
      encoding: 'utf-8',
    });
  }
}
