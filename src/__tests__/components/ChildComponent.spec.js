import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChildComponent from '@/components/ChildComponent.vue'

describe('ChildComponent.vue', () => {
  it('se envia el texto al hacer click', async () => {
    const wrapper = mount(ChildComponent)

    await wrapper.find('input').setValue('texto ingresado')

    await wrapper.find('button').trigger('click')

    console.log(wrapper.emitted('enviar-texto'))

    expect(wrapper.emitted('enviar-texto')[0]).toEqual(['texto ingresado'])
  })
})
