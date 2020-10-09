//初始化数据
const state = {
    //商品列表
    shop_list: [{
        id: 11,
        name: '留住好时光+月饼礼盒-手提花篮+月饼礼盒',
        price: 299,
        img:'/static/img/1.jpg'
      }],

      //添加到购物车的商品（已选商品）
      added:[]
};

//getter 抛出去的数据
const getters = {
    //商品列表
    shoplist:state => state.shop_list
};

//action 异步的操作
const actions = {};

//mutation
const mutations = {};

export default {
  state,
  mutations,
  actions,
  getters,
};