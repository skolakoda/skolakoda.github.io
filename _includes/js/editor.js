/* global jezici */
/*
Editor izvršava kod na dva načina
  - ako je JS izvrsava i loguje u HTML
  - ostale jezike salje na server da se izvrse
*/
{
  const ulazi = document.querySelectorAll('.ulaz')
  const brojUlaza = ulazi.length || 0
  const target = 'https://www.hackerrank.com/api/shiv/submission'
  const proxy = 'https://proxy-requests.herokuapp.com/'
  const url = proxy + target
  const api_key = 'hackerrank|192673-2110|7220543fdb59d6d1bf59d84a1d33913e63ef41be'
  const testcases = '["1"]' // mora bar jedan

  /* FUNCTIONS */

  function izvrsiJS(ulaz, izlaz) {
    izlaz.innerHTML = ''
    // https://stackoverflow.com/questions/30935336
    const originalLog = console.log
    console.log = (...args) =>
      args.map((arg, i) => izlaz.innerHTML += arg + (args[i + 1] ? ' ' : '<br>'))
    try {
      eval(ulaz.querySelector('code').innerText)
    } catch (e) {
      console.log(e.message)
    }
    console.log = originalLog
  }

  function izvrsiNaServeru(ulaz, lang, izlaz) {
    const source = encodeURIComponent(ulaz.querySelector('code').innerText)
    const params = `source=${source}&lang=${lang}&testcases=${testcases}&api_key=${api_key}`
    izlaz.innerHTML = 'Izvršava se...'

    const http = new XMLHttpRequest()
    http.open('POST', url)
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    http.onload = () => {
      const rezultat = JSON.parse(JSON.parse(http.responseText).response).result
      izlaz.innerHTML = rezultat.stdout ? rezultat.stdout[0] : rezultat.compilemessage.replace(/â/g, '')
    }
    http.onerror = () => izlaz.innerHTML = 'Greška, nema odgovora sa servera.'
    http.send(params)
  }

  function izvrsi(ulaz, jezik, izlaz) {
    if (jezik == 'js') izvrsiJS(ulaz, izlaz)
    else izvrsiNaServeru(ulaz, jezici[jezik], izlaz)
  }

  /* INIT */

  for (let i = 0; i < brojUlaza; i++) {
    const ulaz = ulazi[i]
    const jezik = ulaz.classList[0].replace('language-', '')
    const code = ulaz.querySelector('code')
    code.contentEditable = true
    code.spellcheck = false

    const jezikInfo = document.createElement('span')
    jezikInfo.innerText = jezik
    jezikInfo.classList.add('jezik')
    ulaz.appendChild(jezikInfo)

    const izlaz = document.createElement('pre')
    izlaz.classList.add('izlaz')
    ulaz.parentNode.insertBefore(izlaz, ulaz.nextSibling)  // append after

    const dugme = document.createElement('button')
    dugme.innerText = 'Izvrši ⚙'
    dugme.onclick = () => izvrsi(ulaz, jezik, izlaz)
    ulaz.appendChild(dugme)
  }

}
