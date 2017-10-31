/* global $ */

const ulazi = $('.ulaz')
const brojUlaza = ulazi.length || 0

function vrednuj(ulaz, izlaz) {
  try {
    izlaz.innerHTML = eval(ulaz.innerText || ulaz.value)
  } catch (e) {}
}

function proveriGresku(ulaz, izlaz) {
  try {
    eval(ulaz.innerText || ulaz.value)
  } catch (e) {
    izlaz.innerHTML = e
  }
}

for (let i = 0; i < brojUlaza; i++) {
  const izlaz = document.createElement('small')
  izlaz.classList.add('vrednost')
  ulazi[i].parentNode.insertBefore(izlaz, ulazi[i].nextSibling)  // append after
  ulazi[i].contentEditable = true
  ulazi[i].on('keyup', () => vrednuj(ulazi[i], izlaz))
  ulazi[i].on('blur', () => proveriGresku(ulazi[i], izlaz))
  vrednuj(ulazi[i], izlaz)
}
