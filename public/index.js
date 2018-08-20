const RELATION_TYPES = ['合作', '从属', '买买', '合并', '竞争']

let cachedDataList = null  // 当前数据
let user_name = null  // 当前用户

function chang_entity(selector) {
  const selection = document.getSelection()
  if (!selection.isCollapsed) {
    const range = selection.getRangeAt(0)
    const itemIndex = range.startContainer.parentElement.parentElement.dataset.itemIndex
    const item_pos = `[data-item-index="${itemIndex}"]`
    if (
      range.startContainer.parentElement == document.querySelector(item_pos + ' .sentence') &&
      range.endContainer.parentElement == document.querySelector(item_pos + ' .sentence')
    ) {
      const data = cachedDataList[Number(itemIndex)]
      const selectedText = data.sentence.substring(range.startOffset, range.endOffset)
      $(item_pos)
        .find(selector)
        .text(selectedText)
        .css('background', 'yellow')
    } else {
      console.log('selection error')
    }
  } else {
    console.log('selection error')
  }
}

// const entityOneContent = $('.one')
$(document).on('keypress', function(event) {
  if (event.key == 'q') {
    chang_entity('.one')
  } else if (event.key == 'w') {
    chang_entity('.two')
  }
})

function item_generator(data_list) {
  console.log(data_list)
  let i = 0
  const item_list = $('.item_list')
  for (const data of data_list) {
    const tmp_item = `
<div class="item" data-item-index=${i} data-item-id=${data.id}>
  <div class="index" >
      index ${data.id}
  </div>
  <div class="sentence">
      Sentence-Value
  </div>
  <div class="entity-buttons">
    <div class="entity-wrapper-one">
        <button class="set-one">Entity-One</button>            
        <div class="one">
            entity-one
        </div>
    </div>
    <div class="entity-wrapper-two">
        <button class="set-two">Entity-Two</button>            
        <div class="two">
            entity-two
        </div>
    </div>
    <button class="abandon-btn">丢弃</button>
  </div>
  <div class="relation-type">
      <label>
          <input type="checkbox">合作</label>
      <label>
          <input type="checkbox">从属</label>
      <label>
          <input type="checkbox">买卖</label>
      <label>
          <input type="checkbox">合并</label>
      <label>
          <input type="checkbox">竞争</label>
  </div>
</div>`
    item_list.append(tmp_item)

    const item = item_list.find(`[data-item-index="${i}"]`)
    item.find('.sentence').text(data.sentence)
    item.find('.one').text(data.entityOne || '[尚未设置]')
    item.find('.two').text(data.entityTwo || '[尚未设置]')
    item
      .find('.relation-type')
      .find('input')
      .toArray()
      .forEach(function(element, index) {
        element.checked = data.relations.includes(RELATION_TYPES[index])
      })

    item.find('.set-one').on('click', () => chang_entity('.one'))
    item.find('.set-two').on('click', () => chang_entity('.two'))
    item.find('.abandon-btn').on('click', function() {
      item.find('.sentence')
          .css('text-decoration', 'line-through')
    })
    i++
  }
}

function getCurrentData(item) {
  let label = item.find('.sentence').css('text-decoration') === 'line-through solid rgb(0, 0, 0)' ? -1 : 1
  const entityOne = item.find('.one').text()
  const entityTwo = item.find('.two').text()
  const itemId = Number(item.data('itemId'))
  const relations = item
    .find('.relation-type')
    .find('input')
    .toArray()
    .map(function(element, index) {
      return element.checked ? RELATION_TYPES[index] : null
    })
    .filter(Boolean)
  
  if (label == -1) {
    return {
      itemId,
      entityOne: null,
      entityTwo: null,
      relations,
      label
    }
  } else if (entityOne == '[尚未设置]' || entityTwo == '[尚未设置]' || relations.length == 0) {
    return null
  } else {
    return {
      itemId,
      entityOne,
      entityTwo,
      relations,
      label
    }
  }
}

const saveBtn = jQuery('.save-btn')
saveBtn.on('click', async function() {
  const dataList = $('.item_list .item')
    .map((index, item) => getCurrentData($(item)))
    .toArray()
    .filter(Boolean)
  const response = await fetch('/save-data', {
    method: 'POST',
    body: JSON.stringify(dataList),
    headers: {
      'content-type': 'application/json'
    }
  })
  if (!response.ok) {
    alert('更新失败')
  } else {
    $('.item_list').html("")
    const response = await fetch(`/get-data?offset=0&limit=4&usedname=${user_name}`)
    if (response.ok) {
      cachedDataList = null
      const dataList = await response.json()
      cachedDataList = dataList
      item_generator(dataList)
    }
  }
})

const resetBtn = jQuery('.reset-btn')
resetBtn.on('click', function() {
  $('.item_list .item').remove()
  item_generator(cachedDataList)
})

async function main() {
  setInterval(function() { fetch(`/heart-beat?username=${user_name}`) }, 1000);
  user_name = prompt("请输出用户名:")
  const response = await fetch(`/get-data?offset=0&limit=4&usedname=${user_name}`,{mode:'no-cors'})
  if (response.ok) {
    const dataList = await response.json()
    cachedDataList = dataList
    item_generator(dataList)
  }
}

main()
