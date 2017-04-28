import React from 'react'
import {mount, render} from 'enzyme'
import AppButton from 'app/comps/AppButton'

describe('<AppButton />', () => {
  test('Show button text', () => {
    const appButton = mount(<AppButton>My First Button</AppButton>)
    const buttonText = appButton.text()
    expect(buttonText).toBe('My First Button')
  })

  test('Call callback when button click', () => {
    const myCB = jest.fn()
    const appButton = mount(<AppButton onClick={myCB}>Click me!</AppButton>)
    const buttonText = appButton.text()

    appButton.simulate('click')
    expect(myCB).toHaveBeenCalled()
    expect(buttonText).toBe('Click me!')
  })

  test('Render with className', () => {
    const appButton = render(<AppButton className="class-test">Click me!</AppButton>)
    const classAttr = appButton.find('button').prop('class')
    expect(classAttr).toBe('class-test')
  })

  test('Render any property', () => {
    const appButton = render(<AppButton id="id-test">Click me!</AppButton>)
    const idAttr = appButton.find('button').prop('id')
    expect(idAttr).toBe('id-test')
  })
})
