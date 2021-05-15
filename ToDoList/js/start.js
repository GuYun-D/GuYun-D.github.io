var book = document.querySelector('.book')
var items = book.getElementsByTagName('div')
var main = document.querySelector('.main')
var music = document.querySelector('.music')
var musicIcon = document.querySelector('.icon-vynil')
var switchBtn = document.querySelector('#switch')



var musicSetting = JSON.parse(window.localStorage.getItem('SETTIMGS')) || []


book.addEventListener('mouseenter', open)

function startRotate(item) {
  item.style.transform = 'rotateY(-180deg)'
  item.style.transition = 'calc(var(--s)*0.4s)'
}

function open() {
  startRotate(items[1])
  items[0].style.borderLeft = '#576574 20px solid'
  startRotate(items[2])
  startRotate(items[3])
  items[1].style.borderLeft = '0'
  startRotate(items[4])
  book.style.transform = 'translateX(200px)';
  items[0].style.cursor = 'pointer'
}

items[0].addEventListener("click", function () {
  book.style.transition = 'all 0s'
  book.style.opacity = '0'
  main.style.opacity = '1'
  document.body.style.background = '#fff'
  document.body.style.display = 'block'
  clearTimeout(timer)
  main.style.zIndex = '1000000'
  music.style.display = 'none'
  if (musicSetting.length === 0) {
    return;
  } else if (musicSetting[2].status) {
    musicIcon.click()
  }
})

var timer = setTimeout(() => {
  open()
}, 1000)

// window.addEventListener('contextmenu', function(e){
//   e.preventDefault()
// })
