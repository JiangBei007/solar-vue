// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from './../index'

describe('Counter', () => {
  test('renders correctly', () => {
    const wrapper = mount(Counter)
    expect(wrapper.element).toMatchSnapshot()
  })
  // Now mount the component and you have the wrapper
  const wrapper = mount(Counter)

  // it's also easy to check for the existence of elements
  it('has a div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })
})
