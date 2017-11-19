class FoomenuAPI {
  getCheapestBurger = async () => {
    return await mockBurgerList
  }
}


export default new FoomenuAPI();


var mockBurgerList = [
  {
    name: 'Teen Burger',
    price: 2.99,
    restaurant: {
      name: 'A&W',
    }
  },
  {
    name: 'Big Mac',
    price: 3.99,
    restaurant: {
      name: 'McDonalds',
    }
  },
  {
    name: 'Momma Burger',
    price: 4.49,
    restaurant: {
      name: 'A&W'
    }
  },
  {
    name: 'Whopper',
    price: 4.99,
    restaurant: {
      name: 'Burger King',
    }
  }
]