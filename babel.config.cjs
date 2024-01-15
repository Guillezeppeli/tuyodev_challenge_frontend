module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { pragma: 'h', pragmaFrag: 'Fragment' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
  ],
};