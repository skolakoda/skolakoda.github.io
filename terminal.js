const ideje = [
  'Osnovna namena računara je da računaju. Na primer, unesi: (323+456) / 2 i pritisni enter.',
  'Računari su veoma dobri u ponavljanju. Na primer, unesi:  "Ana voli Milovana ".repeat(10)',
  'Da bi saznao koji je danas datum, unesi: new Date() i pritisni enter.',
  'Računar ti može reći preciznu vrednost broja PI. Unesi: Math.PI i pritisni enter.',
  'Računar ti može dati nasumičan broj između jedan i deset. Unesi: Math.floor(Math.random() * 11) i pritisni enter.',
  'Da bi izračunao koren nekog broja, na primer broja 49, unesi: Math.sqrt(49) i pritisni enter.'
]

document.getElementById('ideja').innerText = ideje[Math.floor(Math.random() * ideje.length)]

document.body.addEventListener('keydown', e => {
  const inputs = document.querySelectorAll('.unos')
  const input = inputs[inputs.length - 1]

  if (e.keyCode === 13) {
    input.setAttribute('readonly', '')

    const result = document.createElement('div')
    try {
      result.innerHTML = eval(input.value)
    } catch (e) {
      result.innerHTML = e
      result.classList.add('error')
    }
    input.parentNode.parentNode.insertBefore(result, input.parentNode.nextSibling)

    const newInput = document.createElement('div')
    newInput.innerHTML = '<span class="blink">> </span><input class="unos">'
    result.parentNode.insertBefore(newInput, result.nextSibling)
    newInput.querySelector('.unos').focus()
  }
})
