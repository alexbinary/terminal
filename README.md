# terminal
Terminal display helper 📺

# Install

Install with npm/yarn :

```
$ npm install https://github.com/alexbinary/terminal.git

$ yarn add https://github.com/alexbinary/terminal.git
```

# Usage

```javascript
let terminal = require('alexbinary.terminal')

terminal.write('foo')   // same as process.stdout.write

terminal.cursorHide()   // hide cursor
terminal.cursorShow()   // show cursor
terminal.cursorUp(2)    // move cursor up 2 rows
terminal.cursorDown(2)  // move cursor down 2 rows
terminal.scrollUp(2)    // scroll up 2 rows
terminal.scrollDown(2)  // scroll down 2 rows
terminal.clear()        // clear screen
```
