import { defineComponent } from 'vue'
import { fontColor } from '@styles/examples.module.css'
import '@styles/example.less'
import logo from './assets/vue.svg?url'
import logoRaw from './assets/vue.svg?raw'
import MyWorker from './utils/worker.js?worker'
import data from './assets/json/json.json'

const url = new URL('./assets/vue.svg', import.meta.url).href
const worker = new Worker(new URL('./utils/worker.js', import.meta.url))
// worker.onmessage = e => {
//     console.log(e.data)
// }
const myWOrker = new MyWorker()
myWOrker.onmessage = (e) => {
  console.log(e.data)
}
console.log(data)

const modules = import.meta.glob('./assets/glob/*')
Object.entries(modules).forEach(([k, v]) => {
  v().then((module) => {
    console.log(k, module.default)
  })
})
const modulesEager = import.meta.globEager('./assets/glob/*')
Object.entries(modulesEager).forEach(([k, v]) => {
  console.log(k, v.default)
})

console.log(import.meta.env)

const App = defineComponent({
  render() {
    console.log(logoRaw)
    return (
      <div class={`big-font ${fontColor} font-weight`}>
        <img src={url} />
        hello jsx
      </div>
    )
  }
})

export default App
