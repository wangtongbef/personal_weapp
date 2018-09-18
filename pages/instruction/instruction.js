// pages/instruction/instruction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  toIndex: function (){
    wx.redirectTo({
      url: '../index/index'
    })
  },
  toranking: function () {
    wx.redirectTo({
      url: '../ranking/ranking'
    })
  }
})