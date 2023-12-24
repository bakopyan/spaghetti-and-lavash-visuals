import './app.css'
import App from './App.svelte'

const target = document.getElementById('app')

if (!target) {
  throw new Error("Couldn't find the elemnt with id 'app")
}
const app = new App({
  target,
})

export default app
