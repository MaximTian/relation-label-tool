import React from 'react'

export default class RelationItem extends React.Component {
  render() {
    const { relations, onToggleRelation, relationTypes } = this.props
    return relationTypes.map(relation => (
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
