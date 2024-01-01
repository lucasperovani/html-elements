/**
 * Create a HTML element string.
 *
 * @param tagName - The tag name of the HTML element.
 * @param id - The ID of the HTML element.
 * @param classes - The classes of the HTML element.
 * @param innerHTML - The inner HTML of the HTML element.
 * @param attributes - The attributes content of the element, that the key is
 * the data or another structure and the value.
 * @param shoudClose - If the element should be closed.
 *
 * @return The HTML element string.
 */
function builder(
  tagName: string, id = '', classes: string[] = [],
  innerHTML = '', attributes = {}, shoudClose = true
): string {
  const classesString = classes.join(' ')
  let html = '<' + tagName

  // ID and classes
  html += id.length > 0 ? ' id="' + id + '"' : ''
  html += classesString.length > 0 ? ' class="' + classesString + '"' : ''

  Object.keys(attributes).forEach((key) => {
    html += ' ' + key + '="' + attributes[key] + '"'
  })

  // First bracket
  html += '>'

  // Inner HTML
  html += innerHTML

  // Close bracket
  html += shoudClose ? '</' + tagName + '>' : ''

  return html
}

export default builder
