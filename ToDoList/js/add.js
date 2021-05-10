var addArr = []
var historyArr = []
var newHistory = []
var headerAddinp = document.querySelector('#headerAddinp')
var headerAdd = document.querySelector('#headerAdd')
var myTime = document.querySelector('#time')
var myContent = document.querySelector('#content')
var myTitle = document.querySelector('#detail-title')
var myBtn = document.querySelector('#detail-btn')
var listWrapper = document.querySelector('.list-wrapper')
var total = document.querySelector('#total')
var done = document.querySelector('#done')
var clearDone = document.querySelector('#clearDone')
var clear = document.querySelector('#clear')
var addPage = document.querySelector('.addPage')
var listPage = document.querySelector('.listPage')
var noList = document.querySelector('#no-list')
var sentence = document.querySelector('.sentence')
var tools = document.querySelector('.tools')
var listLis = listWrapper.getElementsByTagName('li')
var historyTotal = document.querySelector('.history_total')
var noneHistory = document.querySelector('.none-history')
var clearCache = document.querySelector('#clear-cache')


let createIndex = 0

const sentences = [
  '不管梦想有多远，走了多少弯路，总有一天，我们还是会回到，那个最初的地方',
  '不良的习惯会随时阻碍你走向成名、获利和享乐的路上去',
  '生活的全部意义在于无穷地探索尚未知道的东西，在于不断地增加更多的知识',
  '现在我知道，从劳动中结出的硕果，是最甜美的果实。天才可能承担伟大的工作，但必须靠辛勤的劳动才能完成'
]

let sentenceIndex = 0
startRender()


// 用户输入的数据
var value = ''
var content = ''

headerAdd.addEventListener('click', function () {
  if (headerAddinp.value.trim()) {
    value = headerAddinp.value
    const todoItem = {
      id: Date.now(),
      todoTitle: value,
      detailContent: '',
      isDone: false,
      addTime: adTime()
    }
    addArr.unshift(todoItem)
    historyArr.unshift(todoItem)
    storageData(addArr)
    listWrapper.append(createList(todoItem.todoTitle, todoItem.isDone))
    statistics(addArr)
    changeFlex()
    tools.style.display = 'block'
    clearHistory()
    historyRender(addArr)
    noneHistory.style.display = 'none'
    clearHistory()
    historyRender(historyArr)
  } else {
    alert('请输入合法内容')
  }
  headerAddinp.value = ''
  value = ''
})

myBtn.addEventListener('click', function () {
  if (myContent.value.trim() || myTime.value.trim() || myTitle.value.trim()) {
    value = myTitle.value
    content = myContent.value

    const todoItem = {
      id: Date.now(),
      todoTitle: myTitle.value,
      detailContent: myContent.value,
      isDone: false,
      addTime: myTime.value
    }
    addArr.unshift(todoItem)
    storageData(addArr)
    listWrapper.append(createList(todoItem.todoTitle, todoItem.isDone))
    statistics(addArr)
    changeFlex()
    tools.style.display = 'block'
    clearHistory()
    historyRender(addArr)
    myContent.value = ''
    myTime.value = ''
    myTime.value = ''
    noneHistory.style.display = 'none'
    historyArr.unshift(todoItem)
    clearHistory()
    historyRender(historyArr)

  } else {
    alert('请输入完整信息')
  }
})

clear.addEventListener('click', function () {
  window.localStorage.removeItem('MYDATA')
  isClear = true
  var nodeLength = listWrapper.children.length
  if (nodeLength !== 0) {
    while (listWrapper.children.length != 0) {
      listWrapper.removeChild(listWrapper.children[0])
    }
  }
  statistics()
  changeFlex('clear')
  tools.style.display = 'none'
})

clearCache.addEventListener('click', function(){
  window.localStorage.removeItem('MYHISTORY')
  clearHistory()
  noneHistory.style.display = 'block'
  historyArr = []
})

clearDone.addEventListener('click', function () {

  createIndex = 0

  var doneArr = addArr.filter(function (item) {
    return item.isDone === !true
  })

  addArr = doneArr
  storageData(addArr)

  var nodeLength = listWrapper.children.length
  if (nodeLength !== 0) {
    while (listWrapper.children.length != 0) {
      listWrapper.removeChild(listWrapper.children[0])
    }
  }
  startRender()
  clearHistory()
  historyRender(historyArr)
  statistics(addArr)
})


