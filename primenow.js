const hrefPattern = 'change_this'
browser.runtime.onMessage.addListener(message => {
  if (message.command === 'asin') appendButton(message.url)
})
browser.runtime.sendMessage({command: 'get'})
function appendButton(url) {
  const asin = url.substring(url.indexOf('d') + 2, url.indexOf('?'))
  const amazonButton = document.createElement('a')
  amazonButton.text = "Go To Item Page"
  amazonButton.href = `${hrefPattern}${asin}`
  amazonButton.classList.add('button')
  document.getElementById('title_feature_div').append(amazonButton)
}
