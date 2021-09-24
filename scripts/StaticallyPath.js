const StaticallyPath = ({
  src = null,
  width = null,
  height = null,
  format = 'auto',
  quality = 85,
}) => {
  let srcURL = ''
  const params = []
  width && params.push(`w=${width}`)
  height && params.push(`h=${height}`)
  format && params.push(`f=${format}`)
  quality !== 85 && params.push(`q=${quality}`)
  const allParams = params.length ? params.join() : ''

  if (process.env.NETLIFY) {
    srcURL = `https://cdn.statically.io/img/${
      process.env.DEPLOY_PRIME_URL.replace(/^https?:\/\//, '').split('/')[0]
    }/`

    srcURL = srcURL.replace(
      'main--sushinbagels.netlify.app',
      'sushinbagels.com'
    )

    if (allParams !== '') {
      srcURL += `${allParams}`
    }

    // domain/f=format,w=width,h=height,q=:percentage/path
    return srcURL + src
  }

  // /path?f=format,w=width,h=height,q=:percentage
  return srcURL + src + '?' + allParams
}
export default StaticallyPath
