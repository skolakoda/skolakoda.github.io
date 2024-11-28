const $ = s =>
  document.querySelectorAll(s).length > 1 ? document.querySelectorAll(s) : document.querySelector(s)

EventTarget.prototype.on = EventTarget.prototype.addEventListener

const createCanvas = (width = 400, height = 300) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  document.querySelector('.ulaz').insertAdjacentElement('afterend', canvas)
  return canvas
}
