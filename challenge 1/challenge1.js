export function findFirstRepeated (gifts) {
  // Code here
  const numTraveled = []
  for (const id of gifts) {
    if (numTraveled.includes(id)) {
      return id
    }
    numTraveled.push(id)
  }
  return -1
}
