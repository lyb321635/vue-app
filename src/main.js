//这是入口文件
import Vue from 'vue'

//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 导入app根组件
import app from './app.vue'

//导入mui样式
import './lib/css/mui.min.css'

//将mint-ui注入到vue
Vue.use(MintUI)







let vm=new Vue({
    el:'#app',
    render:c=>c(app)
})