import init from './math.wasm'
init().then((exports) => {
  exports.add(1 + 3)
})
