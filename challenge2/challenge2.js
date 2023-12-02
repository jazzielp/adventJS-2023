export function manufacture (gifts, materials) {
  // Code here
  const materialsArray = materials.split('')
  const giftsGive = []
  for (const gift of gifts) {
    const giftCharacter = gift.split('')
    let add = true
    for (const character of giftCharacter) {
      if (materialsArray.includes(character) === false) {
        add = false
        break
      }
    }
    if (add) {
      giftsGive.push(gift)
    }
  }
  return giftsGive
}
