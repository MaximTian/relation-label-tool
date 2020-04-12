export const DEMO_ALGORITHM = {
  NAME: '随机匹配算法',
  DESCRIPTION: '算法描述',
  PORT: '10.214.224.236:5000/predict',
  DETAIL_STATE: true,
  RESTART: '10.214.224.236:5000/train',
  BatchSize: 50,
  Epoch: 1,
  MaxLength: 150,
}

export const AUTO_ALGORITHM = {
  ip: 'auto-match',
  NAME: '主动学习',
  DESCRIPTION: '根据当前已有的标注结果，训练算法模型，以此对新来的标注内容进行初步标注',
  PORT: '10.214.224.118:5000/simpleMatch',
}

export const ALGORITHM_LIST = [
  {
    ip: 'simple-match',
    NAME: 'CNN算法',
    DESCRIPTION: '调用现有的CNN神经网络模型进行关系分类',
    PORT: '10.214.224.236:5000/predict',
    RESTART: '10.214.224.236:5000/train',
    DETAIL_STATE: false,
    BatchSize: 50,
    Epoch: 50,
    MaxLength: 150,
  },
]
