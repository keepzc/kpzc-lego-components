import { shallowMount } from '@vue/test-utils'
import LShape from '../../src/components/LShape'
import { shapeDefaultProps } from '../../src/defaultProps'

describe('LShape.vue', () => {
  const {location} = window
  beforeEach(()=>{
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: ''}
    })
  })
  afterEach(() => {
    window.location = location
  })
  it('default LShape render', () => {
    const props ={
      ...shapeDefaultProps
    }
    const wrapper = shallowMount(LShape, { props })
    // should have certain css attr
    const style = wrapper.attributes().style
    expect(style.includes('background-color'))
    // should not have prop has been filter
    expect(style.includes('actionType')).toBeFalsy()

  })
  it('LShape with actionType and URL should trigger location href change', async () => {
    const props = {
      ...shapeDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
    }
    const wrapper = shallowMount(LShape, { props })
    await wrapper.trigger('click')
    expect(window.location.href).toBe('http://dummy.url')
  })
  it('LShape with isEditing should not trigger location change', async () => {
    const props = {
      ...shapeDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      isEditing: true
    }
    const wrapper = shallowMount(LShape, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe('http://dummy.url')
  })
})
