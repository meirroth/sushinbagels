document.addEventListener('DOMContentLoaded', () => {
  var userAgent = navigator.userAgent.toLowerCase()
  var isIOS =
    userAgent.indexOf('iphone') !== -1 ||
    userAgent.indexOf('ipad') !== -1 ||
    userAgent.indexOf('ipod') !== -1
  var isAndroid = userAgent.indexOf('android') !== -1
  var $downloadSignal = $('.get-signal')
  if (isIOS || isAndroid) {
    var url = isIOS
      ? 'https://apps.apple.com/us/app/signal-private-messenger/id874139669'
      : 'https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms'
  }
})
