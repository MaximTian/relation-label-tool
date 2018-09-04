export const EMPTY_PAIR = { s1: 0, e1: 0, s2: 0, e2: 0, relations: [], relationType: 'ORG_ORG' }
export const SELECT_TYPES = ['ORG_ORG', 'ORG_PER', 'PER_PER', 'ORG_PRODUCT', 'ORG_DOMAIN']
export const RELATION_TYPES = {
  ORG_ORG: ['合作', '从属', '买卖', '合并', '竞争', '委托'],
  ORG_PER: ['任职', '学习', '创始人', '投资人'],
  PER_PER: [
    '父母子女',
    '夫妻',
    '兄弟姐妹',
    '前夫妻',
    '同学',
    '朋友',
    '师生',
    '校友',
    '老乡',
    '同事',
    '前同事',
    '领导下属',
  ],
  ORG_PRODUCT: ['生产', '提供'],
  ORG_DOMAIN: ['经营', '业务'],
}
