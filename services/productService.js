import Products from '@/assets/data/products'

class ProductService {
  get() {
    const products = Products
    // const product = await api.get()

    return products
  }

  getById(id) {
    const product = Products.find((product) => product.id === id)
    // const product = await api.getProduct({ id })

    return product
  }

  getByTerm(term) {
    term = term.toLowerCase()

    const products = Products.filter((product) => {
      const title = product.title.toLowerCase()

      return title.includes(term)
    })
    // const product = await api.getProduct({ term })

    return products
  }
}

export default new ProductService
