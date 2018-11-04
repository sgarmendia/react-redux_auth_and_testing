import React from 'react'
import { mount } from 'enzyme';
import CommentList from 'components/CommentList'
import Root from 'Root';

let component

beforeEach(() => {
  const initialState = {comments: ['comment1', 'comment2', 'comment3'] }
  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {
  component.unmount()
})

it('render one LI element per comment', () => {
  expect(component.find('li').length).toEqual(3)
})

it('shows the right text per comment', () => {
  expect(component.render().text()).toContain('comment2')
  expect(component.render().text()).toContain('comment3')
})
