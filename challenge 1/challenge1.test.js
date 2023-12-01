import { findFirstRepeated } from './challenge1'

describe('CHALLENGE 1', () => {
  test('should return 3 with giftIds = [2, 1, 3, 5, 3, 2]', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
  })

  test('should return -1 with giftIds = [1, 2, 3, 4]', () => {
    expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
  })

  test('should return 5 with giftIds = [5, 1, 5, 1]', () => {
    expect(findFirstRepeated([5, 1, 5, 1])).toBe(5)
  })
})
