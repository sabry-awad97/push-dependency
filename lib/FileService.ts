import fs from 'fs/promises';

class FileService {
  static readFromFile(filePath: string) {
    return fs.readFile(filePath, 'utf-8');
  }

  static writeToFile(filePath: string, fileContent: string) {
    return fs.writeFile(filePath, fileContent);
  }
}

export default FileService;
