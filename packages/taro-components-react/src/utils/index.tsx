import React, { forwardRef } from 'react'

export function throttle (fn, threshold = 250, scope?) {
  let lastTime = 0
  let deferTimer: ReturnType<typeof setTimeout>
  return function (...args) {
    const context = scope || this
    const now = Date.now()
    if (now - lastTime > threshold) {
      fn.apply(this, args)
      lastTime = now
    } else {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        lastTime = now
        fn.apply(context, args)
      }, threshold)
    }
  }
}

export function debounce (fn, ms = 250, scope?) {
  let timer: ReturnType<typeof setTimeout>

  return function (...args) {
    const context = scope || this
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, ms)
  }
}

export function omit (obj, fields) {
  const shallowCopy = Object.assign({}, obj)
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i]
    delete shallowCopy[key]
  }
  return shallowCopy
}

export const createForwardRefComponent = (ReactComponent: any) => {
  const forwardRefComponent = (
    props,
    ref
  ) => <ReactComponent {...props} forwardedRef={ref} />

  return forwardRef(forwardRefComponent)
}
