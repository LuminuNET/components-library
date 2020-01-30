module.exports = {
  css: { extract: false },
  configureWebpack: {
    node: {
      dns: 'mock',
      net: 'mock'
    }
  }
};
