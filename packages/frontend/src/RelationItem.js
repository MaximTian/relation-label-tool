import React from 'react'
import { Checkbox } from '@blueprintjs/core'

export default class RelationItem extends React.Component {
  render() {
    const { relations, onToggleRelation, relationTypes } = this.props
    return relationTypes.map(relation => (
        <Checkbox
          style={{marginLeft: 20}}
          key={relation}
          checked={relations.includes(relation)}
          onChange={() => onToggleRelation(relation)}
        >
        {relation}
        </Checkbox>
    ))
  }
}
