module.exports = api => {
    api.cache(false)
    return {
      plugins: ['@babel/plugin-transform-arrow-functions'],
      presets: ["@babel/preset-env"]
    }
}