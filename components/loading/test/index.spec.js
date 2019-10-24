// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Counter from './../index'

describe('Counter', () => {
  test('renders correctly', () => {
    const wrapper = mount(Counter)
    expect(wrapper.element).toMatchSnapshot()
  })
})
