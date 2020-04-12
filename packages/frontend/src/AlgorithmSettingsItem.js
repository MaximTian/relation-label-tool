import React from 'react'
import { Dialog, Button } from '@blueprintjs/core'

export default class AlgorithmSettingsItem extends React.Component {
  render() {
    const { isOpen,
      onSimpleMatchSettingsClick,
      onSimpleMatchSettingsSaveClick,
      informations } = this.props

    return (
      <Dialog
        title={'算法配置'}
        isOpen={Boolean(isOpen)}
        onClose={() => onSimpleMatchSettingsClick(informations['ip'], false)}
      >
          <div style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
            <span>
              算法名称
            </span>
            <input
              id={informations['ip'] + '-Name'}
              defaultValue={ informations['NAME'] }
              style={{ width: '60%', marginLeft: 10, padding: 5}}
            />
          </div>

          <div style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
            <span style={{verticalAlign: 'top'}}>
              算法描述
            </span>
            <textarea
              id={informations['ip'] + '-Description'}
              defaultValue={ informations['DESCRIPTION'] }
              style={{ width: '77%', height: 100, marginLeft: 10, padding: 5}}
            />
          </div>

          <div style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
              <span style={{verticalAlign: 'top'}}>
                服务地址
              </span>
            <input
              id={informations['ip'] + '-Port'}
              defaultValue={ informations['PORT'] }
              style={{ width: '60%', marginLeft: 10, padding: 5}}
            />
          </div>

        <div style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
          训练可选参数：
        </div>

          <div style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
                  <span style={{verticalAlign: 'top'}}>
                    句子长度
                  </span>
            <input
              id={informations['ip'] + '-Length'}
              defaultValue={ informations['MaxLength'] }
              style={{ width: '30%', marginLeft: 10, padding: 5}}
            />
          </div>

          <div style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
                    <span style={{verticalAlign: 'top'}}>
                      训练次数
                    </span>
            <input
              id={informations['ip'] + '-Epoch'}
              defaultValue={ informations['Epoch'] }
              style={{ width: '30%', marginLeft: 10, padding: 5}}
            />
          </div>

          <div style={{fontSize: 15, marginLeft: 20, marginTop: 10}}>
                  <span style={{verticalAlign: 'top'}}>
                    每轮训练迭代次数
                  </span>
            <input
              id={informations['ip'] + '-Batch'}
              defaultValue={ informations['BatchSize'] }
              style={{ width: '30%', marginLeft: 10, padding: 5}}
            />
          </div>

        <div style={{display: 'flex', marginLeft: 'auto', marginRight: 40, marginTop: 10}}>
          <Button style={{ width: 70 }} intent={'Primary'}
                  onClick={() => onSimpleMatchSettingsSaveClick(informations['ip'], false)}>
            保存
          </Button>
          <Button style={{ width: 70, marginLeft: 10 }}
                  onClick={() => onSimpleMatchSettingsClick(informations['ip'], false)}>
            关闭
          </Button>
        </div>
      </Dialog>
    )
  }
}
