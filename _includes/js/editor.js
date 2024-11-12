/* global jezici */
/*
Editor izvršava kod na dva načina
  - ako je JS, izvršava kod u pregledaču i ispisuje log u HTML
  - ostale jezike salje na server da se izvrše
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

  function izvrsiJS(kod, izlaz) {
    izlaz.innerHTML = ''
    const originalLog = console.log
    console.log = (...args) =>
      args.map((arg, i) => {
        const val = typeof arg === 'object' ? JSON.stringify(arg) : arg
        izlaz.innerHTML += val + (args[i + 1] ? ' ' : '<br>')
      })
    try {
      eval(kod)
    } catch (e) {
      console.log(e.message)
    }
    // nakon asinhronih poziva
    setTimeout(() => {
      console.log = originalLog
    }, 5000)
  }

  function izvrsiNaServeru(kod, lang, izlaz) {
    const source = encodeURIComponent(kod)
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

  function izvrsi(kod, jezik, izlaz) {
    if (jezik == 'js') izvrsiJS(kod, izlaz)
    else izvrsiNaServeru(kod, jezici[jezik], izlaz)
  }

  /* INIT */

  for (let i = 0; i < brojUlaza; i++) {
    const ulaz = ulazi[i]
    const jezik = ulaz.classList[0].replace('language-', '')
    const codeElement = ulaz.querySelector('code')
    codeElement.contentEditable = true
    codeElement.spellcheck = false

    const editIcon = document.createElement('a')
    const params = `jezik=${jezik}&code=${encodeURIComponent(codeElement.innerText)}`
    editIcon.href = `https://skolakoda.github.io/editor/?${params}`
    editIcon.innerText = '✎'
    editIcon.title = 'Otvori u editoru'
    editIcon.classList.add('edit-icon')
    ulaz.appendChild(editIcon)

    const izlaz = document.createElement('pre')
    izlaz.classList.add('izlaz')
    ulaz.parentNode.insertBefore(izlaz, ulaz.nextSibling)  // append after

    const dugme = document.createElement('button')
    dugme.innerText = 'Izvrši ⚙'
    dugme.onclick = () => izvrsi(codeElement.innerText, jezik, izlaz)
    ulaz.appendChild(dugme)
  }

}
