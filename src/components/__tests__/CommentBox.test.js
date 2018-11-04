import React from 'react'
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox'
import Root from 'Root';

let component

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  )
})

afterEach(() => {
  component.unmount()
})

it('has a textarea and two buttons', () => {
  expect(component.find('textarea').length).toEqual(1)
  expect(component.find('button').length).toEqual(2)
})

describe('textarea tests', () => {
  beforeEach(() => {
    component.find('textarea').simulate('change', { target: { value: 'This is a comment' }})
    component.update()
  })

  it('has a textarea where user can type in', () => {
    expect(component.find('textarea').prop('value')).toEqual('This is a comment')
  })
  
  it('has a form element that cleans the textarea on submit', () => {
    component.find('form').simulate('submit')
    component.update()
    expect(component.find('textarea').prop('value')).toEqual('')
  })
})