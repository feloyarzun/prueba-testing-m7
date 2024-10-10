import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('useCounter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('contador inicial 0', () => {
    const counterStore = useCounterStore()
    expect(counterStore.count).toBe(0)
  })
  it('verificar funcionamiento de incrementar y reducir', () => {
    const counterStore = useCounterStore()
    counterStore.increment()
    expect(counterStore.count).toBe(1)
    counterStore.decrement()
    expect(counterStore.count).toBe(0)
  })
})
