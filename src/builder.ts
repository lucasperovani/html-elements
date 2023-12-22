/**
 * Create a HTML element string.
 *
 * @param type - The type of the HTML element.
 * @param id - The ID of the HTML element.
 * @param classes - The classes of the HTML element.
 * @param content - The content of the HTML element.
 * @param extra - The extra content of the element, that the key is the
 * data or another structure and the value.
 * @param end - If the element should be closed.
 *
 * @return The HTML element string.
 */
function builder(
  type: string, id: string, classes: string[],
  content = '', extra = {}, end = true
): string {
  const classesString = classes.join(' ')
  let html = '<' + type + ' '

  // ID and classes
  html += id.length > 0 ? 'id="' + id + '" ' : ''
  html += classesString.length > 0 ? 'class="' + classesString + '"' : ''

  Object.keys(extra).forEach((key) => {
    html += ' ' + key + '="' + extra[key] + '"'
  })

  // First bracket
  html += '>'

  // Inner HTML
  html += content

  // Close bracket
  html += end ? '</' + type + '>' : ''

  return html
}

export { builder }
