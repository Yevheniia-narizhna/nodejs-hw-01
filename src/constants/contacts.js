import path from 'node:path';
// import * as fs from 'node:fs/promises';

export const PATH_DB = path.resolve('src', 'db', 'db.json');

// async function readFile() {
//   const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
//   const file = JSON.parse(data);
//   return file;
// }
// readFile().catch((error) => console.error(error));
