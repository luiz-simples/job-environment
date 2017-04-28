import React, {Component} from 'react'
import AppField from 'app/comps/AppField'
import AppInput from 'app/comps/AppInput'

class FieldPassword extends Component {
  render () {
    return (
      <AppField {...this.props}>
        <AppInput
          {...this.props}
          type="password"
        />
      </AppField>
    )
  }
}

export default FieldPassword
