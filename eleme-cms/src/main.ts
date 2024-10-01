import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './stores'

const app = createApp(App)
/* // 1.全局注册element-plus: 方便和简洁
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus) */

/* //2.按需引入: 用到哪一个组件再引入
import { ElButton } from 'element-plus'
app.component(ElButton.name, ElButton) */

app.use(router)
app.use(pinia)
app.mount('#app')
