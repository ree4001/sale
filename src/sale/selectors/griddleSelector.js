/* [Reason] Implement select data in griddle follow document
 * http://griddlegriddle.github.io/Griddle/examples/getDataFromRowIntoCell/
 */

// eslint-disable-next-line import/prefer-default-export
export const rowDataSelector = (state, { griddleKey }) =>
state
  .get('data')
  .find(rowMap => rowMap.get('griddleKey') === griddleKey)
  .toJSON()
