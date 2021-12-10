export const urlNumbers = (url) => {
  let numberArray = []
  for (let char of url) {
    if (!isNaN(char)) numberArray.push(char)
  }
  return numberArray.join('')
}
