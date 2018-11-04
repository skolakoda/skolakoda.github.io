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

  for (let i = 0; i < ulazi.length; i++) {
    const ulaz = ulazi[i]
    params.value = ulaz.textContent || ulaz.innerText

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

    const editor = new CodeMirror(
      node => ulaz.parentNode.replaceChild(node, ulaz), params
    )
    const editorWrapper = editor.getWrapperElement()
    editorWrapper.classList.add(...ulaz.classList)
    editorWrapper.parentNode.insertBefore(tabletWrapper, editorWrapper.nextSibling) 
    // append after
    izlaz.srcdoc = editor.getValue()

    /* EVENTS */
    editorWrapper.on('keyup', () => izlaz.srcdoc = editor.getValue())
  }

}
