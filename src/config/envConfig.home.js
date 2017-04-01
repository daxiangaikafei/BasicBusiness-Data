var _defaultApi = {
    debug: {
        promotion: '/mock/promotion_list.json'
    },
    product: {
        promotion: '/.../promotion_list.do?'
    }
}
module.exports = {
    getApi: function(env,name){
        var type = env == 'product' ? env : 'debug'
        return _defaultApi[type][name]
    }
}