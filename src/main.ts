import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'




import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import SvgIcon from 'vue-svgicon'
import '@/styles/element-variables.scss'
import '@/styles/index.scss'
import { AppModule } from '@/store/modules/app'
import i18n from '@/lang'


Vue.use(ElementUI,{
  size:AppModule.size, // 通过store的app模块定义宽度
  i18n: (key: string, value: string) => i18n.t(key, value) // 引入国际化插件 多语言
})

Vue.use(SvgIcon,{
  tagName:'svg-icon', // 标签名
  defaultWidth:"1em", // 宽
  defaultHeight:"1em" // 高

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
