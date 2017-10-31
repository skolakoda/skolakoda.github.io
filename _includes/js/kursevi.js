/* global $ */

const select = $('select')
const kutijice = [...$('.book, .kurs-info')]
const putId = new URL(location).searchParams.get('put')

/*
  Svaki put sadrzi vise kurseva; id kurseva je u bazi, id puteva na stranici;
  osim kurseva, i elementi stranice imaju svoj id za prikaz;
*/
const putevi = {
  0: [1, 2, 3, 4, 5, 7, 8, 9, 10, 100],
  1: [1, 101],
  2: [1, 2, 4, 100, 102],
  3: [1, 7, 8, 103],
  6: [2, 3, 100, 106],
  4: [1, 2, 7, 8, 104],
  5: [2, 9, 100, 105],
  7: [1, 2, 3, 4, 5, 100, 107],
  8: [1, 2, 3, 4, 7, 8, 100, 108],
  9: [10, 109]
}

function azuriraj() {
  kutijice.map(el => {
    const id = Number(el.getAttribute('data-id'))
    el.style.display = putevi[select.value].includes(id) ? 'block' : 'none'
  })
}

window.onload = () => {
  select.value = putId || 0
  azuriraj()
}

select.onchange = () => {
  window.history.pushState({}, '', `?put=${select.value}`)
  azuriraj()
}
