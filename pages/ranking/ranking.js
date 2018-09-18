// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productArr:[],
    showDel:false,
    canDel:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    if (wx.getStorageSync('productArr')){
      that.setData({
        productArr: wx.getStorageSync('productArr')
      })
    }
  },
  edit: function () {
    var that = this
    that.setData({
      showDel: !that.data.showDel
    })
  },
  del: function (e){
    var that = this
    if (that.data.canDel){
      wx.showToast({
        icon: 'loading',
        duration: 100
      })
      that.setData({
        canDel: false
      })
      setTimeout(function () {
        var productArr = wx.getStorageSync('productArr'),
          Index = e.currentTarget.dataset.index
        productArr.splice(Index,1)
        that.setData({
          productArr: productArr,
          canDel: true
        })
        wx.setStorageSync('productArr', productArr)
      },100)
    }
  },
  toIndex: function () {
    wx.redirectTo({
      url: '../index/index'
    })
  },
  toinstruction: function () {
    wx.redirectTo({
      url: '../instruction/instruction'
    })
  }
})