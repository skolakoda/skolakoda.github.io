{
  const resenja = document.querySelectorAll('.resenje')
  const brojResenja = resenja.length || 0

  function obrniResenje(el) {
    el.style.display = el.nextSibling.style.display = el.style.display == 'none' ? '' : 'none'
  }

  for (let i = 0; i < brojResenja; i++) {
    const button = document.createElement('button')
    button.innerText = 'Pokaži rešenje'
    button.classList.add('btn-small')
    resenja[i].style.display = 'none'
    resenja[i].parentNode.insertBefore(button, resenja[i])
    button.on('click', () => obrniResenje(resenja[i]))
  }
}
