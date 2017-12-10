import { shallow } from 'vue-test-utils'
import Navigation from '@/components/Navigation'

describe('Navigation.vue', () => {
  const wrapper = shallow(Navigation)
  console.log(wrapper.vm.$route)
  it('should render correct contents', () => {
    expect(wrapper.findAll('a').length)
    .toEqual(4)
  })
})
