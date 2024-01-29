import fs from 'fs/promises';
import path from 'path';
import { getDirname } from '../utils/getDirname';

const sourcePath = path.join(getDirname(import.meta.url), 'files');
const targetPath = path.join(getDirname(import.meta.url), 'files_copy');
const copy = async () => {
    try {
        await fs.cp(sourcePath, targetPath, { recursive: true, force: false, errorOnExist: true });
        console.log('Folder copied successfully');
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
