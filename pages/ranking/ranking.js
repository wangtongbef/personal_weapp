// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productArr:[],
    showDel:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      productArr: wx.getStorageSync('productArr')
    })
  },
  edit: function () {
    var that = this
    that.setData({
      showDel: !that.data.showDel
    })
  },
  del: function (e){
    var that = this
    console.log(e.currentTarget.dataset.index)
    var productArr = wx.getStorageSync('productArr'),
      Index = e.currentTarget.dataset.index
    productArr.splice(Index,1)
    that.setData({
      productArr: productArr
    })
    wx.setStorageSync('productArr', productArr)
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
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})