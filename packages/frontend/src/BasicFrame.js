import React from 'react'
import Pair from './Pair'
import { getEntityTypeColor, getSegments } from './utils'
import { Button, Tag } from '@blueprintjs/core'

export default class BasicFrame extends React.Component {

  render() {
    const {
      itemIndex,
      item,
      currentLabels,
      onButtonTagClick,
      onAddPair,
      onDeletePair,
      onSetEntityOne,
      onSetEntityTwo,
      onSetRelation,
      onSetRelationType,
      onAbandonClick,
      onSetEntityOneType,
      onSetEntityTwoType,
    } = this.props
    const segments = getSegments(item.pairs, item.sentence.length)
    return (
      <div
        className="item"
        data-item-id={item.id}
        style={{backgroundColor: itemIndex % 2 === 1 ? '#FFFFFF' : '#FFFFE0'}}
      >
        <div
          className="sentence"
          style={{ textDecoration: item.abandoned ? 'line-through' : null }}
        >
          {segments.map(([start, end, bool, entityType], index) => {
            return (
              <span
                style={{ background: bool ? getEntityTypeColor(entityType) : 'none' }}
                key={index}
                data-offset={start}
              >
                {item.sentence.substring(start, end)}
              </span>
            )
          })}
        </div>
        <div className="add-abandoned">
          <Button className="addBtn" onClick={() => onAddPair(item.id)}>
            添加实体标注
          </Button>
          {/*<Button className="abandonedBtn" onClick={() => onAbandonClick(item.id)}>*/}
          {/*  丢弃*/}
          {/*</Button>*/}
        </div>
        <div className="relationFrame">
          {item.pairs.map((pair, index) => (
            <Pair
              key={index}
              itemId={item.id}
              sentence={item.sentence}
              pair={pair}
              pairIndex={index}
              onSetEntityOne={onSetEntityOne}
              onSetEntityTwo={onSetEntityTwo}
              onSetRelation={onSetRelation}
              onSetRelationType={onSetRelationType}
              onDeletePair={onDeletePair}
              onSetEntityOneType={onSetEntityOneType}
              onSetEntityTwoType={onSetEntityTwoType}
            />
          ))}
        </div>
        <div className="Keywords">
          <Tag className="LabelSpan" style={{background: '#a0ebe7'}}>
            推荐关键词
          </Tag>
          {item.keywords.map(item => (
            <Button
              icon="bookmark"
              style={{marginLeft: 20, background: '#e2f7d2'}}
              key={item}
              minimal={true}
              // disabled={true}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="TextLabels">
          <Tag className="LabelSpan" style={{background: '#D6BC94'}}>
            关系标签
          </Tag>
            {currentLabels.map(label => (
              <Button
                icon="tag"
                style={{marginLeft: 20, background: item.labels.includes(label) ? '#fadec0' : '#ffffff'}}
                key={label}
                onClick={() => onButtonTagClick(item.id, label)}>
                {label}
              </Button>
            ))}
        </div>

      </div>
    )
  }
}
