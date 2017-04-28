import React from 'react'
import {mount} from 'enzyme'
import AppField from 'app/comps/AppField'

describe('<AppField />', () => {
  test('should has label tag', () => {
    const appField = mount(<AppField label="My First Label" />)
    const containLabel = appField.contains(<label className="label"><span>My First Label</span></label>)
    expect(containLabel).toBeTruthy()
  })

  test('should hasent label tag', () => {
    const appField = mount(<AppField />)
    const containIcon = appField.contains(<label className="label" />)
    expect(containIcon).toBeFalsy()
  })

  test('should hasent icon tag', () => {
    const appField = mount(<AppField />)
    const containIcon = appField.contains(<i className="material-icons" />)
    expect(containIcon).toBeFalsy()
  })

  test('should has icon tag', () => {
    const appField = mount(<AppField icon="lock" />)
    const containIcon = appField.contains(<i className="material-icons">lock</i>)
    expect(containIcon).toBeTruthy()
  })

  test('should has children when without label', () => {
    const appField = mount(<AppField><input /></AppField>)
    const containInput = appField.contains(<input />)
    expect(containInput).toBeTruthy()
  })

  test('should has children when with label', () => {
    const appField = mount(<AppField label="My First Label"><input /></AppField>)
    const containInput = appField.contains(<label className="label"><span>My First Label</span><input /></label>)
    expect(containInput).toBeTruthy()
  })
})
