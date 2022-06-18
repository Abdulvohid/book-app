export const getters = {
  productsList: (state) => {
    return state.productsList
  },
}

export const state = () => {
  return {
    productsList: [],
  }
}

export const mutations = {
  SET_PRODUCTS_LIST(state, payload) {
    state.productsList = payload
  },
}

export const actions = {
  changeProducts(ctx, data) {
    const sendData = data.items.map((el) => {
      return {
        id: el.id,
        name: el.volumeInfo.title,
        authors: el.volumeInfo.authors,
        img: el.volumeInfo.imageLinks.smallThumbnail
          ? el.volumeInfo.imageLinks.smallThumbnail
          : 'Image no',
        price: el.volumeInfo.publishedDate,
        link: el.saleInfo.buyLink,
        description: el.volumeInfo.description,
        language: el.volumeInfo.language,
        pageCount: el.volumeInfo.pageCount,
        publishedDate: el.volumeInfo.publishedDate,
      }
    })
    console.log(sendData)
    ctx.commit('SET_PRODUCTS_LIST', sendData)
  },
}
