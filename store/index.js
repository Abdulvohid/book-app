export const getters = {
  productsList: (state) => {
    return state.productsList
  },

  has_content: (state) => state.has_content,

  loading: (state) => state.loading,
}

export const state = () => {
  return {
    productsList: [],
    has_content: 'pending',
    loading: false,
  }
}

export const mutations = {
  SET_PRODUCTS_LIST(state, payload) {
    state.productsList = payload
  },

  SET_LOADING(state, payload) {
    state.loading = payload
  },

  SET_HAS_CONTENT(state, payload) {
    state.has_content = payload
  },
}

export const actions = {
  changeProducts(ctx, data) {
    ctx.commit('SET_LOADING', true)
    ctx.commit('SET_HAS_CONTENT', 'pending')

    const sendData = data.items.map((el) => {
      return {
        id: el.id,
        name: el.volumeInfo.title,
        authors: el.volumeInfo.authors,
        img: el.volumeInfo.imageLinks.smallThumbnail
          ? el.volumeInfo.imageLinks.smallThumbnail
          : 'Image no',
        link: el.saleInfo.buyLink,
        description: el.volumeInfo.description,
        language: el.volumeInfo.language,
        pageCount: el.volumeInfo.pageCount,
        publishedDate: el.volumeInfo.publishedDate,
      }
    })
    ctx.commit('SET_PRODUCTS_LIST', sendData)
    ctx.commit('SET_LOADING', false)
    ctx.commit('SET_HAS_CONTENT', !sendData.length ? 'no_content' : 'content')
  },
}
