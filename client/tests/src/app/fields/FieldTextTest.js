import React from 'react'
import {mount} from 'enzyme'
import FieldText from 'app/fields/FieldText'

describe('<FieldText />', () => {
  test('should has label tag', () => {
    const appField = mount(<FieldText label="My First Label" />)
    const containLabel = appField.find('label')
    const containInput = appField.find('input[type="text"]')

    expect(containLabel).toBePresent()
    expect(containInput).toBePresent()
  })

  test('should hasent label tag', () => {
    const appField = mount(<FieldText />)
    const containLabel = appField.find('label')
    const containInput = appField.find('input[type="text"]')

    expect(containLabel).not.toBePresent()
    expect(containInput).toBePresent()
  })
  test('should has icon tag', () => {
    const appField = mount(<FieldText icon="lock" />)
    const containLabel = appField.contains(<i className="material-icons">lock</i>)
    const containInput = appField.find('input[type="text"]')

    expect(containLabel).toBeTruthy()
    expect(containInput).toBePresent()
  })

  test('should hasent icon tag', () => {
    const appField = mount(<FieldText />)
    const containLabel = appField.contains(<i className="material-icons">lock</i>)
    const containInput = appField.find('input[type="text"]')

    expect(containLabel).toBeFalsy()
    expect(containInput).toBePresent()
  })

  test('Call callback when on change value', () => {
    const myCB = jest.fn()
    const appInput = mount(<FieldText onChange={myCB} />)

    appInput.find('input').simulate('change', {target: {value: 'My new value'}})
    expect(myCB).toHaveBeenCalled()
  })

  test('Call callback when on focus', () => {
    const myCB = jest.fn()
    const appInput = mount(<FieldText onFocus={myCB} />)

    appInput.find('input').simulate('focus')
    expect(myCB).toHaveBeenCalled()
  })

  test('Call callback when on blur', () => {
    const myCB = jest.fn()
    const appInput = mount(<FieldText onBlur={myCB} />)

    appInput.find('input').simulate('blur')
    expect(myCB).toHaveBeenCalled()
  })
})
