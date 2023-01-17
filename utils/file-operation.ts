import fsExtra from 'fs-extra';
import fs from 'fs';

export const createDir = (path: any) => {

  if (!fs.existsSync(path)) {

    fs.mkdirSync(path, { recursive: true });

  }

};

export const removeFile = (path: any) => {

  fs.unlinkSync(path);

};
export const removeFolder = (path: any) => fsExtra.remove(path);

export const moveFile = (oldPath: any, newPath: any) => fsExtra.move(oldPath, newPath);
