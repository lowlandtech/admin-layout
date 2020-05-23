module.exports = {
  name: 'aside',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/aside',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
