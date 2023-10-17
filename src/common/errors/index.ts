import { CustomError } from './custom-error.js';

export class InvalidPathError extends CustomError {
  static name = 'invalid-path';

  static message = 'Invalid path error';

  constructor() {
    super(InvalidPathError.message);
    this.name = InvalidPathError.name;
  }
}

export class FileFeatureError extends CustomError {
  static name = 'file-feature';

  static message = 'General file feature error';

  constructor() {
    super(FileFeatureError.message);
    this.name = FileFeatureError.name;
  }
}

export class CustomMessageError extends CustomError {
  static name = 'custom-message';

  constructor(message: string) {
    super(message);
    this.name = FileFeatureError.name;
  }
}
