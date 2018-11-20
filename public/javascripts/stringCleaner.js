const stringCleaner = function (string) {
  return string.toString().replace(/ /g, '').replace(/,/g, '')
}

module.exports = stringCleaner
