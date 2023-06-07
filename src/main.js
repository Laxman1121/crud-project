import { createPinia } from 'pinia'
import { createApp } from 'vue'
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from "../src/router/router.js"
import './style.css'
import urql, {createClient,cacheExchange, fetchExchange} from "@urql/vue"


const app = createApp(App)

app.use(urql,createClient(
    { url:"http://localhost:3001/graphql",
exchanges: [cacheExchange, fetchExchange],}
 ))

const pinia =createPinia()

app.use(pinia)
app.use(Quasar, {
    plugins: {},
})
app.use(router)
app.mount('#app')
