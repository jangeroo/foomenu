import foomenu from './backend'


describe('getCheapestBurger', () => {
  it('returns a list of Burger objects', async () => {
    var burgers = await foomenu.getCheapestBurger()
    expect(burgers.length).not.toBeUndefined()
    expect(burgers[0]).toHaveProperty('name')
    expect(burgers[0]).toHaveProperty('price')
    expect(burgers[0]).toHaveProperty('restaurant')
    expect(burgers[0].restaurant).toHaveProperty('name')
    expect(burgers[0].restaurant).toHaveProperty('location')
    expect(burgers[0].restaurant.location).toHaveProperty('latitude')
    expect(burgers[0].restaurant.location).toHaveProperty('longitude')
  });
  it('sorts the list of Burger objects by price, ascending', async () => {
    var burgers = await foomenu.getCheapestBurger()
    expect(parseFloat(burgers[0].price)).toBeLessThanOrEqual(parseFloat(burgers[burgers.length-1].price))
  });
})

describe('getAllBurgers', () => {
  it('returns a list of Burger objects', async () => {
    var burgers = await foomenu.getAllBurgers()
    expect(burgers.length).not.toBeUndefined()
    expect(burgers[0]).toHaveProperty('name')
    expect(burgers[0]).toHaveProperty('price')
    expect(burgers[0]).toHaveProperty('restaurant')
    expect(burgers[0].restaurant).toHaveProperty('name')
    expect(burgers[0].restaurant).toHaveProperty('location')
    expect(burgers[0].restaurant.location).toHaveProperty('latitude')
    expect(burgers[0].restaurant.location).toHaveProperty('longitude')
  });
})

describe('getRestaurants', () => {
  it('returns a list of restaurants', async () => {
    var restaurants = await foomenu.getRestaurants()
    expect(restaurants.length).toBeGreaterThanOrEqual(1)
    expect(restaurants[0]).toHaveProperty('id')
    expect(restaurants[0]).toHaveProperty('name')
  })
})