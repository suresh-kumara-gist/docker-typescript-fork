
/**
 * Returns some strings.
 * This purpusefully defines its return type as a string, but returns an
 * array, to demonstrate that the type checker works, see ./README.md for
 * details.
 * @returns {String}
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
