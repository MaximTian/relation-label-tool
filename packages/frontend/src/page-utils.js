import { range } from './utils'

const SHOW_COUNT = 5
const HALF = (SHOW_COUNT - 1) / 2

export function getShowPages(pageSize, currentPageId) {
  let start = currentPageId - HALF
  let end = currentPageId + HALF
  if (start < 1) {
    end = SHOW_COUNT
  }
  if (end > pageSize) {
    start = pageSize - SHOW_COUNT
  }
  if (start < 1) start = 1
  if (end > pageSize) end = pageSize
  return range(start, end + 1)
}
