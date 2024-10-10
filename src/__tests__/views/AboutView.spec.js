import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import AboutView from '@/views/AboutView.vue'

describe('Navegacion Router', async () => {
  const routerPrueba = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/about',
        name: 'about',
        component: AboutView
      }
    ]
  })

  it('funciona la vista', async () => {
    routerPrueba.push({ name: 'about' })
    await routerPrueba.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [routerPrueba]
      }
    })

    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})
