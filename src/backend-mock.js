class FoomenuAPI {
  getCheapestBurger = async () => {
    return await mockBurgerList
  }

  getAllBurgers = async () => {
    return await mockBurgerList
  }

  getRestaurants = async () => {
    return await mockRestaurantList
  }
}


export default new FoomenuAPI();

var mockRestaurantList = [
  { id: 'resto1', name: 'McDonalds' },
  { id: 'resto2', name: 'A&W' },
  { id: 'resto3', name: 'Burger King' },
]

var mockBurgerList = [
  {
    name: 'Teen Burger',
    price: 2.99,
    restaurant: {
      name: 'A&W',
      location: { latitude: 45, longitude: 32 }
    }
  },
  {
    name: 'Big Mac',
    price: 3.99,
    restaurant: {
      name: 'McDonalds',
      location: { latitude: 45, longitude: 32 }
    }
  },
  {
    name: 'Momma Burger',
    price: 4.49,
    restaurant: {
      name: 'A&W',
      location: { latitude: 45, longitude: 32 }
    }
  },
  {
    name: 'Whopper',
    price: 4.99,
    restaurant: {
      name: 'Burger King',
      location: { latitude: 45, longitude: 32 }
    }
  }
]
