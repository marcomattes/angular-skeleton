module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {node: '10'}
          }
        ]
      ],
      plugins: ['require-context-hook']
    }
  }
};
