module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-devtools': ctx.env === 'development' ? {} : false,
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-custom-media': {},
    // 'postcss-color-function': {},
    // 'postcss-for': {},
    // 'postcss-calc': {},
    // 'postcss-mixins': {},
    // 'postcss-nested': {},
    // 'postcss-focus': {},
    // 'css-mqpacker': {},
    'postcss-reporter': ctx.env === 'development' ? { clearMessages: true } : false,
    'cssnano': ctx.env === 'production' ? {} : false
  }
})
