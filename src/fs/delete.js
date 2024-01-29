import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../utils/getDirname';

const filePath = path.join(getDirname(import.meta.url), 'files', 'fileToRemove.txt');
const remove = async () => {
    try {
        await fs.rm(filePath);
        console.log('Successfully deleted');
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();