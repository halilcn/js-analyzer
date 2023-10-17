export class InvalidPathError extends Error {
  static name = 'invalid-path';

  static message = 'Invalid path error';

  constructor() {
    super(InvalidPathError.message);
    this.name = InvalidPathError.name;
  }
}

export class FileFeatureError extends Error {
  static name = 'file-feature';

  static message = 'General file feature error';

  constructor() {
    super(FileFeatureError.message);
    this.name = FileFeatureError.name;
  }
}
