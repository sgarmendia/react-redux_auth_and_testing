import React from 'react'
import { mount } from 'enzyme';
import moxios from 'moxios'
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: Array(50).fill().map((_, i) => ({ name: `Comment${i}` }))
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('Fetches the list of comments and displays them', (done) => {
  const component = mount(
    <Root>
      <App />
    </Root>
  )
  component.find('.fetch-comments').simulate('click')
  moxios.wait(() => {
    component.update()
    expect(component.find('li').length).toEqual(50)
    done()
    component.unmount()
  });
})