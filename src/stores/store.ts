import { createStore } from 'vuex'

const products = [
  {
    id: 1,
    name: 'QK65',
    category: 'keyboard',
  },
  {
    id: 2,
    name: 'Portal65',
    category: 'keyboard',
  },
  {
    id: 3,
    name: 'LG',
    category: 'monitor',
  },
  {
    id: 4,
    name: 'Samsung',
    category: 'monitor',
  },
  {
    id: 5,
    name: 'Logitech Mx 3',
    category: 'mouse',
  },
  {
    id: 6,
    name: 'Logitect Lightspeed',
    category: 'mouse',
  },
]

export default createStore({
  state: () => ({
    products,
    selectedCategory: null,
  }),
  mutations: {
    setSelectedCategory(state, category) {
      state.selectedCategory = category
    },
  },
  getters: {
    filteredProducts: (state) => {
      return state.setSelectedCategory
        ? state.products.filter((p) => p.category === state.selectedCategory)
        : state.products
    },
  },
})
