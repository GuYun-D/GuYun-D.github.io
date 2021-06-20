var menu = getId('menu')
var aside = getId('aside')
var info = aside.children[0].children[0]
var asideBoolean = false

var foot = document.getElementsByTagName('footer')[0]

menu.addEventListener('click', function () {
  if (asideBoolean === false) {
    document.body.style.overflow = 'hidden'
    foot.style.display = 'none'
    this.style.right = '12.875rem'
    aside.style.width = '80%'
    info.style.display = 'flex'
    asideBoolean = true
  }else {
    foot.style.display = 'block'
    this.style.right = '.875rem'
    aside.style.width = '0'
    info.style.display = 'none'
    document.body.style.overflow = ''
    asideBoolean = false
  }

})