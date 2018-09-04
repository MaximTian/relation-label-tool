import React from 'react'
import produce from 'immer'
import { hot } from 'react-hot-loader'
import './index.css'
import Pager from './Pager'
import { EMPTY_PAIR } from './constants'
import BasicFrame from './BasicFrame'
import { clamp } from './utils'
import { toastIt } from './toast'

function shallowCopy(object) {
  return Object.assign({}, object)
}

@hot(module)
export default class App extends React.Component {
  constructor(props) {
    super(props)
    let initUsername = 'dev'
    let startPage = 1
    if (process.env.NODE_ENV === 'production') {
      initUsername = prompt('请输入你的用户名')
      if (initUsername === 'tmx') {
        startPage = 100
      } else if (initUsername === 'sfc') {
        startPage = 200
      }
    }
    this.state = {
      itemList: [],
      author: initUsername,
      currentPageId: startPage,
      pageSize: 0,
    }
  }

  onPageChange = pageId => {
    const { pageSize } = this.state
    this.setState({ currentPageId: clamp(1, pageId, pageSize) })
    window.scrollTo(0, 0)
  }

  onAddPair = itemId => {
    const { itemList } = this.state
    const nextItemList = itemList.map(item => {
      if (item.id === itemId) {
        const item2 = shallowCopy(item)
        item2.pairs = item.pairs.concat([EMPTY_PAIR])
        return item2
      } else {
        return item
      }
    })
    this.setState({ itemList: nextItemList })
  }

  onDeletePair = (itemId, pairIndex) => {
    const { itemList } = this.state
    const nextItemList = itemList.map(item => {
      if (item.id === itemId) {
        const item2 = shallowCopy(item)
        item2.pairs = item.pairs.slice()
        item2.pairs.splice(pairIndex, 1)
        return item2
      } else {
        return item
      }
    })
    this.setState({ itemList: nextItemList })
  }

  onSetEntityOne = (itemId, pairIndex, s1, e1) => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.s1 = s1
      pair.e1 = e1
    })
    this.setState({ itemList: nextItemList })
  }

  onSetEntityTwo = (itemId, pairIndex, s2, e2) => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.s2 = s2
      pair.e2 = e2
    })
    this.setState({ itemList: nextItemList })
  }

  onSetRelation = (itemId, pairIndex, relations) => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.relations = relations
    })
    this.setState({ itemList: nextItemList })
  }

  onSetRelationType = (itemId, pairIndex, relationType) => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.relationType = relationType
    })
    this.setState({ itemList: nextItemList })
  }

  onAbandonClick = itemId => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      let item = draft.find(item => item.id === itemId)
      item.abandoned = !item.abandoned
    })
    this.setState({ itemList: nextItemList })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPageId !== prevState.currentPageId) {
      const offset = (this.state.currentPageId - 1) * 10
      const response = await fetch(`/get-data?offset=${offset}&limit=10`)
      if (response.ok) {
        const itemList = await response.json()
        this.setState({ itemList })
      }
    }
  }

  async componentDidMount() {
    const formerResponse = await fetch(`/get-data-count`)
    if (formerResponse.ok) {
      const count = await formerResponse.json()
      const pageSize = Math.ceil(count / 10)
      this.setState({ pageSize })
    }
    const response = await fetch(`/get-data?offset=0&limit=10`)
    if (response.ok) {
      const itemList = await response.json()
      this.setState({ itemList })
    }
    document.addEventListener('keypress', async event => {
      const pressedKey = event.key
      if (pressedKey === 'q') {
        this.onPageChange(this.state.currentPageId - 1)
      } else if (pressedKey === 'w') {
        this.onPageChange(this.state.currentPageId + 1)
      } else if (pressedKey === 'e') {
        this.handleSaveBtnClick(this.state.itemList)
      }
    })
  }

  async handleSaveBtnClick(itemList) {
    const { author } = this.state
    const response = await fetch('/save-data', {
      method: 'POST',
      body: JSON.stringify(itemList.map(item => Object.assign({}, item, { author }))),
      headers: {
        'content-type': 'application/json',
      },
    })
    if (!response.ok) {
      alert('更新失败')
    } else {
      toastIt('更新成功', 1000, { fontSize: '18px' })
    }
  }

  render() {
    // TODO avoid in-replace modification
    const { itemList } = this.state
    return (
      <div style={{ paddingTop: 50, paddingBottom: 40 }}>
        <Pager
          pageSize={this.state.pageSize}
          currentPageId={this.state.currentPageId}
          onPageChange={this.onPageChange}
        />
        {itemList.map(item => (
          <BasicFrame
            key={item.id}
            item={item}
            onAddPair={this.onAddPair}
            onDeletePair={this.onDeletePair}
            onSetEntityOne={this.onSetEntityOne}
            onSetEntityTwo={this.onSetEntityTwo}
            onSetRelation={this.onSetRelation}
            onSetRelationType={this.onSetRelationType}
            onAbandonClick={this.onAbandonClick}
          />
        ))}
        <div className="last">
          <button className="save-btn" onClick={() => this.handleSaveBtnClick(itemList)}>
            保存
          </button>
        </div>
      </div>
    )
  }
}
