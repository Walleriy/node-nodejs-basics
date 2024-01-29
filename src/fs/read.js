import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../utils/getDirname';

const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const content = await fs.readFile(filePath, { encoding: 'utf-8' });
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();