import Element from './element';

const html_element_list = [
  // Headers
  {type: 'h1', end: true},
  {type: 'h2', end: true},
  {type: 'h3', end: true},
  {type: 'h4', end: true},
  {type: 'h5', end: true},
  {type: 'h6', end: true},

  // Paragraph
  {type: 'p', end: true},

  // Span
  {type: 'span', end: true},

  // Div
  {type: 'div', end: true},

  // Section
  {type: 'section', end: true},

  // Article
  {type: 'article', end: true},

  // Aside
  {type: 'aside', end: true},

  // Footer
  {type: 'footer', end: true},

  // Header
  {type: 'header', end: true},

  // Link
  {type: 'a', end: true},
]

/**
 * Generate the HTML elements functions that creates an Element.
 *
 * @returns The HTML elements functions.
 */
function generate_html_elements(): { class_list: object } {
  const class_list = {};

  // For each element
  for (const el of html_element_list) {
    // Create the function to create the class
    const elementClass = function(id, classes, content, extra) {
      return new Element(el.type, id, classes, content, extra, el.end);
    }

    // Add the Element to the list
    class_list[el.type] = elementClass;
  }
  return {class_list};
}

// Export functions
const html_element: { class_list: object } =
  generate_html_elements();
export default html_element.class_list;
