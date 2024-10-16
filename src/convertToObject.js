function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => line.trim())
    .reduce((acc, line) => {
      const [property, value] = line.split(':');

      if (property && value) {
        const trimmedProperty = property.trim();
        const trimmedValue = value.trim();

        acc[trimmedProperty] = trimmedValue;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
