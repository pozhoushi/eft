// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()

Component({
  properties: {
    // 这里定义了 innerText 属性，属性值可以在组件使用时指定
    questListData: {
      type: Object,
      value: {},
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})