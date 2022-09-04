const path = require('path');
// const { pathsToModuleNameMapper } = require('ts-jest');
// const { compilerOptions } = require('./tsconfig.path.json');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@layouts': path.resolve(__dirname, 'src/app/layouts'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@locales': path.resolve(__dirname, 'src/locales'),
      '@env': path.resolve(__dirname, 'src/env'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@hooks': path.resolve(__dirname, 'src/app/hooks'),
      '@modules': path.resolve(__dirname, 'src/app/modules'),
      '@store': path.resolve(__dirname, 'src/app/store'),
    }
  },
  // jest: {
  //   configure: {
  //     preset: 'ts-jest',
  //     moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  //       prefix: '<rootDir>/src/',
  //     }),
  //   },
  // },
};