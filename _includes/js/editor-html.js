/* global CodeMirror */
{

  const ulazi = document.querySelectorAll('.html-ulaz')
  const params = {
    mode: 'htmlmixed',
    theme: 'monokai',
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true
  }

  /* FUNKCIJE */

  const praviTablet = () => {
    const tabletWrapper = document.createElement('div')
    tabletWrapper.classList.add('tablet-wrapper')
    const kruzic = document.createElement('div')
    kruzic.classList.add('kruzic')
    const kockica = document.createElement('span')
    kockica.classList.add('kockica')
    kruzic.appendChild(kockica)
    tabletWrapper.appendChild(kruzic)
    return tabletWrapper
  }

  const azuriraj = (editor, izlaz) => {
    const blob = new Blob([editor.getValue()], {type : 'text/html'})
    izlaz.src = URL.createObjectURL(blob)
  }

  /* LOGIKA */

  for (let i = 0; i < ulazi.length; i++) {
    const ulaz = ulazi[i]
    const izlaz = document.createElement('iframe')
    params.value = ulaz.textContent || ulaz.innerText

    const tabletWrapper = praviTablet()
    tabletWrapper.appendChild(izlaz)

    const editor = new CodeMirror(
      node => ulaz.parentNode.replaceChild(node, ulaz), params
    )
    const editorWrapper = editor.getWrapperElement()
    editorWrapper.classList.add(...ulaz.classList)
    editorWrapper.parentNode.insertBefore(tabletWrapper, editorWrapper.nextSibling)

    azuriraj(editor, izlaz)

    /* EVENTS */
    editorWrapper.on('keyup', () => azuriraj(editor, izlaz))
  }

}
