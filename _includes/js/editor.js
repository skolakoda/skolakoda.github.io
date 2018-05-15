/*
Editor izvršava JS na dva načina
- evaluira izraze $('.izraz')
- preusmerava console.log u HTML $('.ulaz')
*/

const izrazi = document.querySelectorAll('.izraz')
const ulazi = document.querySelectorAll('.ulaz')
const brojIzraza = izrazi.length || 0
const brojUlaza = ulazi.length || 0

/* FUNCTIONS */

function vrednuj(ulaz, izlaz) {
  try {
    izlaz.innerHTML = eval(ulaz.innerText)
  } catch (e) {}
}

function proveriGresku(ulaz, izlaz) {
  try {
    eval(ulaz.innerText)
  } catch (e) {
    izlaz.innerHTML = e
  }
}

function izvrsi(ulaz, izlaz) {
  // https://stackoverflow.com/questions/30935336
  console.log = (...args) => {
    args.map((arg, i) => izlaz.innerHTML += arg + (args[i + 1] ? ' ' : '<br>'))
  }
  try {
    eval(ulaz.querySelector('code').innerText)
  } catch (e) {
    console.log(e.message)
  }
}

/* INIT */

for (let i = 0; i < brojIzraza; i++) {
  const izlaz = document.createElement('small')
  izlaz.classList.add('vrednost')
  izrazi[i].parentNode.insertBefore(izlaz, izrazi[i].nextSibling) // append after
  izrazi[i].contentEditable = true
  izrazi[i].on('keyup', () => vrednuj(izrazi[i], izlaz))
  izrazi[i].on('blur', () => proveriGresku(izrazi[i], izlaz))
  vrednuj(izrazi[i], izlaz)
}

for (let i = 0; i < brojUlaza; i++) {
  const ulaz = ulazi[i]
  const code = ulaz.querySelector('pre')
  code.contentEditable = true
  code.spellcheck = false

  const izlaz = document.createElement('pre')
  izlaz.classList.add('izlaz')
  ulaz.parentNode.insertBefore(izlaz, ulaz.nextSibling) // append after

  const dugme = document.createElement('button')
  dugme.innerText = 'Izvrši ⚙'
  dugme.onclick = () => izvrsi(ulaz, izlaz)
  ulaz.appendChild(dugme)
}
