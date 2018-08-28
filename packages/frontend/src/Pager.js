import React from 'react'
import { ButtonGroup, Button, Classes } from '@blueprintjs/core'
import { getShowPages } from './page-utils'

export default class Pager extends React.Component {
  state = {
    inputValue: 1,
  }

  onChangeInputValue = e => {
    this.setState({ inputValue: Number(e.target.value) })
  }

  render() {
    const { pageSize, currentPageId, onPageChange } = this.props

    return (
      <div className="pageFrame">
        <Button style={{ marginRight: 16 }} onClick={() => onPageChange(currentPageId - 1)}>
          上一页
        </Button>
        <ButtonGroup>
          {getShowPages(pageSize, currentPageId).map(page => (
            <Button
              key={page.toString()}
              className="page-number"
              onClick={() => onPageChange(page)}
              intent={page === currentPageId ? 'primary' : 'none'}
            >
              {page}
            </Button>
          ))}
        </ButtonGroup>
        <Button style={{ marginLeft: 16 }} onClick={() => onPageChange(currentPageId + 1)}>
          下一页
        </Button>
        <input
          className={Classes.INPUT}
          type="number"
          style={{ marginLeft: 16 }}
          min={1}
          max={pageSize}
          value={this.state.inputValue}
          onChange={this.onChangeInputValue}
        />
        <Button intent="primary" onClick={() => onPageChange(this.state.inputValue)}>
          跳转
        </Button>
        <span style={{ marginLeft: 8 }}>总页数 {pageSize}</span>
      </div>
    )
  }
}
