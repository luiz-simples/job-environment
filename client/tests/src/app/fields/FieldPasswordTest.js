import React from 'react'
import {mount} from 'enzyme'
import FieldPassword from 'app/fields/FieldPassword'

describe('<FieldPassword />', () => {
  test('should has label tag', () => {
    const appField = mount(<FieldPassword label="My First Label" />)
    const containLabel = appField.find('label')
    const containInput = appField.find('input[type="password"]')

    expect(containLabel).toBePresent()
    expect(containInput).toBePresent()
  })

  test('should hasent label tag', () => {
    const appField = mount(<FieldPassword />)
    const containLabel = appField.find('label')
    const containInput = appField.find('input[type="password"]')

    expect(containLabel).not.toBePresent()
    expect(containInput).toBePresent()
  })
  test('should has icon tag', () => {
    const appField = mount(<FieldPassword icon="lock" />)
    const containLabel = appField.contains(<i className="material-icons">lock</i>)
    const containInput = appField.find('input[type="password"]')

    expect(containLabel).toBeTruthy()
    expect(containInput).toBePresent()
  })

  test('should hasent icon tag', () => {
    const appField = mount(<FieldPassword />)
    const containLabel = appField.contains(<i className="material-icons">lock</i>)
    const containInput = appField.find('input[type="password"]')

    expect(containLabel).toBeFalsy()
    expect(containInput).toBePresent()
  })

  test('Call callback when on change value', () => {
    const myCB = jest.fn()
    const appInput = mount(<FieldPassword onChange={myCB} />)

    appInput.find('input').simulate('change', {target: {value: 'My new value'}})
    expect(myCB).toHaveBeenCalled()
  })

  test('Call callback when on focus', () => {
    const myCB = jest.fn()
    const appInput = mount(<FieldPassword onFocus={myCB} />)

    appInput.find('input').simulate('focus')
    expect(myCB).toHaveBeenCalled()
  })

  test('Call callback when on blur', () => {
    const myCB = jest.fn()
    const appInput = mount(<FieldPassword onBlur={myCB} />)

    appInput.find('input').simulate('blur')
    expect(myCB).toHaveBeenCalled()
  })
})
