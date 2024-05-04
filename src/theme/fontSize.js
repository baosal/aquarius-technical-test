const mappingFontSizetData = () => {
  const result = {}

  // eslint-disable-next-line no-plusplus
  for (let i = 8; i <= 64; i++) {
    result[`${i}px`] = `${i}px`
  }

  return result
}

const fontSize = {
  ...mappingFontSizetData(),
  'small-8': '8px',
  'small-12': '12px',
  'small-14': '14px',
  'body-16': '16px',
  'body-18': '18px',
  h5: '21px',
  h4: '24px',
  h3: '28px',
  h2: '36px',
  h1: '48px'
}

export default fontSize
