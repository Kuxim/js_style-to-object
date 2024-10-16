function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .filter(line => line.trim())
    .forEach(line => {
      const [property, value] = line.split(':');
      if (property && value) {
        const key = property.trim();
        const val = value.trim();
        styles[key] = val;
      }
    });

  return styles;
}

module.exports = convertToObject;
