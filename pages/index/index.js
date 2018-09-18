
Page({
  data: {
    name:'', //理财产品名称
    namebef:'',
    cycle: 0, //年化周期
    percent: 0, //收益率
    totalPersent: 0, //年化收益率
    singleearm: 0, //万份每日收益
    typeChecked: 1,
    productArr: [],
    submit :false
  },
  onLoad: function () {
    var that = this
    var productArr
    if (wx.getStorageSync('productArr')){
      productArr = wx.getStorageSync('productArr')
      that.setData({
        productArr: productArr
      })
    }
  },
  getname: function(e){
    var that = this
    that.setData({
      name: e.detail.value,
      namebef: e.detail.value,
      submit: true
    })
  },
  getCycle: function (e) {
    var that = this
    that.setData({
      cycle: e.detail.value,
      submit: true
    })
  },
  getPeresent: function (e) {
    var that = this
    that.setData({
      percent: e.detail.value,
      submit: true
    })
  },
  typeCheck: function(e){ //续期方式选择
    var that = this
    that.setData({
      typeChecked: e.currentTarget.dataset.type,
      submit: true
    })
  },
  confirm: function () {
    var that = this
    console.log(that.data.cycle, that.data.percent)
    if(that.data.submit){
      if (that.data.cycle !== 0 && that.data.percent !== 0){
        var id,
          productArr = that.data.productArr
        if (wx.getStorageSync('id')) {
          id = wx.getStorageSync('id') + 1
          if (that.data.name == '') {
            that.setData({
              name: '理财产品' + id,
              namebef: '理财产品' + id
            })
          }
        } else {
          id = 1
          if (that.data.name == '') {
            that.setData({
              name: '理财产品' + id,
              namebef: '理财产品' + id
            })
          }
        }
        if (that.data.typeChecked == 1) {
          var n = Math.floor(365 / that.data.cycle),
          m = 365 % that.data.cycle,
          oneCycle = that.data.percent * that.data.cycle / 36500, //单周期收益率
          totalcycle = Math.pow((1+oneCycle), n), //全周期收益率
          total = totalcycle * (that.data.percent * m / 36500 + 1) //全年收益率
          that.setData({
            totalPersent: (total * 100 - 100).toFixed(4),
            singleearm: (10000 * (total - 1) / 365).toFixed(4)
          })
          10000 * (total - 1) / 365
          //console.log(m, n, oneCycle, totalcycle, total)
        }else if (that.data.typeChecked == 2){
          var _singleearm
          _singleearm = 10000 * that.data.percent / 36500 //万份每日收益
          that.setData({
            totalPersent: that.data.percent,
            singleearm: _singleearm.toFixed(4)
          })
        }
        var productObj = {
          id:id,
          name: that.data.name,
          totalPersent: that.data.totalPersent
        }
        console.log(productObj)
        if (productArr.length == 0){
          productArr.push(productObj)
        }else {
          var n = productArr.length
          for (var i = 0; i < n; i++){//由大到小排序
            if (parseFloat(productObj.totalPersent) >= parseFloat(productArr[i].totalPersent)){
              productArr.splice(i, 0, productObj)
              break;
            }else{
              if(i == n-1){
                productArr.push(productObj)
              }
            }
          }
        }
        console.log(productArr)
        wx.setStorageSync('productArr', productArr)
        wx.setStorageSync('id',id)
        that.setData({
          submit: false,
          name: ''
        })
      }else{
        wx.showToast({
          title: '参数不能为空',
          icon: 'none',
          duration: 1000
        })
      }
    } else {
      wx.showToast({
        title: '参数不能为空',
        icon: 'none',
        duration: 1000
      })
    }
  },
  toranking: function(){
    wx.redirectTo({
      url: '../ranking/ranking'
    })
  },
  toinstruction: function(){
    wx.redirectTo({
      url: '../instruction/instruction'
    })
  }
})
