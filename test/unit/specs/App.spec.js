import { shallow } from 'vue-test-utils'
import App from '@/components/App'
import Navigation from '@/components/Navigation'

describe('App.vue', () => {
  it('has a nav', () => {
    const wrapper = shallow(App)
    expect(wrapper.contains(Navigation)).toBe(true)
  })
})
