const FOOMATO = 'http://localhost:5000'


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
    let restaurants = await this.getRestaurants()

    let menus = restaurants.map(restaurant => {
      return fetch(FOOMATO + `/dailymenu?res_id=${restaurant.id}`)
        .then(response => response.json())
        .then(zomato_menu => {
          return this.__combineRestaurantWithZomatoMenu(restaurant, zomato_menu)
        })
    })
    let burgers = await Promise.all(menus).then(this.__filterOutEmptyMenus)

    let burgersWithDistance = burgers.map(this.__addDistanceToBurger)
    burgers = await Promise.all(burgersWithDistance)

    return burgers
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

  __filterOutEmptyMenus = restaurantsWithMenus => {
    restaurantsWithMenus = restaurantsWithMenus.filter(restaurant => {
      return restaurant
    })
    return this.__concatenateRestaurantMenus(restaurantsWithMenus)
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

  __getCurrentLocation = () => {
    // NOTE: THIS IS DECODEMTL'S COORDINATES, FOR PRACTICE
    return {lat: 45.502057, lng: -73.569345 }
  }
  __locationToString = location => {
    return `${location.lat},${location.lng}`
  }

  // __getDistanceToBurger = async (burger) => {
  //   let origin = this.__locationToString(this.__getCurrentLocation())
  //   let destination = this.__locationToString(burger.restaurant.location)
  //   let dist = (await distance.get({
  //     origin: origin,
  //     destination: destination,
  //     mode: 'walking'
  //   })).distanceValue
  //   return dist
  // }

  __addDistanceToBurger = async (burger) => {
    // burger['distance'] = await this.__getDistanceToBurger(burger)
    return burger
  }

}


export default new FoomenuAPI();