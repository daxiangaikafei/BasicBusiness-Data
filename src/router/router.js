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