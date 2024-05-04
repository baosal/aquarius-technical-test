const mappingBorderRadiusData = () => {
  const result = {}

  for (let i = 0; i <= 64; i++) {
    result[`${i}`] = `${i}px`
  }

  return result
}

const borderRadius = { ...mappingBorderRadiusData(), circle: '50%', none: '0px' }

export default borderRadius
