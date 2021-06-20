var menu = getId('menu')
var aside = getId('aside')
var info = aside.children[0].children[0]
var asideBoolean = false

menu.addEventListener('click', function () {
  if (asideBoolean === false) {
    document.body.style.overflow = 'hidden'
    this.style.right = '12.875rem'
    aside.style.width = '80%'
    info.style.display = 'flex'
    asideBoolean = true
  }else {
    this.style.right = '.875rem'
    aside.style.width = '0'
    info.style.display = 'none'
    document.body.style.overflow = ''
    asideBoolean = false
  }

})