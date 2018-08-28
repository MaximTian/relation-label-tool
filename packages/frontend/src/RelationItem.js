import React from 'react'
import { RELATION_TYPES } from './constants'

export default class RelationItem extends React.Component {
  render() {
    const { relations, onToggleRelation } = this.props
    return RELATION_TYPES.map(relation => (
      <label key={relation}>
        <input
          type="checkbox"
          checked={relations.includes(relation)}
          onChange={() => onToggleRelation(relation)}
        />
        {relation}
      </label>
    ))
  }
}
