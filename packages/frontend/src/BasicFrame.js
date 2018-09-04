import React from 'react'
import Pair from './Pair'
import { getSegments } from './utils'

export default class BasicFrame extends React.Component {
  render() {
    const {
      item,
      onAddPair,
      onDeletePair,
      onSetEntityOne,
      onSetEntityTwo,
      onSetRelation,
      onSetRelationType,
      onAbandonClick,
    } = this.props
    const segments = getSegments(item.pairs, item.sentence.length)
    return (
      <div className="item" data-item-id={item.id}>
        <div className="index">id {item.id}</div>
        <div
          className="sentence"
          style={{ textDecoration: item.abandoned ? 'line-through' : null }}
        >
          {segments.map(([start, end, bool], index) => {
            return (
              <span
                style={{ background: bool ? '#66cc99' : 'none' }}
                key={index}
                data-offset={start}
              >
                {item.sentence.substring(start, end)}
              </span>
            )
          })}
        </div>
        <div className="add-abandoned">
          <button className="addBtn" onClick={() => onAddPair(item.id)}>
            添加实体对
          </button>
          <button className="abandonedBtn" onClick={() => onAbandonClick(item.id)}>
            丢弃
          </button>
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
            />
          ))}
        </div>
      </div>
    )
  }
}
