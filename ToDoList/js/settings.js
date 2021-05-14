var ul = document.getElementsByTagName('ul')[0]
var liList = ul.getElementsByTagName('li')
var showImg = document.getElementById('show-img')
var clearCache = document.getElementById('clearCache')
var btn = document.getElementById('btn')
var mydata = []
var myhistory = []
var settings = []
var isTrue = []
var imgSrc = ''
var index = ''



var imgArr = [
  '../images/history.png',
  '../images/detail.png',
  '../images/music.png'
]


var statusArr = [
  {
    name: 'historyStatus',
    status: false
  },
  {
    name: 'detailStatu',
    status: false
  },
  {
    name: 'musicStatu',
    status: false
  }
]

startSetting()


liList[0].children[1].addEventListener('click', function () {
  settings[0].status = !settings[0].status;
  storageData()
  if (settings[0].status === true) {
    this.style.backgroundColor = 'tomato'
    this.style.alignItems = 'flex-end';
  } else {
    this.style.backgroundColor = '#ccc'
    this.style.alignItems = '';
    showImg.src = imgArr[0]
  }
})

liList[1].children[1].addEventListener('click', function () {
  settings[1].status = !settings[1].status
  storageData()
  if (settings[1].status === true) {
    this.style.backgroundColor = 'tomato'
    this.style.alignItems = 'flex-end';
  } else {
    this.style.backgroundColor = '#ccc'
    this.style.alignItems = '';
    showImg.src = imgArr[1]
  }
})

liList[2].children[1].addEventListener('click', function () {
  settings[2].status = !settings[2].status
  storageData()
  if (settings[2].status === true) {
    this.style.backgroundColor = 'tomato'
    this.style.alignItems = 'flex-end';
    alert("由于浏览器的原因，需要点击添加todo后才可以自动播放音乐")
  } else {
    this.style.backgroundColor = '#ccc'
    this.style.alignItems = '';
    showImg.src = imgArr[2]
  }
})

showImg.src = '../images/todo.png'

for (var i = 0; i < 3; i++) {
  imgSrc = ''
  index = ''
  liList[i].setAttribute('data-index', i)

  liList[i].addEventListener('mouseenter', function () {
    for (var j = 0; j < 3; j++) {
      liList[j].style.backgroundColor = ''
    }
    this.style.backgroundColor = '#CDE3F1'
    index = this.getAttribute('data-index')
    showImg.src = imgArr[index]
    /**
     * 使用闭包优化
     */
  })
}



liList[i].addEventListener('mouseleave', function () {
  for (var j = 0; j < 3; j++) {
    liList[j].style.backgroundColor = ''
  }
  showImg.src = '../images/todo.png'
})

clearCache.addEventListener('click', function () {
  window.localStorage.removeItem('MYDATA')
  window.localStorage.removeItem('MYHISTORY')
  this.style.backgroundColor = '#666'
  this.disabled = true
  this.innerHTML = "已清除"
})

function storageData() {
  window.localStorage.setItem('SETTIMGS', JSON.stringify(settings))
}

function startSetting() {
  mydata = JSON.parse(window.localStorage.getItem('MYDATA')) || []
  myhistory = JSON.parse(window.localStorage.getItem('MYHISTORY')) || []
  settings = JSON.parse(window.localStorage.getItem('SETTIMGS')) || []

  console.log(settings);

  if (mydata.length === 0 || myhistory.length === 0) {
    clearCache.style.backgroundColor = '#666'
    clearCache.disabled = true
    clearCache.innerHTML = "无缓存"
  }

  for (var i = 0; i < settings.length; i++) {
    if (settings[i].status === true) {
      liList[i].children[1].style.backgroundColor = 'tomato';
      liList[i].children[1].style.alignItems = 'flex-end';
      isTrue.push(i)
    }
  }

  console.log(isTrue);

}



