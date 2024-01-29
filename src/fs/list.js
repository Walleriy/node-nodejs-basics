import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../utils/getDirname';

const dirPath = path.join(getDirname(import.meta.url), 'files');
const list = async () => {
    try {
        const filesList = await fs.readdir(dirPath);
        console.log(`Successfully created list: ${filesList}`);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();