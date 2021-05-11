var music = document.querySelector('.music')
var switchBtn = document.querySelector('#switch')
var musicStatus = false
var musicEl = document.querySelector('#music')

start()
changeStyle()

music.addEventListener('click', function () {
  musicStart()
  start()
  changeStyle()
})


function musicStart() {
  if (musicStatus === false) {
    switchBtn.style.left = '50px'
    musicStatus = true
  } else {
    switchBtn.style.left = '0'
    musicStatus = false
  }
}

function start() {
  if (musicStatus === true) {
    musicEl.play()
    console.log(musicStatus);
  } else if (musicStatus === false) {
    musicEl.pause()
    console.log(musicStatus);
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