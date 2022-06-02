// Disabled this because statically is not working...
const StaticallyPath = ({
  src = null,
  width = null,
  height = null,
  format = 'auto',
  quality = 85,
}) => {
  // let srcURL = ''
  // const params = []
  // // Use either width or height, whichever is greater
  // width && height
  //   ? width >= height
  //     ? params.push(`w=${width}`)
  //     : params.push(`h=${height}`)
  //   : width
  //   ? params.push(`w=${width}`)
  //   : height && params.push(`h=${height}`)

  // format && params.push(`f=${format}`)
  // quality !== 85 && params.push(`q=${quality}`)
  // const allParams = params.length ? params.join() : ''

  // if (process.env.NETLIFY) {
  //   const baseUrl =
  //     process.env.CONTEXT === 'production'
  //       ? process.env.URL
  //       : process.env.DEPLOY_URL

  //   srcURL = `https://cdn.statically.io/img/${
  //     baseUrl.replace(/^https?:\/\//, '').split('/')[0]
  //   }/`

  //   if (allParams !== '') {
  //     srcURL += `${allParams}`
  //   }

  //   // domain/f=format,w=width,h=height,q=:percentage/path
  //   return srcURL + src
  // }

  // // /path?f=format,w=width,h=height,q=:percentage
  // return srcURL + src + '?' + allParams
  return src
}
export default StaticallyPath
