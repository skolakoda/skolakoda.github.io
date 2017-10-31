/* global $ */

[...$('.nav-box')].map(el => el.on('transitionend', () => {
  if (!$(`#${el.getAttribute('for')}`).checked) el.scrollTop = 0
}))

{
  const hours = new Date().getHours()
  document.body.classList.add(hours > 6 && hours < 20 ? 'dan' : 'noc')
}
