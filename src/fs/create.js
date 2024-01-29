import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../utils/getDirname';

const folderPath = 'files';
const fileName = 'fresh.txt';
const filePath = path.join(getDirname(import.meta.url), folderPath, fileName);
const fileContent = 'I am fresh and young';
const create = async () => {
    try {
        await fs.writeFile(filePath, fileContent, { flag: "wx" });
        console.log(`File created successfully: ${fileName}`);
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();