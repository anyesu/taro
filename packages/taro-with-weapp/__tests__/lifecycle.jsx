/** @jsx createElement */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement, render } from 'nervjs'
import * as sinon from 'sinon'

import withWeapp from '../src'
import { delay, TaroComponent } from './utils'

describe('lifecycle', () => {
  /**
   * @type {Element} scratch
   */
  let scratch

  beforeEach(() => {
    scratch = document.createElement('div')
  })

  test('created', () => {
    const spy = jest.fn()

    @withWeapp({
      created () {
        spy()
      }
    })
    class A extends TaroComponent {
      render () {
        return <div />
      }
    }

    render(<A />, scratch)

    expect(spy).toBeCalled()
  })

  test('attached', () => {
    const spy = jest.fn()

    @withWeapp({
      attached () {
        spy()
      }
    })
    class A extends TaroComponent {
      render () {
        return <div />
      }
    }

    render(<A />, scratch)

    expect(spy).toBeCalled()
  })

  test('ready should work', (done) => {
    const s1 = sinon.spy()
    const s2 = sinon.spy()

    @withWeapp({
      data: {
        a: ''
      },
      created () {
        s1()
        this.a = 'a'
      },
      attached () {
        s2()
      }
    })
    class A extends TaroComponent {
      render () {
        return <div>{this.a}</div>
      }
    }

    render(<A />, scratch)

    expect(s1.called).toBeTruthy()
    expect(s2.called).toBeTruthy()

    expect(s1.calledBefore(s2))

    delay(() => {
      expect(scratch.textContent).toBe('a')
      done()
    })
  })

  test('detached', () => {
    const s1 = sinon.spy()

    @withWeapp({
      data: {
        a: ''
      },
      detached () {
        s1()
      }
    })
    class A extends TaroComponent {
      render () {
        return <div>{this.a}</div>
      }
    }

    render(<A />, scratch)

    render(<div />, scratch)

    expect(s1.callCount).toBe(1)
  })

  test('onUnload', () => {
    const s1 = sinon.spy()

    @withWeapp({
      data: {
        a: ''
      },
      onUnload () {
        s1()
      }
    })
    class A extends TaroComponent {
      render () {
        return <div>{this.a}</div>
      }
    }

    render(<A />, scratch)

    render(<div />, scratch)

    expect(s1.callCount).toBe(1)
  })

  test('page lifecycle', () => {
    const onLoad = sinon.spy()
    const onReady = sinon.spy()
    const onUnload = sinon.spy()

    @withWeapp({
      data: {
        a: ''
      },
      created () {
        onLoad()
      },
      attached () {
        onReady()
      },
      onUnload () {
        onUnload()
      }
    })
    class A extends TaroComponent {
      render () {
        return <div>{this.a}</div>
      }
    }

    render(<A />, scratch)

    render(<div />, scratch)

    expect(onLoad.callCount).toBe(1)
    expect(onReady.callCount).toBe(1)
    expect(onUnload.callCount).toBe(1)

    expect(onLoad.calledBefore(onReady)).toBeTruthy()
    expect(onReady.calledBefore(onUnload)).toBeTruthy()
  })

  test('component lifecycle', () => {
    const created = sinon.spy()
    const ready = sinon.spy()
    const detached = sinon.spy()

    @withWeapp({
      data: {
        a: ''
      },
      created () {
        created()
      },
      attached () {
        ready()
      },
      detached () {
        detached()
      }
    })
    class A extends TaroComponent {
      render () {
        return <div>{this.a}</div>
      }
    }

    render(<A />, scratch)

    render(<div />, scratch)

    expect(created.callCount).toBe(1)
    expect(ready.callCount).toBe(1)
    expect(detached.callCount).toBe(1)

    expect(created.calledBefore(ready)).toBeTruthy()
    expect(ready.calledBefore(detached)).toBeTruthy()
  })

  test('created should emit this.$router.params as aruguments', () => {
    const spy = jest.fn()

    @withWeapp({
      created (options) {
        spy(options)
      }
    })
    class A extends TaroComponent {
      render () {
        return <div />
      }
    }

    render(<A />, scratch)

    expect(spy).toBeCalledWith({})
  })
})
