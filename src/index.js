
let ansi = require('ansi-escapes')

function listen () {
  let stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding('utf8')
  stdin.on('data', function (key) {
    if (key === '\u0003') {
      process.exit()
    }
  })
}

function write (name) {
  process.stdout.write(name)
}

function cursorHide () {
  write(ansi.cursorHide)
}

function cursorShow () {
  write(ansi.cursorShow)
}

function cursorUp (n = 1) {
  write(ansi.cursorUp(n))
}

function cursorDown (n = 1) {
  write(ansi.cursorDown(n))
}

function scrollUp (n = 1) {
  for (let i = 0; i < n; i++) {
    write(ansi.scrollUp)
  }
}
function scrollDown (n = 1) {
  for (let i = 0; i < n; i++) {
    write(ansi.scrollDown)
  }
}

function clear () {
  write(ansi.clearScreen)
}

module.exports = {
  listen,
  write,
  cursorHide,
  cursorShow,
  cursorUp,
  cursorDown,
  scrollUp,
  scrollDown,
  clear
}
