const getRandomColor = (): string => {
  const hex: string = "0123456789ABCDEF"
  let res: string = "#"
  let i: number = -1
  while (++i < 6) res += hex[Math.floor(Math.random() * 9)] // changed from 16 to favor more contrast
  return res
}

const getOppositeColor = (color: string): string => {
  color = color.slice(1) // pop the '#'
  const rgb = parseInt(color, 16) // rgb <- hex
  const white = 0xffffff
  const invertedColor = "#" + (white - rgb).toString(16).padStart(6, "0")
  return invertedColor
}

const setBtnTextColor = (color: string) => {
  const B = document.querySelectorAll(".btn")
  B.forEach((b) => {
    if (b instanceof HTMLButtonElement) {
      b.style.color = color
    }
  })
}

export { getRandomColor, getOppositeColor, setBtnTextColor }
