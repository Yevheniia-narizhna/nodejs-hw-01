import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
  const file = JSON.parse(data);
  return file;
};

readContacts().catch((error) => console.error(error));
