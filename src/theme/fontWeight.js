const mappingFontWeightData = () => {
  const result = {}

  for (let i = 0; i < 1000; i += 100) {
    result[`${i}`] = `${i}`
  }

  return result
}

const fontWeight = {
  ...mappingFontWeightData()
}

export default fontWeight
