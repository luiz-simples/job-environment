import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {button} from 'app/style.css'

class AppButton extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string
  }

  render () {
    const {onClick, className, children} = this.props

    return (
      <button
        {...this.props}
        onClick={onClick}
        className={!className ? button : className}
      >
        {children}
      </button>
    )
  }
}

export default AppButton
