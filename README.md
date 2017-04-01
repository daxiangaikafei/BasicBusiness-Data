# 说明

>  数据助手vue2 + webpack 单页应用项目框架。

>  页面目录：/src/pages,用于存放多级页面。

>  路由目录：/src/router,用于存放路由信息。

>  mock服务目录：/mock,用于dev环境，与真实后端服务联调前本地开发，其中存放***.json数据为后台接口wiki中提供的正确格式。

>  组件目录： /src/components/,分基础组件和业务组件，待完善。

>  样式目录：/src/style,用于存放公用style以及font。

>  图片目录；/src/images/，用于存放页面使用的图片资源，目录结构同pages。

>  插件目录：/src/plugins/，用于存放业务需要使用的第三方插件，后期考虑会将第三方插件改写成基础组件的形式。


## 项目运行（nodejs 6.0+）
``` bash
# 安装依赖
npm install

# 开启本地服务器localhost:8088
npm run dev

# 发布环境
npm run build
```

## 路由配置
```js
import App from '../App'

const trhome = r => require.ensure([], () => r(require('../pages/trhome/trhome')), 'trhome')
const assist = r => require.ensure([], () => r(require('../pages/trhome/assist')), 'assist')
const cloud = r => require.ensure([], () => r(require('../pages/trhome/children/cloud')), 'cloud')
const upgradeIndex = r => require.ensure([], () => r(require('../pages/credit/children/credit_index')), 'cloud')


// const cloud = r => require.ensure([], () => r(require('../page/trhome/children/cloud')), 'cloud')

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../pages/home')), 'home')
    }, {
        path: '/credit',
        component: r => require.ensure([], () => r(require('../pages/credit')), 'credit')
    },{
        path: '/assist',
        component: assist
    },{
        path: '/trhome/cloud:cloudId',//三级甚至更下级目录，参数前不能再加/
        component: cloud
    },{
        path: '/credit/upgradeIndex',//三级甚至更下级目录，参数前不能再加/
        component: upgradeIndex
    },{
    	path: '/trhome/:userId', //二级目录下接参数要接在/后面，三级目录下不需要再接/
    	component: trhome,
    	// children: [{ //no effect, need to think again
    	// 	path: 'cloud',
    	// 	component: cloud,
    	// }]
    },{
    	path: '/upgrade',
    	component: r => require.ensure([], () => r(require('../pages/upgradeIndex')), 'upgrade')
    }]
}]

```,

## 创建vue实例
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
// import './style/common'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router
}).$mount('#app')
```


