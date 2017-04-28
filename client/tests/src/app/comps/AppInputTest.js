import React from 'react'
import {render, mount} from 'enzyme'
import AppInput from 'app/comps/AppInput'

describe('<AppInput />', () => {
  test('Call callback when button click', () => {
    const myCB = jest.fn()
    const appInput = mount(<AppInput onClick={myCB} />)

    appInput.simulate('click')
    expect(myCB).toHaveBeenCalled()
  })

  test('Render with className', () => {
    const appInput = render(<AppInput className="class-test" />)
    const classAttr = appInput.find('input').prop('attribs').class
    expect(classAttr).toBe('class-test')
  })

  test('Render default type text', () => {
    const appInput = render(<AppInput />)
    const typeAttr = appInput.find('input').prop('attribs').type
    expect(typeAttr).toBe('text')
  })

  test('Render type password', () => {
    const appInput = render(<AppInput type="password" />)
    const typeAttr = appInput.find('input').prop('attribs').type
    expect(typeAttr).toBe('password')
  })

  test('Call callback when on change value', () => {
    const myCB = jest.fn()
    const appInput = mount(<AppInput onChange={myCB} />)

    appInput.find('input').simulate('change', {target: {value: 'My new value'}})
    expect(myCB).toHaveBeenCalled()
  })

  test('Call callback when on focus', () => {
    const myCB = jest.fn()
    const appInput = mount(<AppInput onFocus={myCB} />)

    appInput.find('input').simulate('focus')
    expect(myCB).toHaveBeenCalled()
  })

  test('Call callback when on blur', () => {
    const myCB = jest.fn()
    const appInput = mount(<AppInput onBlur={myCB} />)

    appInput.find('input').simulate('blur')
    expect(myCB).toHaveBeenCalled()
  })
})
