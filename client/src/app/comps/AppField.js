import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {field, label} from 'app/style.css'

class AppField extends Component {
  static propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node
  }

  render () {
    const {icon, children, label: labelStr} = this.props
    const hasLabel = Boolean(labelStr)

    return (
      <div className={field}>
        {icon && <i className="material-icons">{icon}</i>}

        {hasLabel && (
          <label className={label}>
            <span>{labelStr}</span>
            {children}
          </label>
        )}

        {!hasLabel && children}
      </div>
    )
  }
}

export default AppField
