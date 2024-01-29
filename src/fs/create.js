import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../utils/getDirname';

const create = async () => {
    const folderPath = 'files';
    const filePath = path.join(getDirname(import.meta.url), folderPath, 'fresh.txt');
    const fileContent = 'I am fresh and young';

    try {
        await fs.writeFile(filePath, fileContent, { flag: "wx" });
        console.log('File created successfully: fresh.txt');
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();