const { compile } = require('nexe')

compile({
  input: './app.js',
  output: './app.exe',
  target: 'windows-x64-8.9.1',
  enableNodeCli: true,
  clean: true,
  /*patches: [
    async (compiler, next) => {
      await compiler.setFileContentsAsync(
        'lib/new-native-module.js',
        'module.exports = 42'
      )
      return next()
    }
  ]*/
}).then(() => {
  console.log('success')
})