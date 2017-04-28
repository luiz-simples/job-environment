import React, {Component} from 'react'
import AppField from 'app/comps/AppField'
import AppInput from 'app/comps/AppInput'

class FieldEmail extends Component {
  render () {
    return (
      <AppField {...this.props}>
        <AppInput
          {...this.props}
          type="email"
        />
      </AppField>
    )
  }
}

export default FieldEmail
