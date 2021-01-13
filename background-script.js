browser.runtime.onMessage.addListener(message => {
  if (message.command === 'get') getAsin()
})

function getAsin() {
  browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    let tab = tabs[0]; // Safe to assume there will only be one result
    browser.tabs.sendMessage(tab.id, {command: 'asin', url: tab.url})
  }, console.error)
}
