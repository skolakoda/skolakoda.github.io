/* global CodeMirror */

const ulazi = document.querySelectorAll('.ulaz')
const brojUlaza = ulazi.length || 0

for (let i = 0; i < brojUlaza; i++) {
  const ulaz = ulazi[i]
  const value = ulaz.textContent || ulaz.innerText

  // pravi tablet
  const tabletWrapper = document.createElement('div')
  tabletWrapper.classList.add('tablet-wrapper')
  const izlaz = document.createElement('iframe')
  tabletWrapper.appendChild(izlaz)
  const kruzic = document.createElement('div')
  kruzic.classList.add('kruzic')
  const kockica = document.createElement('span')
  kockica.classList.add('kockica')
  kruzic.appendChild(kockica)
  tabletWrapper.appendChild(kruzic)

  const editor = new CodeMirror(node => ulaz.parentNode.replaceChild(node, ulaz), {
    value,
    mode: 'htmlmixed',
    theme: 'monokai',
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true
  })

  const editorWrapper = editor.getWrapperElement()
  editorWrapper.parentNode.insertBefore(tabletWrapper, editorWrapper.nextSibling) // append after
  izlaz.srcdoc = editor.getValue()

  /* EVENTS */
  editorWrapper.on('keyup', () => izlaz.srcdoc = editor.getValue())
}
