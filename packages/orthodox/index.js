module.exports = (style) => (
  Object.keys(style)
    .map(property => `${property}:${style[property]}`)
    .join(';')
);
