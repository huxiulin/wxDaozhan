const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

/**'yyyy-MM-dd HH:mm:ss'格式的字符串 */

function getNowFormatDate(date) {
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var strHours = date.getHours();
  var strMinutes = date.getMinutes();
  var strSeconds = date.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (strHours >= 0 && strHours <= 9) {
    strHours = "0" + strHours;
  }
  if (strMinutes >= 0 && strMinutes <= 9) {
    strMinutes = "0" + strMinutes;
  }
  if (strSeconds >= 0 && strSeconds <= 9) {
    strSeconds = "0" + strSeconds;
  }

  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + strHours + seperator2 + strMinutes
    + seperator2 + strSeconds;
  return currentdate;
}
module.exports.getNowFormatDate = getNowFormatDate;

function imageUtil(e) {
  var imageSize = {};
  var originalWidth = e.detail.width;  //图片原始宽
  var originalHeight = e.detail.height;  //图片原始高
  var originalScale = originalHeight / originalWidth;  /**宽高比 */
  console.log('originalWidth: ' + originalWidth);
  console.log('originalHeight: ' + originalHeight);

  //获取屏幕宽高
  wx.getSystemInfo({
    success: function(res) {
      var windowWidth = res.windowWidth;
      var windowHeight = res.windowHeight;
      var windowscale = windowHeight / windowWidth; /**屏幕高宽比 */
      console.log('windowWidth: ' + windowWidth)
      console.log('windowHeight: ' + windowHeight)
      if (originalScale < windowscale) {//图片高宽比小于屏幕高宽比
        //图片缩放后的宽为屏幕宽
        imageSize.imageWidth = windowWidth;
        imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth;
      } else {//图片高宽比大于屏幕高宽比
        //图片缩放后的高为屏幕高
        imageSize.imageHeight = windowHeight;
        imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight;
      }
    },
  })
  console.log('缩放后的宽: ' + imageSize.imageWidth)
  console.log('缩放后的高: ' + imageSize.imageHeight)
  return imageSize;
}

module.exports.imageUtil = imageUtil;