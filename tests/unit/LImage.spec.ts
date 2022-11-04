import { shallowMount } from '@vue/test-utils'
import LIMage from '../../src/components/LImage'
import { imageDefaultProps } from '../../src/defaultProps'

describe('LImage.vue', ()=> {
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
    it('default LImage render', ()=> {
        const props ={
            ...imageDefaultProps,
            src:'xxxx.xx'
        }
        const wrapper = shallowMount(LIMage, { props })
        expect(wrapper.attributes('src')).toBe('xxxx.xx')
        const style = wrapper.attributes().style
        expect(style.includes('height'))
        expect(style.includes('src')).toBeFalsy()
    })
    it('LIMage with actionType and URL should trigger location href change', async () => {
        const props = {
          ...imageDefaultProps,
          actionType: 'url',
          url: 'http://dummy.url'
        }
        const wrapper = shallowMount(LIMage, { props })
        await wrapper.trigger('click')
        expect(window.location.href).toBe('http://dummy.url')
      })
      it('LIMage with isEditing should not trigger location change', async () => {
        const props = {
          ...imageDefaultProps,
          actionType: 'url',
          url: 'http://dummy.url',
          isEditing: true
        }
        const wrapper = shallowMount(LIMage , { props })
        await wrapper.trigger('click')
        expect(window.location.href).not.toBe('http://dummy.url')
      })
})