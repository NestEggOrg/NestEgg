module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    ['@babel/transform-runtime'],
    ['@babel/proposal-class-properties'],
    ['@babel/proposal-object-rest-spread'],
  ],
};
