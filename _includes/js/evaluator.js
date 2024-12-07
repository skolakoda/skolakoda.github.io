// evaluira izraze

{
  const izrazi = document.querySelectorAll('.izraz')
  const brojIzraza = izrazi.length || 0

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

  /* INIT */

  for (let i = 0; i < brojIzraza; i++) {
    const izlaz = document.createElement('small')
    izlaz.classList.add('vrednost')
    izrazi[i].parentNode.insertBefore(izlaz, izrazi[i].nextSibling)
    izrazi[i].contentEditable = true
    izrazi[i].addEventListener('keyup', () => vrednuj(izrazi[i], izlaz))
    izrazi[i].addEventListener('blur', () => proveriGresku(izrazi[i], izlaz))
    vrednuj(izrazi[i], izlaz)
  }
}
