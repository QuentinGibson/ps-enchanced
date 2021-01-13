let css_selector = 'tr[style]'

const itemRow = document.querySelectorAll(css_selector)
Array.prototype.forEach.call(itemRow, element => {
  const color = element.style.background
  color.replace(/\s/g, "").toLowerCase();
  switch (color) {
    case '#FFFF00':
    case '#FF0':
    case 'rgb(255,255,0)':
    case 'rgba(255,255,0,0)':
    case 'yellow':
      formatMissingItem(element)
      break
    default:
      break
  }
})

async function formatMissingItem(element) {
  const title = element.childNodes[2].innerHTML
  titleSnippet = title.split(" ").slice(0, 4).join("+")

  const primeNowButton = document.createElement('a')
  primeNowButton.text = "Go to Prime Now"
  amazonButton.href = `https://primenow.amazon.com/search?k=${titleSnippet}`
  primeNowButton.classList.add('button')
  element.childNodes[2].append(amazonButton)
}

