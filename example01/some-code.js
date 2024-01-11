
/**
 * Returns some strings.
 * @returns {String[]}
 */
function a() {
  return [
    'hello',
    'world',
  ];
}

/**
 * Prints some strings to the console.
 * @returns undefined
 */
function b() {
  a().forEach((item) => {
    console.log(item);
  });
}
