{
  const resenja = document.querySelectorAll('.resenje')

  function obrniResenje(el) {
    el.style.display = el.style.display == 'none' ? '' : 'none'
  }

  for (let i = 0; i < resenja.length; i++) {
    const button = document.createElement('button')
    button.innerText = 'Pokaži rešenje'
    button.classList.add('btn-small')
    resenja[i].style.display = 'none'
    resenja[i].parentNode.insertBefore(button, resenja[i])
    button.addEventListener('click', () => obrniResenje(resenja[i]))
  }
}
