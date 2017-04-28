import React, {Component} from 'react'
import {wrapper} from 'auth/style.css'
import {fullWidth} from 'app/style.css'
import AppButton from 'app/comps/AppButton'
import FieldEmail from 'app/fields/FieldEmail'
import FieldPassword from 'app/fields/FieldPassword'

class LoginForm extends Component {
  render () {
    return (
      <div className={wrapper}>
        <h1>DAO Generator</h1>

        <FieldEmail
          label="Email"
        />

        <FieldPassword
          label="Password"
        />

        <AppButton className={fullWidth}>
          Access
        </AppButton>
      </div>
    )
  }
}

export default LoginForm
