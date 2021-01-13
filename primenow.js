const hrefPattern = 'https://aftlite-na.amazon.com/inventory/view_inventory_for_asin?asin='
browser.runtime.onMessage.addListener(message => {
  if (message.command === 'asin') appendButton(message.url)
})
browser.runtime.sendMessage({command: 'get'})
function appendButton(url) {
  const asin = url.substring(url.indexOf('d') + 3, url.indexOf('?'))
  const amazonButton = document.createElement('a')
  amazonButton.text = "Go To Item Page"
  amazonButton.href = `${hrefPattern}${asin}`
  amazonButton.classList.add('button')
  document.getElementById('title_feature_div').append(amazonButton)
}
