Page({
  data: {
    imgUrls: [
      '../../image/7.jpg',
      '../../image/4.jpg',
      '../../image/8.jpg'
    ],
    indicatorDots:true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    hotList:[
      {
        pic:"../../image/1.jpg",
        title:"春风十里不如你",
        area:"三亚hahhsh哈  哈哈大蝴蝶结款手机打开速度加快速度就开始觉得",
      
        avatar:"../../image/7.png",
        name:"电话咨询",
        fee:"￥3,000",

      },
      {
        pic:"http://www.lemontreevip.com/upload/201512/201512191450512739.jpg",
        title:"一场没有终点的旅行",
        area:"三亚",
     
        name:"电话咨询",
        fee:"￥4,000",
  
      },
      {
        pic:"../../image/5.jpg",
        title:"恋上彩虹的梦",
        area:"三亚",
       
        name:"电话咨询",
        fee:"￥3,500",
      
      },
      {
        pic:"../../image/6.png",
        title:"日暮三亚",
        area:"三亚",
       
        name:"电话咨询",
        fee:"￥2,500",
  
      },
      {
        pic:"http://www.lemontreevip.com/upload/201508/1438966134523121267000.jpg",

        name:"电话咨询",
        fee:"￥2,500",
      
      },
      {
        pic:"http://www.lemontreevip.com/upload/201603/201603181458295704.jpg",
        title:"西岛恋曲",
        area:"三亚",
     
        name:"电话咨询",
        fee:"￥1,800",

      }
    ],
  },
yuyue: function(e) {
  console.log(e.currentTarget.dataset);
  console.log(e.currentTarget.dataset.pic);
  console.log(e.currentTarget.dataset.name);
  wx.setStorage({
    key:"pic",
    data:e.currentTarget.dataset.pic
  });
  wx.setStorage({
    key:"title",
    data:e.currentTarget.dataset.title
  });
  wx.setStorage({
    key:"area",
    data:e.currentTarget.dataset.area
  });
  wx.setStorage({
    key:"day",
    data:e.currentTarget.dataset.day
  });
  wx.setStorage({
    key:"avatar",
    data:e.currentTarget.dataset.avatar
  });
  wx.setStorage({
    key:"name",
    data:e.currentTarget.dataset.name
  });
  wx.setStorage({
    key:"fee",
    data:e.currentTarget.dataset.fee
  });
  wx.setStorage({
    key:"experience",
    data:e.currentTarget.dataset.experience
  });
    wx.navigateTo({
      url: '../yuyue/yuyue'
    });

},
more: function(){
  wx.navigateTo({
    url:'../more/more'
  })
},
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
