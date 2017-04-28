import PropTypes from 'prop-types'
import React, {Component} from 'react'

class AppInput extends Component {
  static propTypes = {
    type: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    type: 'text'
  }

  constructor (props) {
    super(props)

    this.handlerBlur = this.handlerBlur.bind(this)
    this.handlerFocus = this.handlerFocus.bind(this)
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerBlur (evt) {
    const {onBlur} = this.props
    const {parentElement: parent} = this.refs.input
    if (parent) parent.setAttribute('data-focus', false)
    onBlur ? onBlur(evt) : evt.preventDefault()
  }

  handlerFocus (evt) {
    const {onFocus} = this.props
    const {parentElement: parent} = this.refs.input
    if (parent) parent.setAttribute('data-focus', true)
    onFocus ? onFocus(evt) : evt.preventDefault()
  }

  handlerChange (evt) {
    const {onChange} = this.props
    const {value: valueStr, parentElement: parent} = this.refs.input

    if (parent) {
      const isFilled = Boolean(String(valueStr || '').trim() !== '')
      parent.setAttribute('data-dirty', true)
      parent.setAttribute('data-filled', isFilled)
    }

    onChange ? onChange(evt) : evt.preventDefault()
  }

  render () {
    const {type} = this.props
    const {handlerBlur, handlerFocus, handlerChange} = this

    return (
      <input
        ref="input"
        {...this.props}
        type={type}
        onBlur={handlerBlur}
        onFocus={handlerFocus}
        onChange={handlerChange}
      />
    )
  }
}

export default AppInput
