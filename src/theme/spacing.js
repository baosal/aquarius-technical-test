const mappingSpacePixelData = () => {
  const result = {}

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 256; i++) {
    result[`${i}px`] = `${i}px`
  }

  return result
}
const spacing = mappingSpacePixelData()

export default spacing
