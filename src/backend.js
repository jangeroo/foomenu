const FOOMATO = 'http://localhost:5000'

class FoomenuAPI {
  getCheapestBurger = async () => {
    let burgers = await this.getAllBurgers()
    let sorted = burgers.sort((a, b) => {
      return a.price - b.price
    })
    return sorted
  }

  getAllBurgers = async () => {
    let restaurants = await this.getRestaurants()

    let promises = restaurants.map(restaurant => {
      return fetch(FOOMATO + `/dailymenu?res_id=${restaurant.id}`)
        .then(response => response.json())
        .then(zomato_menu => {
          return this.__combineRestaurantWithZomatoMenu(restaurant, zomato_menu)
        })
    })

    return Promise.all(promises)
      .then(restaurantsWithMenus => {
        restaurantsWithMenus = restaurantsWithMenus.filter(restaurant => {
          return restaurant
        })
        return this.__concatenateRestaurantMenus(restaurantsWithMenus)
      })
  }

  getRestaurants = async () => {
    return await fetch(FOOMATO + '/restaurant')
      .then(response => response.json())
  }

  __combineRestaurantWithZomatoMenu = (restaurant, zomato_menu) => {
    let dishes = zomato_menu.daily_menu[0].dishes
      if (dishes[0]) return {
        name: restaurant.name,
        location: {
          lat: restaurant.location.latitude,
          lng: restaurant.location.longitude
        },
        menu: dishes
      }
  }

  __concatenateRestaurantMenus = restaurants => {
    let allBurgers = []
    restaurants.forEach(restaurant => {
      allBurgers = allBurgers.concat(
        restaurant.menu.map(dish => {
          dish['restaurant'] = { name: restaurant.name, location: restaurant.location }
          return dish
        })
      )
    })
    return allBurgers
  }

}


export default new FoomenuAPI();