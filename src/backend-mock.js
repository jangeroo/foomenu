class FoomenuAPI {
  getCheapestBurger = async () => {
    let burgers = await this.getAllBurgers()
    return burgers.sort((a, b) => {
      return a.price - b.price
    })
  }

  getNearestBurger = async () => {
    let burgers = await this.getAllBurgers()
    return burgers.sort((a, b) => {
      return a.distance - b.distance
    })
  }

  getAllBurgers = async () => {
    return await mockBurgerList.map(burger => {
      burger['distance'] = Math.floor(Math.random() * 1000)
      return burger
    })
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
    name: 'Whopper',
    price: 4.99,
    restaurant: {
      name: 'Burger King',
      location: { lat: 45, lng: 32 }
    }
  },
  {
    name: 'Big Mac',
    price: 3.99,
    restaurant: {
      name: 'McDonalds',
      location: { lat: 45, lng: 32 }
    }
  },
  {
    name: 'Teen Burger',
    price: 2.99,
    restaurant: {
      name: 'A&W',
      location: { lat: 45, lng: 32 }
    }
  },
  {
    name: 'Momma Burger',
    price: 4.49,
    restaurant: {
      name: 'A&W',
      location: { lat: 45, lng: 32 }
    }
  },
]

