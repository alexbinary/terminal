
let expect = require('chai').expect

let mockProcess = require('alexbinary.mock-process')
let mockStdout = require('alexbinary.mock-stdout')

let terminal = require('./../src/index')

let stdoutMock = mockStdout.create()

describe('terminal', function () {
  beforeEach(function () {
    mockProcess.mock('stdout', stdoutMock)
    stdoutMock._resetData()
  })
  afterEach(function () {
    mockProcess.restore()
  })
  it('#write()', function () {
    // ## TEST
    terminal.write('foo')
    // ## Assert
    expect(stdoutMock._data).to.equal('foo')
    // ## End
  })
  describe('#cursor', function () {
    it('#hide()', function () {
      // ## TEST
      terminal.cursorHide()
      // ## Assert
      expect(stdoutMock._data).to.equal('\u001b[?25l')
      // ## End
    })
    it('#show()', function () {
      // ## TEST
      terminal.cursorShow()
      // ## Assert
      expect(stdoutMock._data).to.equal('\u001b[?25h')
      // ## End
    })
    it('#up(n)', function () {
      // ## TEST
      terminal.cursorUp(2)
      // ## Assert
      expect(stdoutMock._data).to.equal('\u001b[2A')
      // ## End
    })
    it('#down(n)', function () {
      // ## TEST
      terminal.cursorDown(2)
      // ## Assert
      expect(stdoutMock._data).to.equal('\u001b[2B')
      // ## End
    })
  })
  describe('#screen', function () {
    it('#clear()', function () {
      // ## TEST
      terminal.clear()
      // ## Assert
      expect(stdoutMock._data).to.equal('\u001bc')
      // ## End
    })
  })
  describe('#scroll', function () {
    it('#up()', function () {
      // ## TEST
      terminal.scrollUp(2)
      // ## Assert
      expect(stdoutMock._data).to.equal('\u001b[S\u001b[S')
      // ## End
    })
    it('#down()', function () {
      // ## TEST
      terminal.scrollDown(2)
      // ## Assert
      expect(stdoutMock._data).to.equal('\u001b[T\u001b[T')
      // ## End
    })
  })
})
