import React from 'react'
import produce from 'immer'
import { hot } from 'react-hot-loader'
import './index.css'
import Pager from './Pager'
import { EMPTY_PAIR, RELATION_TYPES } from './constants'
import BasicFrame from './BasicFrame'
import { clamp, getAnnoLabels } from './utils'
import { toastIt } from './toast'
import LabelTree from './LabelTree'
import { Button, Icon } from '@blueprintjs/core'
import AlgorithmLayout from './AlgorithmLayout'
import AlgorithmSettingsItem from './AlgorithmSettingsItem'
import { ALGORITHM_LIST, DEMO_ALGORITHM, AUTO_ALGORITHM } from './AlgorithmConstants'
import FileListItem from './FileListItem'

function shallowCopy(object) {
  return Object.assign({}, object)
}

@hot(module)
export default class App extends React.Component {
  constructor(props) {
    super(props)
    let initUsername = 'dev'
    let startPage = 1
    if (process.env.NODE_ENV === 'production') {
      initUsername = prompt('请输入你的用户名')
    }
    this.state = {
      itemList: [],
      author: initUsername,
      currentPageId: startPage,
      pageSize: 0,
      currentLabels: [],
      isOpen: false,
      autoMatch: true,
      algorithms: ALGORITHM_LIST,
      fileDirect: '',
      fileListOpen: false,
      fileList: [],
      displayState: 1,
    }
  }

  onPageChange = pageId => {
    const { pageSize } = this.state
    this.setState({ currentPageId: clamp(1, pageId, pageSize) })
    window.scrollTo(0, 0)
  }

