module.exports = {
  presets: [
    '@babel/preset-env', // For modern JavaScript
    ['@babel/preset-react', { runtime: 'automatic' }], // For JSX
    '@babel/preset-typescript'
  ],
};