import React from 'react'
import Pair from './Pair'

export default class BasicFrame extends React.Component {
  getSegments() {
    const pairs = this.props.item.pairs
    const length = this.props.item.sentence.length
    let entityPosSet = []
    for (let pair of pairs) {
      entityPosSet.push([pair.s1, pair.e1])
      entityPosSet.push([pair.s2, pair.e2])
    }
    if (entityPosSet.length === 0) {
      return [[0, length, false, 1]]
    } else {
      entityPosSet.sort((a, b) => {
        return -a[0] + b[0]
      })
      let segments = []
      segments.push(entityPosSet.pop())
      while (entityPosSet.length > 0) {
        let tmpSeg = segments.pop()
        let tmpPos = entityPosSet.pop()
        if (tmpSeg[1] < tmpPos[0]) {
          segments.push(tmpSeg)
          segments.push(tmpPos)
        } else {
          if (tmpSeg[1] >= tmpPos[1]) {
            segments.push(tmpSeg)
          } else {
            segments.push([tmpSeg[0], tmpPos[1]])
          }
        }
      }
      segments.sort((a, b) => {
        return a[0] - b[0]
      })
      let result = []
      for (let i = 0; i < segments.length; i++) {
        if (i === 0) {
          if (segments[0][0] > 0) {
            result.push([0, segments[0][0], false])
          }
        } else {
          result.push([segments[i - 1][1], segments[i][0], false])
        }
        result.push([segments[i][0], segments[i][1], true])
        if (i === segments.length - 1) {
          if (segments[i][1] < length) {
            result.push([segments[i][1], length, false])
          }
        }
      }
      return result
    }
  }

  render() {
    const {
      item,
      onAddPair,
      onDeletePair,
      onSetEntityOne,
      onSetEntityTwo,
      onSetRelation,
      onAbandonClick,
    } = this.props
    const segments = this.getSegments()
    return (
      <div className="item" data-item-id={item.id}>
        <div className="index">id {item.id}</div>
        <div
          className="sentence"
          style={{ textDecoration: item.abandoned ? 'line-through' : null }}
        >
          {/*{item.sentence}*/}
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
              onDeletePair={onDeletePair}
            />
          ))}
        </div>
      </div>
    )
  }
}
