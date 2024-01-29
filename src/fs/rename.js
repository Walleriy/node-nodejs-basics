import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../utils/getDirname';

const initFileName = path.join(getDirname(import.meta.url), 'files', 'wrongFileName.txt');
const targetFileName = path.join(getDirname(import.meta.url), 'files', 'properFilename.md');
const rename = async () => {
    try {
        await fs.rename(initFileName, targetFileName);
        console.log('Successfully renamed');
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();