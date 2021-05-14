var music = document.querySelector('.music')
var switchBtn = document.querySelector('#switch')
var musicStatus = false
var musicEl = document.querySelector('#music')
var musicIcon = document.querySelector('.icon-vynil')
var musicSetting = JSON.parse(window.localStorage.getItem('SETTIMGS')) || []


start()
changeStyle()

music.addEventListener('click', function () {
  musicStart()
  start()
  changeStyle()
})

musicIcon.addEventListener('click', function () {
  musicStatus = !musicStatus
  start()
  if (musicStatus === false) {
    musicIcon.id = ''
    musicIcon.title = "点击开启音乐"
  } else {
    musicIcon.id = 'musicAnimation'
    musicIcon.title = "点击关闭音乐"
  }
})

if (musicSetting.length === 0) {
  
} else if (musicSetting[2].status === true) {
  switchBtn.style.backgroundColor = '#f40'
  switchBtn.innerHTML = '开'
  music.style.backgroundColor = 'yellow'
  switchBtn.style.left = '50px'
}

function musicStart() {
  if (musicStatus === false) {
    switchBtn.style.left = '50px'
    musicStatus = true
    musicIcon.id = 'musicAnimation'
    musicIcon.title = "点击关闭音乐"
  } else {
    switchBtn.style.left = '0'
    musicStatus = false
    musicIcon.id = ''
    musicIcon.title = "点击开启音乐"
  }
}

function start() {
  if (musicStatus === true) {
    musicEl.play()
    console.log(musicStatus);
  } else if (musicStatus === false) {
    musicEl.pause()
  }
}

function changeStyle() {
  if (musicStatus === false) {
    switchBtn.style.backgroundColor = '#ccc'
    switchBtn.innerHTML = '关'
    music.style.backgroundColor = '#576574'
  } else {
    switchBtn.style.backgroundColor = '#f40'
    switchBtn.innerHTML = '开'
    music.style.backgroundColor = 'yellow'
  }
}