/* global $, CodeMirror */

const editor = CodeMirror.fromTextArea($('#editor-ulaz'), {
  mode: 'htmlmixed',
  theme: 'monokai',
  lineNumbers: true,
  lineWrapping: true,
  autofocus: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  autoCloseTags: true
})

const proslediKod = () => $('#tablet').srcdoc = editor.getValue()

$('.CodeMirror').onkeyup = proslediKod

proslediKod()
