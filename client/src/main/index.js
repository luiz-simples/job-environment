import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {main} from 'main/style.css'

class Main extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    const {children} = this.props

    return (
      <div className={main}>
        {children}
      </div>
    )
  }
}

export default Main
