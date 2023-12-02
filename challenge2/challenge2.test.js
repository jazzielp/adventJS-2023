import { manufacture } from './challenge2'
describe('TEST SUITE FOR CHALLENGE 2', () => {
  test('should return [tren, oso] with the data [tren, oso, pelota] - tronesa', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual(['tren', 'oso'])
  })

  test('should return ["puzzle"] with the data [juego, puzzle] - jlepuz', () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toEqual(['puzzle'])
  })

  test('should return [] with the data [libro, ps5] - psli', () => {
    expect(manufacture(['libro', 'ps5'], 'psli')).toEqual([])
  })
})
