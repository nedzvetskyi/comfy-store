import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price)
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    }
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }

  if (action.type === SORT_PRODUCTS) {
    let tempProducts = { ...state.filtered_products }
    if (state.sort === 'price-highest') {
      tempProducts = state.filtered_products.sort((a, b) => {
        return b.price - a.price
      })
    }
    if (state.sort === 'price-lowest') {
      tempProducts = state.filtered_products.sort((a, b) => {
        return a.price - b.price
      })
    }
    if (state.sort === 'name-a') {
      tempProducts = state.filtered_products.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (state.sort === 'name-z') {
      tempProducts = state.filtered_products.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return { ...state, filtered_products: tempProducts }
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state
    const { text, category, company, price, shipping, color } = state.filters

    let tempProducts = [...all_products]
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.startsWith(text.toLowerCase())
      )
    }
    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      )
    }
    if (company !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      )
    }
    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) =>
        product.colors.includes(color)
      )
    }
    if (price < state.filters.max_price) {
      tempProducts = tempProducts.filter((product) => product.price <= price)
    }
    if (shipping) {
      tempProducts = tempProducts.filter((product) => product.shipping === true)
    }

    return { ...state, filtered_products: tempProducts }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
