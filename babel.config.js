module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        modules: false,
        corejs: 3
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-proposal-optional-chaining'
  ],
  env: {
    development: {
      plugins: [ 'react-refresh/babel' ]
    },
    test: {
      plugins: [ '@babel/plugin-transform-modules-commonjs' ]
    }
  }
};