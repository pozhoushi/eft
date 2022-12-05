// index.ts
// 获取应用实例
Page({
  data: {
    merchants: [
      {
        name: "Prapor",
        questAmount: 39,
        avatar: "../../assets/merchants/avatars/Prapor_Portrait.png",
      },
      {
        name: "Therapist",
        questAmount: 39,
        avatar: "../../assets/merchants/avatars/Therapist_Portrait.png",
      },
      {
        name: "Fence",
        questAmount: 39,
        avatar: "../../assets/merchants/avatars/Fence_Portrait.png",
      },
      {
        name: "Skier",
        questAmount: 39,
        avatar: "../../assets/merchants/avatars/Skier_Portrait.png",
      },
      {
        name: "Peacekeeper",
        questAmount: 39,
        avatar: "../../assets/merchants/avatars/Peacekeeper_Portrait.png",
      },
      {
        name: "Mechanic",
        questAmount: 39,
        avatar: "../../assets/merchants/avatars/Mechanic_Portrait.png",
      },
      {
        name: "Ragman",
        questAmount: 39,
        avatar: "../../assets/merchants/avatars/Ragman_Portrait.png",
      },
      {
        name: "Jaeger",
        questAmount: 39,
        avatar: "../../assets/merchants/avatars/Jaeger_Portrait.png",
      },
    ],
  },
  onLoad() {},
  hop() {
    wx.navigateTo({
      url: `../prapor/index`,
    });
  },

});
