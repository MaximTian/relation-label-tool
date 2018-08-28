import React from 'react'
import RelationItem from './RelationItem'

function findItemId(node) {
  if (node == null) {
    return -1
  }
  if (node.dataset && node.dataset.itemId != null) {
    return Number(node.dataset.itemId)
  } else {
    return findItemId(node.parentElement)
  }
}

function findItemOffset(node) {
  if (node == null) {
    return 0
  }
  if (node.dataset && node.dataset.offset != null) {
    return Number(node.dataset.offset)
  } else {
    return findItemOffset(node.parentElement)
  }
}

export default class Pair extends React.Component {
  onSetEntity = entityOrder => {
    const selection = document.getSelection()
    if (!selection.isCollapsed) {
      const range = selection.getRangeAt(0)
      const itemId = findItemId(range.startContainer)
      const startOffset = findItemOffset(range.startContainer) + range.startOffset
      const endOffset = findItemOffset(range.endContainer) + range.endOffset
      if (itemId !== this.props.itemId) {
        return
      }
      if (entityOrder === '1') {
        this.props.onSetEntityOne(itemId, this.props.pairIndex, startOffset, endOffset)
        selection.empty()
      } else {
        this.props.onSetEntityTwo(itemId, this.props.pairIndex, startOffset, endOffset)
        selection.empty()
      }
    } else {
      console.log('selection error')
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', async event => {
      const pressedKey = event.key
      if (pressedKey === 'a') {
        this.onSetEntity('1')
      } else if (pressedKey === 's') {
        this.onSetEntity('2')
      }
    })
  }

  onToggleRelation = relation => {
    let relations = this.props.pair.relations.slice()
    if (relations.includes(relation)) {
      const relationIndex = relations.indexOf(relation)
      relations.splice(relationIndex, 1)
    } else {
      relations.push(relation)
    }
    this.props.onSetRelation(this.props.itemId, this.props.pairIndex, relations)
  }

  render() {
    const { pair, itemId, pairIndex, sentence, onDeletePair } = this.props
    return (
      <div>
        <div className="entity-buttons">
          <div className="entity-wrapper-one">
            <button className="set-one" onClick={() => this.onSetEntity('1')}>
              Entity-One
            </button>
            <div
              className="one"
              style={{ background: pair.s1 + pair.e1 !== 0 ? '#66cc99' : 'none' }}
            >
              {sentence.substring(pair.s1, pair.e1) || '[尚未设置]'}
            </div>
          </div>
          <div className="entity-wrapper-two">
            <button className="set-two" onClick={() => this.onSetEntity('2')}>
              Entity-Two
            </button>
            <div
              className="two"
              style={{ background: pair.s2 + pair.e2 !== 0 ? '#66cc99' : 'none' }}
            >
              {sentence.substring(pair.s2, pair.e2) || '[尚未设置]'}
            </div>
          </div>
          <button className="abandon-btn" onClick={() => onDeletePair(itemId, pairIndex)}>
            删除实体对
          </button>
        </div>
        <div className="relation-type">
          <RelationItem relations={pair.relations} onToggleRelation={this.onToggleRelation} />
        </div>
      </div>
    )
  }
}
