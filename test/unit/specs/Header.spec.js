import { shallow } from 'vue-test-utils'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(Header)
    expect(wrapper.findAll('a').length)
    .toEqual(4)
  })
})
