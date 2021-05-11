var book = document.querySelector('.book')
var items = book.getElementsByTagName('div')
var main = document.querySelector('.main')
var music = document.querySelector('.music')

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
  book.style.transform = 'translateX(160px)';
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
})

var timer = setTimeout(() => {
  open()
}, 1000)