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
    expect(burgers[0].restaurant.location).toHaveProperty('lat')
    expect(burgers[0].restaurant.location).toHaveProperty('lng')
    // expect(burgers[0]).toHaveProperty('distance')
    // expect(typeof parseFloat(burgers[0].distance)).toBe('number')
  });
  it('sorts the list of Burger objects by price, ascending', async () => {
    var burgers = await foomenu.getCheapestBurger()
    expect(parseFloat(burgers[0].price)).toBeLessThanOrEqual(parseFloat(burgers[burgers.length-1].price))
  });
})

// describe('getNearestBurger', () => {
//   it('returns a list of Burger objects', async () => {
//     var burgers = await foomenu.getNearestBurger()
//     expect(burgers.length).not.toBeUndefined()
//     expect(burgers[0]).toHaveProperty('name')
//     expect(burgers[0]).toHaveProperty('price')
//     expect(burgers[0]).toHaveProperty('restaurant')
//     expect(burgers[0].restaurant).toHaveProperty('name')
//     expect(burgers[0].restaurant).toHaveProperty('location')
//     expect(burgers[0].restaurant.location).toHaveProperty('lat')
//     expect(burgers[0].restaurant.location).toHaveProperty('lng')
//     expect(burgers[0]).toHaveProperty('distance')
//     expect(typeof parseFloat(burgers[0].distance)).toBe('number')
//   });
//   it('sorts the list of Burger objects by distance, ascending', async () => {
//     var burgers = await foomenu.getNearestBurger()
//     expect(parseFloat(burgers[0].distance)).toBeLessThanOrEqual(parseFloat(burgers[burgers.length - 1].distance))
//   });
// })

describe('getAllBurgers', () => {
  it('returns a list of Burger objects', async () => {
    var burgers = await foomenu.getAllBurgers()
    expect(burgers.length).not.toBeUndefined()
    expect(burgers[0]).toHaveProperty('name')
    expect(burgers[0]).toHaveProperty('price')
    expect(burgers[0]).toHaveProperty('restaurant')
    expect(burgers[0].restaurant).toHaveProperty('name')
    expect(burgers[0].restaurant).toHaveProperty('location')
    expect(burgers[0].restaurant.location).toHaveProperty('lat')
    expect(burgers[0].restaurant.location).toHaveProperty('lng')
    // expect(burgers[0]).toHaveProperty('distance')
    // expect(typeof parseFloat(burgers[0].distance)).toBe('number')
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