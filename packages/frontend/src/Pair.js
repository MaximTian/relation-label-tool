import React from 'react'
import RelationItem from './RelationItem'
import SelectionItem from './SelectionItem'
import { RELATION_TYPES } from './constants'
import { Button } from '@blueprintjs/core'
import { getEntityTypeColor } from './utils'

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

function getEntityColor(entityState, entityType) {
  if (entityState === 0) {
    return 'none'
  } else {
    let color = getEntityTypeColor(entityType)
    if (color === '#ffffff') {
      color = 'none'
    }
    return color
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
    const { pair, itemId, pairIndex, sentence, onDeletePair, onSetRelationType, onSetEntityOneType, onSetEntityTwoType } = this.props
    // console.log(pair)
    return (
      <div>
        <div className="entity-buttons">

          <div className="entity-wrapper-one">
            <Button
              icon='locate'
              className="set-one" onClick={() => this.onSetEntity('1')}>
              实体1
            </Button>
            <div
              className="entity-content"
              style={{ background: getEntityColor(pair.s1 + pair.e1, pair.entityOneType) }}>
              <span>
                {sentence.substring(pair.s1, pair.e1) || '[尚未设置]'}
              </span>
            </div>
            <select
              style={{backgroundColor: getEntityTypeColor(pair.entityOneType)}}
              defaultValue={pair.entityOneType}
              onChange={event => onSetEntityOneType(itemId, pairIndex, event.target.value)}
            >
              <SelectionItem />
            </select>
          </div>

          <div className="entity-wrapper-two">
            <Button
              icon='locate'
              className="set-two" onClick={() => this.onSetEntity('2')}>
              实体2
            </Button>
            <div
              className="entity-content"
              style={{ background: getEntityColor(pair.s2 + pair.e2, pair.entityTwoType) }}>
              <span>
                {sentence.substring(pair.s2, pair.e2) || '[尚未设置]'}
              </span>
            </div>
          </div>
          <select
            style={{backgroundColor: getEntityTypeColor(pair.entityTwoType)}}
            defaultValue={pair.entityTwoType}
            onChange={event => onSetEntityTwoType(itemId, pairIndex, event.target.value)}
          >
            <SelectionItem />
          </select>
          <Button className="abandon-btn" style={{background: '#f9e2e1'}} onClick={() => onDeletePair(itemId, pairIndex)}>
            删除
          </Button>
        </div>
        {/*<div className="select-type">*/}
        {/*  <select*/}
        {/*    defaultValue={pair.relationType}*/}
        {/*    onChange={event => onSetRelationType(itemId, pairIndex, event.target.value)}*/}
        {/*  >*/}
        {/*    <SelectionItem />*/}
        {/*  </select>*/}
        {/*</div>*/}
        {/*<div className="relation-type">*/}
        {/*  <RelationItem*/}
        {/*    relations={pair.relations}*/}
        {/*    relationTypes={RELATION_TYPES[pair.relationType]}*/}
        {/*    onToggleRelation={this.onToggleRelation}*/}
        {/*  />*/}
        {/*</div>*/}
      </div>
    )
  }
}
