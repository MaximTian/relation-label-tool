import React from 'react'
import { SELECT_TYPES } from './constants'
import { getEntityTypeColor } from './utils'

export default class SelectionItem extends React.Component {
  render() {
    return SELECT_TYPES.map((selection, index) => (
      <option key={index} value={selection} style={{background: getEntityTypeColor(selection)}}>
        {selection}
      </option>
    ))
  }
}
