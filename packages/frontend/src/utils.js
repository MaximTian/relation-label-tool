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
