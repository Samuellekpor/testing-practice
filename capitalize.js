function capitalize(string) {
  const firstLetter = string.charAt(0).toUpperCase();
  const newString = firstLetter + string.slice(1);
  return newString;
}

module.exports = capitalize;