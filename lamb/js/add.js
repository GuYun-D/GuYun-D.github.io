var category = getId('category')
var categoryMenu = getId('categoryMenu')

var buttons = categoryMenu.children[0].getElementsByTagName('button')
 
category.addEventListener('click', function(){
  categoryMenu.style.display = 'flex'
})

for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function(){
    categoryMenu.style.display = 'none'
  })
}