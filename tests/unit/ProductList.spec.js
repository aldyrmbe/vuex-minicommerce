import { createLocalVue, shallowMount } from '@vue/test-utils'
import store from '@/store'
import Vuex from 'vuex'
import ProductList from '@/components/ProductList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProductList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'adsdasdasdasd'
    const wrapper = shallowMount(ProductList, {
      propsData: { msg },
      stubs: ['router-link'],
      store
    })
    expect(wrapper.text()).toMatch(msg)
  })
  
})
