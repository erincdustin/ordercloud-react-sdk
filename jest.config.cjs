module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // If testing React components
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy', // If you use CSS modules
    },
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
  };
  