const orthodoxSpec = require('orthodox-spec/spec.json');
const spec = require('tape-catch');
const orthodox = require('.');

orthodoxSpec.forEach(testData => {
  spec(testData.what, (test) => {
    test.equal(
      orthodox(testData.input),
      testData.output,
      'real output matches expected `output`'
    );

    test.end();
  });
});
