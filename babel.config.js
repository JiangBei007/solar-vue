module.exports = function(api) {
  const { BABEL_MODULE, NODE_ENV } = process.env
  const useESModules = BABEL_MODULE !== 'commonjs' && NODE_ENV !== 'test'
  api && api.cache(true)

  return {
    presets: [
      '@vue/app',
      [
        '@babel/preset-env',
        {
          loose: false,
          modules: useESModules ? false : 'commonjs'
        }
      ],
      [
        '@vue/babel-preset-jsx',
        {
          functional: false
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true,
          regenerator: false,
          useESModules
        }
      ],
      '@babel/plugin-transform-object-assign'
    ]
  }
}
