import React from 'react'
import { SELECT_TYPES } from './constants'

export default class SelectionItem extends React.Component {
  render() {
    return SELECT_TYPES.map((selection, index) => (
      <option key={index} value={selection}>
        {selection}
      </option>
    ))
  }
}