function adTime() {
  let time = new Date()
  year = time.getFullYear() + ''
  month = time.getMonth() * 1 + 1 + ''
  date = time.getDate() + ''
  hours = time.getHours() + ''
  minutes = time.getMinutes() + ''
  seconds = time.getSeconds() + ''
  let formatTime = year + '-' + this.addZero(month) + '-' + this.addZero(date) + " " + this.addZero(hours) + ':' + this.addZero(minutes) + ':' + this.addZero(seconds);
  return formatTime;
}

function addZero(time, ifMilli) {
  if (ifMilli) {
    if (time.length == 1) {
      return '00' + time
    } else if (time.length == 2) {
      return '0' + time
    } else if (time.length == 3) {
      return time
    }
  } else {
    if (time.length == 1) {
      return '0' + time
    } else if (time.length == 2) {
      return time
    }
  }
}

function storageData(newArr) {
  window.localStorage.setItem('MYDATA', JSON.stringify(newArr))
  window.localStorage.setItem('MYHISTORY', JSON.stringify(historyArr))
}


function createList(title, done) {
  var itemList = document.createElement('div')
  itemList.setAttribute('class', 'item-list')
  itemList.innerHTML = `
  <div class="top clearfix">
    <i class="iconfont icon-todo left"></i>
    <span class="left">${title}</span>
    <button class="right look">查看详情</button>
  </div>
  `
  var i = itemList.getElementsByTagName('i')[0]
  if (done === true) {
    i.style.color = '#7CB342'
  } else if (done === false) {
    i.style.color = "#ccc"
  }
  i.setAttribute('data-index', createIndex)
  i.onclick = function () {
    let index = this.getAttribute('data-index')
    addArr[index].isDone = !addArr[index].isDone
    if (addArr[index].isDone === true) {
      this.style.color = '#7CB342'
    } else {
      this.style.color = "#ccc"
    }
    storageData(addArr)
    statistics(addArr)
  }
  createIndex++
  return itemList
}


function startRender() {
  var data = JSON.parse(window.localStorage.getItem('MYDATA')) || []
  newHistory = JSON.parse(window.localStorage.getItem('MYHISTORY')) || []
  addArr = data
  historyArr = newHistory
  for (var i = 0; i < data.length; i++) {
    listWrapper.append(createList(data[i].todoTitle, data[i].isDone))
  }
  statistics(data)
  startList(data)
  historyRender(historyArr)
}

function statistics(data) {
  let count = 0
  var dataLength = 0

  if (data) {
    dataLength = data.length
    data.forEach(item => {
      if (item.isDone) {
        count++
      }
    });
  }
  total.innerHTML = '总共 ' + dataLength + ' 项'
  done.innerHTML = "已完成 " + count + " 项"
}

function changeFlex(params) {
  if (params === 'clear') {
    addPage.style.flex = '2'
    listPage.style.flex = '1'
    noList.style.display = 'block'

    if (sentenceIndex === 4) {
      sentenceIndex = 0
    }
    sentence.innerHTML = sentences[sentenceIndex]
    sentenceIndex++
  } else {
    addPage.style.flex = '1'
    listPage.style.flex = '2'
    noList.style.display = 'none'
  }
}

function startList(data) {
  if (data.length === 0) {
    changeFlex('clear')
    tools.style.display = 'none'
  }
}

function historyRender(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      historyTotal.append(createHistoryList(data[i]))
    }
    noneHistory.style.display = 'none'
  } else {
    noneHistory.style.display = 'block'
  }
}

function createHistoryList(data) {
  var historyItem = document.createElement('div')
  historyItem.setAttribute('class', 'history-item')
  historyItem.innerHTML = `
    <div class="history-time" >${data.addTime}</div>
    <ul class="history-ul">
      <li class="history-item-li">${data.todoTitle}</li>
    </ul>
  `
  return historyItem
}

function clearHistory() {
  var nodeLength = historyTotal.children.length
  if (nodeLength !== 0) {
    while (historyTotal.children.length != 0) {
      historyTotal.removeChild(historyTotal.children[0])
    }
  }
}

