module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-devtools': ctx.env === 'development' ? {} : false,
    'postcss-import': {},
    'postcss-normalize': { browsers: 'last 2 versions', forceImport: true },
    'postcss-preset-env': { stage: 0 },
    'stylelint': ctx.env === 'development' ? {} : false,
    'postcss-reporter': ctx.env === 'development' ? { clearMessages: true } : false,
    'cssnano': ctx.env === 'production' ? {} : false
  }
})
