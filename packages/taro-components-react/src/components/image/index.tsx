import './style/index.css'

import classNames from 'classnames'
import React from 'react'

import { createForwardRefComponent } from '../../utils/index'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  mode: string
  onError: () => void
  onLoad: (e) => void
  lazyLoad?: boolean
  imgProps?: Record<string, any>
  forwardedRef?: React.MutableRefObject<HTMLDivElement>
}

class Image extends React.Component<IProps> {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false
    }
    this.imageOnLoad = this.imageOnLoad.bind(this)
    // this.observer = {}
  }

  observer: any = {}
  imgRef: any = null

  componentDidMount () {
    if (this.props.lazyLoad) {
      this.observer = new IntersectionObserver(
        entries => {
          // 异步 api 关系
          if (entries[entries.length - 1].isIntersecting) {
            this.setState({ isLoaded: true }, () => {
              // findDOMNode(this).children[0].src = this.props.src
              this.imgRef.src = this.props.src
            })
          }
        },
        {
          rootMargin: '300px 0px'
        }
      )
      this.observer.observe(this.imgRef)
    }
  }

  componentWillUnmount () {
    this.observer.disconnect && this.observer.disconnect()
  }

  imageOnLoad (e) {
    const { onLoad } = this.props
    Object.defineProperty(e, 'detail', {
      enumerable: true,
      writable: true,
      value: {
        width: e.target.width,
        height: e.target.height
      }
    })

    onLoad && onLoad(e)
  }

  render () {
    const {
      className,
      style = {},
      src,
      mode,
      onError,
      lazyLoad,
      imgProps,
      forwardedRef,
      ...reset
    } = this.props
    const cls = classNames(
      'taro-img',
      {
        'taro-img__widthfix': mode === 'widthFix'
      },
      className
    )
    const imgCls = classNames(
      'taro-img__mode-' +
        (mode || 'scaleToFill').toLowerCase().replace(/\s/g, '')
    )

    return (
      <div className={cls} style={style} ref={forwardedRef} {...reset}>
        {lazyLoad ? (
          <img
            ref={img => (this.imgRef = img)}
            className={imgCls}
            data-src={src}
            onLoad={this.imageOnLoad}
            onError={onError}
            {...imgProps}
          />
        ) : (
          <img
            ref={img => (this.imgRef = img)}
            className={imgCls}
            src={src}
            onLoad={this.imageOnLoad}
            onError={onError}
            {...imgProps}
          />
        )}
      </div>
    )
  }
}

export default createForwardRefComponent(Image)