  onButtonTagClick = (itemId, tagName) => {
    function getLabelIndex(labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i] === tagName) {
          return i;
        }
      }
      return -1;
    }

    const { itemList } = this.state
    const nextItemList = itemList.map(item => {
      if (item.id === itemId) {
        const item2 = shallowCopy(item)
        let tagIndex = getLabelIndex(item2.labels)
        if (tagIndex !== -1) {
          item2.labels.splice(tagIndex, 1)
        } else {
          item2.labels.push(tagName)
        }
        return item2
      } else {
        return item
      }
    })
    this.setState({ itemList: nextItemList })
  }

  onAddPair = itemId => {
    const { itemList } = this.state
    const nextItemList = itemList.map(item => {
      if (item.id === itemId) {
        const item2 = shallowCopy(item)
        item2.pairs = item.pairs.concat([EMPTY_PAIR])
        return item2
      } else {
        return item
      }
    })
    this.setState({ itemList: nextItemList })
  }

  onDeletePair = (itemId, pairIndex) => {
    const { itemList } = this.state
    const nextItemList = itemList.map(item => {
      if (item.id === itemId) {
        const item2 = shallowCopy(item)
        item2.pairs = item.pairs.slice()
        item2.pairs.splice(pairIndex, 1)
        return item2
      } else {
        return item
      }
    })
    this.setState({ itemList: nextItemList })
  }

  onSetEntityOne = (itemId, pairIndex, s1, e1) => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.s1 = s1
      pair.e1 = e1
    })
    this.setState({ itemList: nextItemList })
  }

  onSetEntityOneType = (itemId, pairIndex, entityType) => {
    // debugger
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.entityOneType = entityType
    })
    this.setState({ itemList: nextItemList })
  }

  onSetEntityTwo = (itemId, pairIndex, s2, e2) => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.s2 = s2
      pair.e2 = e2
    })
    this.setState({ itemList: nextItemList })
  }

  onSetEntityTwoType = (itemId, pairIndex, entityType) => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.entityTwoType = entityType
    })
    this.setState({ itemList: nextItemList })
  }

  onSetRelation = (itemId, pairIndex, relations) => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.relations = relations
    })
    this.setState({ itemList: nextItemList })
  }

  onSetRelationType = (itemId, pairIndex, relationType) => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      const item = draft.find(item => item.id === itemId)
      const pair = item.pairs[pairIndex]
      pair.relationType = relationType
    })
    this.setState({ itemList: nextItemList })
  }

  onAbandonClick = itemId => {
    const { itemList } = this.state
    const nextItemList = produce(itemList, draft => {
      let item = draft.find(item => item.id === itemId)
      item.abandoned = !item.abandoned
    })
    this.setState({ itemList: nextItemList })
  }

  onAddLabel = label => {
    if (label === '' || label === undefined || label == null) {
    } else {
      const { currentLabels } = this.state
      let newLabels = currentLabels.slice(0)
      newLabels.push(label)
      document.getElementById('AddLabelValue').value = ''
      this.setState({ currentLabels: newLabels })
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPageId !== prevState.currentPageId) {
      const offset = (this.state.currentPageId - 1) * 10
      const response = await fetch(`http://10.214.224.118:5050/getData?offset=${offset}`)
      if (response.ok) {
        const itemList = await response.json()
        this.setState({ itemList })
      }
    }
  }

  async componentDidMount() {
    const initResponse = await fetch(`http://10.214.224.118:5050/getSettings?displayState=${this.state.displayState}`)
    if (initResponse.ok) {
      const config = await initResponse.json()
      const currentLabels = config['relationSet']
      const fileList = config['fileList']
      const fileDirect = config['Dataset']
      this.setState({ currentLabels, fileList, fileDirect })
    }
    const formerResponse = await fetch(`http://10.214.224.118:5050/getDataCount/`)
    if (formerResponse.ok) {
      const count = await formerResponse.json()
      const pageSize = Math.ceil(count / 10)
      this.setState({ pageSize })
    }
    const response = await fetch(`http://10.214.224.118:5050/getData?offset=0`)
    if (response.ok) {
      const itemList = await response.json()
      this.setState({ itemList })
    }
  }

  async handleSaveBtnClick(itemList) {
    const { author } = this.state
    const response = await fetch(`http://10.214.224.118:5050/saveData/`, {
      method: 'POST',
      body: JSON.stringify(itemList.map(item => Object.assign({}, item, { author }))),
      headers: {
        'content-type': 'application/json',
      },
    })
    if (!response.ok) {
      alert('更新失败')
    } else {
      toastIt('更新成功', 1000, { fontSize: '18px' })
    }
  }

  onFileListClick = (value) => {
    this.setState({ fileListOpen: value})
  }

  async handleSimpleMatchBtnClick(ipAddress, algorithm, itemList) {
    const newItemList = itemList.map(item => {
        let item2 = shallowCopy(item)
        delete item2['_id']
        return item2
    })
    toastIt('正在执行算法', 1000, { fontSize: '18px' })
    const response = await fetch('http://' + ipAddress, {
      method: 'POST',
      body: JSON.stringify(
        {
          'config': {
            "network_name": 'cnn',
            "shared_storage_dir": "shared_storage_dir",
            "instance_storage_dir": "instance_storage_dir",
            "max_length": algorithm['MaxLength'],
          },
          'data': newItemList,
        } ),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      let tempItemList = await response.json()
      // console.log(tempItemList)
      this.setState({ itemList: tempItemList })
      toastIt('算法执行成功', 1000, { fontSize: '18px' })
    }
  }

  async handleRestartMatchBtnClick(ipAddress, algorithm) {
    toastIt('正在训练', 1000, { fontSize: '18px' })
    const response = await fetch('http://' + ipAddress, {
      method: 'POST',
      body: JSON.stringify(
        {
          "name": algorithm['NAME'],
          "description": algorithm['DESCRIPTION'],
          "model_config": {
            "train_docs_dir": "dataset/train_docs_dir",
            "train_anno_dir": "dataset/train_anno_dir",
            "shared_storage_dir": "shared_storage_dir",
            "instance_storage_dir": "instance_storage_dir",
            "network_name": "cnn",
            "mask": true,
            "max_length": algorithm['MaxLength'],
            "epoch": algorithm['Epoch'],
            "batch_size": algorithm['BatchSize'],
          },
          "address": algorithm['PORT'],
        } ),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
      toastIt('训练已完成', 1000, { fontSize: '18px' })
    }
  }

  onRelationDocumentsClick = (value) => {
    this.setState({ isOpen: value})
  }

  onAutoMatchStartClick = (value) => {
    let newState = !value
    setTimeout(function() {
      toastIt('执行完毕', 1000, { fontSize: '18px' });
      },
      5000);
    this.setState({ autoMatch: newState})
  }

  onSimpleMatchSettingsClick = (algorithmIp, value) => {
    const { algorithms } = this.state
    const nextItemList = algorithms.map(item => {
      if (item.ip === algorithmIp) {
        let item2 = shallowCopy(item)
        item2.DETAIL_STATE = value
        return item2
      } else {
        return item
      }
    })
    this.setState({ algorithms: nextItemList})
  }

  onAddAlgorithmClick = (algorithmIp) => {
    const { algorithms } = this.state
    let newAlgorithmList = Array.from(algorithms)
    let newAlgorithm = shallowCopy(DEMO_ALGORITHM)
    newAlgorithm['ip'] = algorithmIp
    newAlgorithmList.push(newAlgorithm)
    this.setState({ algorithms: newAlgorithmList})
  }

  onSimpleMatchSettingsSaveClick = (algorithmIp, value) => {
    const { algorithms } = this.state
    let name = document.getElementById(algorithmIp + '-Name').value;
    let des = document.getElementById(algorithmIp + '-Description').value;
    let port = document.getElementById(algorithmIp + '-Port').value;
    let maxLength = document.getElementById(algorithmIp + '-Length').value;
    let epoch = document.getElementById(algorithmIp + '-Epoch').value;
    let batchSize = document.getElementById(algorithmIp + '-Batch').value;
    const nextItemList = algorithms.map(item => {
      if (item.ip === algorithmIp) {
        let item2 = shallowCopy(item)
        item2.NAME = name
        item2.DESCRIPTION = des
        item2.PORT = port
        item2.DETAIL_STATE = value
        item2.BatchSize = batchSize
        item2.Epoch = epoch
        item2.MaxLength = parseInt(maxLength)
        return item2
      } else {
        return item
      }
    })
    this.setState({ algorithms: nextItemList})
  }

  handleFileListSaveClick = () => {
    let name = document.getElementById('selectFileName').value;
    let disState = document.getElementById('displayState').value;
    this.setState({ fileDirect: name, displayState: disState, fileListOpen: false})
  }

  async FileListChangeClick() {
    const response = await fetch(`http://10.214.224.118:5050/setDataset/`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'content-type': 'application/json',
      },
    })
    if (response.ok) {
      toastIt('设置更新成功', 1000, { fontSize: '18px' });
    }
    this.componentDidMount()
  }

  render() {
    // TODO avoid in-replace modification
    const { itemList, algorithms, autoMatch } = this.state

    return (
      <div>
        <div
          className='appTitle'
          style={{borderBottom: "1px solid #969696",
            paddingTop: 10,
            paddingBottom: 10,
            display: 'flex',
            flexDirection: 'row',
          }}>

          <FileListItem
            isOpen={this.state.fileListOpen}
            fileList={this.state.fileList}
            handleFileListClick={this.onFileListClick}
            fileName={this.state.fileDirect}
            handleFileListSaveClick={this.handleFileListSaveClick}
          />
            <span
              style={{fontSize: 16, marginLeft: 30, whiteSpace: 'pre', paddingTop: 5}}>关系标注工具  0.1.1</span>

            <div style={{marginLeft: 10, marginRight: 10, border: "1px solid #969696"}} />

            <div style={{display: 'flex', flexDirection: 'row'}}>
              <span style={{fontSize: 16, margin: 'auto', whiteSpace: 'pre'}}>数据集  </span>
              <span style={{margin: 'auto', fontSize: 16}}> {this.state.fileDirect} </span>
            </div>

            <Button
              icon='edit'
              style={{marginLeft: 10}}
              minimal={true}
              onClick={() => this.onFileListClick(true) }>
              数据设置
            </Button>

          <Button
            style={{marginLeft: 10}}
            minimal={true}
            onClick={() => this.FileListChangeClick() }>
            数据更新
          </Button>

            <div
              style={{float: 'right', marginRight: 30, marginLeft: 'auto'}}>
              <Icon icon='user'/>
              <span style={{marginLeft: 10}}>{this.state.author}</span>

            </div>
        </div>

        <div className="appLayout">
          <LabelTree
            currentLabels={this.state.currentLabels}
            onAddLabel={this.onAddLabel}
          />

          <div className="centerLayout">
            <Pager
              pageSize={this.state.pageSize}
              currentPageId={this.state.currentPageId}
              onPageChange={this.onPageChange}
              isOpen={this.state.isOpen}
              onRelationDocumentsClick={this.onRelationDocumentsClick}
            />
            {itemList.map((item, index) => (
              <BasicFrame
                key={index}
                itemIndex={index}
                item={item}
                currentLabels={this.state.currentLabels}
                onButtonTagClick={this.onButtonTagClick}
                onAddPair={this.onAddPair}
                onDeletePair={this.onDeletePair}
                onSetEntityOne={this.onSetEntityOne}
                onSetEntityTwo={this.onSetEntityTwo}
                onSetRelation={this.onSetRelation}
                onSetRelationType={this.onSetRelationType}
                onSetEntityOneType={this.onSetEntityOneType}
                onSetEntityTwoType={this.onSetEntityTwoType}
                onAbandonClick={this.onAbandonClick}
              />
            ))}
            <div className="last">
              <button className="save-btn" onClick={() => this.handleSaveBtnClick(itemList)}>
                保存
              </button>
            </div>
          </div>

          <div className="RightLayout">
            <div className='AlgorithmTitle'>
              算法模型-辅助标注

              <Button
                icon={"plus"}
                style={{marginLeft: 10}}
                onClick={() => this.onAddAlgorithmClick('algorithm' + String(algorithms.length)) }
              />

            </div>

            <div className='AlgorithmLayout'>

              <div className='auto-algorithm'>
                <div style={{marginTop: 10}}>
                  <Icon
                    icon={'info-sign'}
                    intent={'Primary'}
                    style={{marginLeft: 20, marginTop: 7}} />
                  <span style={{marginLeft: 5}}>{AUTO_ALGORITHM['NAME']}</span>
                  <Button
                    style={{marginLeft: 15}}
                    icon={'repeat'}
                    onClick={() => this.onAutoMatchStartClick(autoMatch)}
                  />
                  <Button
                    style={{marginLeft: 10}}
                    icon={'play'}
                    disabled={ autoMatch }
                  />
                </div>
                <div className='algorithm-explained'>
                  {AUTO_ALGORITHM['DESCRIPTION']}
                </div>
              </div>

              {algorithms.map((algorithm, index) => (
                <div
                  className={algorithm['ip']}
                  key={index}>

                  <AlgorithmSettingsItem
                    informations={algorithm}
                    isOpen={algorithm['DETAIL_STATE']}
                    onSimpleMatchSettingsSaveClick={this.onSimpleMatchSettingsSaveClick}
                    onSimpleMatchSettingsClick={this.onSimpleMatchSettingsClick} />

                  <div style={{marginTop: 10}}>
                    <Icon
                      icon={'info-sign'}
                      style={{marginLeft: 20, marginTop: 7}} />
                    <span style={{marginLeft: 5}}>
                      {algorithm['NAME']}
                    </span>
                    <Button
                      style={{marginLeft: 15}}
                      icon={'repeat'}
                      onClick={() => this.handleRestartMatchBtnClick(algorithm['RESTART'], algorithm)}
                    />
                    <Button
                      style={{marginLeft: 15}}
                      icon={'play'}
                      onClick={() => this.handleSimpleMatchBtnClick(algorithm['PORT'], algorithm, itemList)}
                    />
                    <Button
                      style={{marginLeft: 10}}
                      icon={'cog'}
                      onClick={() => this.onSimpleMatchSettingsClick(algorithm['ip'], true)}
                    />
                  </div>
                  <div className='algorithm-explained'>
                    {algorithm['DESCRIPTION']}
                  </div>
                </div>
              ))
              }
            </div>

          </div>
        </div>
      </div>
    )
  }
}
