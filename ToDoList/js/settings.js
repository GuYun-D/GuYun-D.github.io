var music = document.querySelector('.music')
var switchBtn = document.querySelector('#switch')
var musicStatus = true
var musicEl = document.querySelector('#music')

start()
musicStart()

music.addEventListener('click', function () {
  musicStart()
  start()
})


function musicStart() {
  if (musicStatus === true) {
    switchBtn.style.left = '50px'
    switchBtn.style.backgroundColor = '#ccc'
    switchBtn.innerHTML = '关'
    music.style.backgroundColor = '#576574'
    musicStatus = false
  } else {
    switchBtn.style.left = '0'
    switchBtn.style.backgroundColor = '#f40'
    switchBtn.innerHTML = '开'
    music.style.backgroundColor = 'yellow'
    musicStatus = true
  }
}

function start() {
  if (musicStatus === true) {
    musicEl.play()
    console.log(musicStatus);
  } else {
    musicEl.pause()
    console.log(musicStatus);
  }
}