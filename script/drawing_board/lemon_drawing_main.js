var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d');
var lineWidth = 5

autoSetCanvasSize(yyy)

listenToUser(yyy)


var eraserEnabled = false
pen.onclick = function () {
  eraserEnabled = false
  pen.classList.add('active')
  eraser.classList.remove('active')
}
eraser.onclick = function () {
  eraserEnabled = true
  eraser.classList.add('active')
  pen.classList.remove('active')
}
clear.onclick = function () {
  context.clearRect(0, 0, yyy.width, yyy.height);
}
download.onclick = function () {
  var url = yyy.toDataURL("image/png")
  var a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = '画'
  a.target = '_blank'

  // a.click()
}


// red.onclick = function () {
//   context.fillStyle = 'red'
//   context.strokeStyle = 'red'
//   red.classList.add('active')
//   green.classList.remove('active')
//   blue.classList.remove('active')
// }
// green.onclick = function () {
//   context.fillStyle = 'green'
//   context.strokeStyle = 'green'
//   red.classList.remove('active')
//   green.classList.add('active')
//   blue.classList.remove('active')
// }
// blue.onclick = function () {
//   context.fillStyle = 'blue'
//   context.strokeStyle = 'blue'
//   red.classList.remove('active')
//   green.classList.remove('active')
//   blue.classList.add('active')
// }
//
// thin.onclick = function () {
//   lineWidth = 1
// }
// thick.onclick = function () {
//   lineWidth = 5
// }

/******/

function autoSetCanvasSize(canvas) {
  setCanvasSize()

  window.onresize = function () {
    setCanvasSize()
  }

  function setCanvasSize() {
    // var pageWidth = document.documentElement.clientWidth
    // var pageHeight = document.documentElement.clientHeight
    var pageWidth = document.getElementById('xxx').clientWidth
    var pageHeight = document.getElementById('xxx').clientHeight

    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}

function drawCircle(x, y, radius) {
  context.beginPath()
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill()
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1) // 璧风偣
  context.lineWidth = lineWidth
  context.lineTo(x2, y2) // 缁堢偣
  context.stroke()
  context.closePath()
}

function listenToUser(canvas) {

  let left = $api.offset($api.byId('xxx')).l
  let top = $api.offset($api.byId('xxx')).t

  var using = false
  var lastPoint = {
    x: undefined,
    y: undefined
  }
  // 鐗规€ф娴�
  if (document.body.ontouchstart !== undefined) {
    // 瑙﹀睆璁惧 鑻忚彶灏辨槸涓Е灞忚澶囧晩鍝�
    canvas.ontouchstart = function (aaa) {
      var x = aaa.touches[0].clientX - left
      var y = aaa.touches[0].clientY - top
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        lastPoint = {
          "x": x,
          "y": y
        }
      }
    }
    canvas.ontouchmove = function (aaa) {
      // console.log('杈规懜杈瑰姩')
      var x = aaa.touches[0].clientX - left
      var y = aaa.touches[0].clientY - top

      if (!using) {
        return
      }

      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = {
          "x": x,
          "y": y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    canvas.ontouchend = function () {
      // console.log('鎽稿畬浜�')
      using = false
    }
  } else {
    // 闈炶Е灞忚澶�
    canvas.onmousedown = function (aaa) {
      var x = aaa.clientX - left
      var y = aaa.clientY - top
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        lastPoint = {
          "x": x,
          "y": y
        }
      }
    }
    canvas.onmousemove = function (aaa) {
      var x = aaa.clientX - left
      var y = aaa.clientY - top

      if (!using) {
        return
      }

      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 10, 10)
      } else {
        var newPoint = {
          "x": x,
          "y": y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }

    }
    canvas.onmouseup = function (aaa) {
      using = false
    }
  }

}
