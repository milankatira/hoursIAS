import path from 'path';
import { createDir, moveFile } from './file-operation';
export const movePdfToInUsersPdfFolder = async (
  resumeObj: { path: string; filename: any },
  userId: any,
) => {

  const existingAttachmentId = path.join(__dirname, '../../', resumeObj.path);
  const destinationRootFolder = path.join(
    __dirname,
    `../../static/users/${userId}/resume`,
  );

  // Check location folder is existing into the /static or not
  await createDir(destinationRootFolder);

  // Move this file from static/temp to /users/.. folder
  await moveFile(
    existingAttachmentId,
    `${destinationRootFolder}/${resumeObj.filename}`,
  );

};
