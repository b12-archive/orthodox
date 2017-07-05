module.exports = function serialize(style) {
  var result = ''
  for (var property in style) {
    if (result) result += ';'
    result += property + ':' + style[property]
  }
  return result
}
