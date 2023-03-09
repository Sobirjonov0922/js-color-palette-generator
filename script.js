let refreshBtn = document.querySelector('.refresh-btn'),
    colorParent = document.querySelector('.colors')

let maxPaletteBoxes = 12

let generatePalette = () => {
  colorParent.innerHTML = ''

  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16)

    randomHex = `#${randomHex.padStart(6, '0')}`

    let color = document.createElement('li')

    color.classList.add('color')
    color.innerHTML = `
      <div class="rect-box" style="background: ${randomHex}"></div>
      <span class="hex-value">${randomHex}</span>
    `
    color.addEventListener('click', () => copyColor(color, randomHex))

    colorParent.append(color)
  }
}

generatePalette()

let copyColor = (elem, hexVal) => {
  let colorElement = elem.querySelector('.hex-value')

  navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText = 'Copied!'
    setTimeout(() => colorElement.innerText = hexVal, 1000)
  }).catch(() => alert("Failed to copy the color code!"))
}

refreshBtn.addEventListener('click', generatePalette)