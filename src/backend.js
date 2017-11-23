const FOOMATO = 'https://foomato.herokuapp.com';

class FoomenuAPI {
  getCheapestBurger = async () => {
    let burgers = await this.getAllBurgers();
    return burgers.sort((a, b) => {
      return a.price - b.price;
    });
  };

  getNearestBurger = async () => {
    let burgers = await this.getAllBurgers();
    return burgers.sort((a, b) => {
      return a.distance - b.distance;
    });
  };

  getAllBurgers = async () => {
    let restaurants = await this.getRestaurants();

    let menus = restaurants.map(restaurant => {
      return fetch(FOOMATO + `/dailymenu?res_id=${restaurant.id}`)
        .then(response => response.json())
        .then(zomato_menu => {
          return this.__combineRestaurantWithZomatoMenu(
            restaurant,
            zomato_menu
          );
        });
    });
    let burgers = await Promise.all(menus).then(this.__filterOutEmptyMenus);

    let burgersWithDistance = burgers.map(this.__addDistanceToBurger);
    burgers = await Promise.all(burgersWithDistance);

    return burgers;
  };

  getRestaurants = async () => {
    return await fetch(FOOMATO + '/restaurant').then(response =>
      response.json()
    );
  };

  __combineRestaurantWithZomatoMenu = (restaurant, zomato_menu) => {
    let dishes = zomato_menu.daily_menu[0].dishes;
    if (dishes[0])
      return {
        name: restaurant.name,
        location: {
          lat: restaurant.location.latitude,
          lng: restaurant.location.longitude
        },
        menu: dishes
      };
  };

  __filterOutEmptyMenus = restaurantsWithMenus => {
    restaurantsWithMenus = restaurantsWithMenus.filter(restaurant => {
      return restaurant;
    });
    return this.__concatenateRestaurantMenus(restaurantsWithMenus);
  };

  __concatenateRestaurantMenus = restaurants => {
    let allBurgers = [];
    restaurants.forEach(restaurant => {
      allBurgers = allBurgers.concat(
        restaurant.menu.map(dish => {
          dish['restaurant'] = {
            name: restaurant.name,
            location: restaurant.location
          };
          return dish;
        })
      );
    });
    return allBurgers;
  };

  __getCurrentLocation = () => {
    // NOTE: THIS IS DECODEMTL'S COORDINATES, FOR PRACTICE
    return { lat: 45.502057, lng: -73.569345 };
  };

  __getDistanceInMetresBetweenCoordinates(origin, destination) {
    function degreesToRadians(degrees) {
      return degrees * Math.PI / 180;
    }

    let lat1 = origin.lat;
    let lat2 = destination.lat;
    let lng1 = origin.lng;
    let lng2 = destination.lng;

    var earthRadiusKm = 6371;

    var dLat = degreesToRadians(lat2 - lat1);
    var dLng = degreesToRadians(lng2 - lng1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.floor(earthRadiusKm * c * 1000);
  }

  __getDistanceToBurger = burger => {
    let origin = this.__getCurrentLocation();
    let destination = burger.restaurant.location;
    return this.__getDistanceInMetresBetweenCoordinates(origin, destination);
  };

  __addDistanceToBurger = burger => {
    burger['distance'] = this.__getDistanceToBurger(burger);
    return burger;
  };
}

export default new FoomenuAPI();
