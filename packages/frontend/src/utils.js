export function range(start, end) {
  const array = []
  for (let i = start; i < end; i++) {
    array.push(i)
  }
  return array
}

export function clamp(min, value, max) {
  if (value < min) {
    value = min
  }
  if (value > max) {
    value = max
  }
  return value
}

export function getSegments(pairs, length) {
  let entityPosSet = []
  for (let pair of pairs) {
    entityPosSet.push([pair.s1, pair.e1, pair.entityOneType])
    entityPosSet.push([pair.s2, pair.e2, pair.entityTwoType])
  }
  if (entityPosSet.length === 0) {
    return [[0, length, false, 1, 'None']]
  } else {
    entityPosSet.sort((a, b) => {
      return -a[0] + b[0]
    })
    let segments = []
    segments.push(entityPosSet.pop())
    while (entityPosSet.length > 0) {
      let tmpSeg = segments.pop()
      let tmpPos = entityPosSet.pop()
      if (tmpSeg[1] < tmpPos[0]) {
        segments.push(tmpSeg)
        segments.push(tmpPos)
      } else {
        if (tmpSeg[1] >= tmpPos[1]) {
          segments.push(tmpSeg)
        } else {
          segments.push([tmpSeg[0], tmpPos[1], tmpSeg[2]])
        }
      }
    }
    segments.sort((a, b) => {
      return a[0] - b[0]
    })
    let result = []
    for (let i = 0; i < segments.length; i++) {
      if (i === 0) {
        if (segments[0][0] > 0) {
          result.push([0, segments[0][0], false, 'None'])
        }
      } else {
        result.push([segments[i - 1][1], segments[i][0], false, 'None'])
      }
      result.push([segments[i][0], segments[i][1], true, segments[i][2]])
      if (i === segments.length - 1) {
        if (segments[i][1] < length) {
          result.push([segments[i][1], length, false, 'None'])
        }
      }
    }
    return result
  }
}

export function getEntityTypeColor(entityType) {
  if (entityType === '数字') {
      return '#ff4500'
  } else if (entityType === '人名') {
    return '#0080ff'
  } else if (entityType === '地理') {
    return '#ff00ff'
  } else if (entityType === '机构') {
    return '#66cc99'
  } else {
    return '#ffffff'
  }
}
