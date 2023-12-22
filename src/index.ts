import { builder } from './builder';

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
 * Generate the HTML elements functions.
 *
 * @returns The HTML elements functions.
 */
function generate_html_elements_function(): object {
  const func_list = {};

  // For each element
  for (const el of html_element_list) {
    // Build the function
    const func = function (id, classes, content, extra) {
      return builder(el.type, id, classes, content, extra, el.end);
    }

    // Add the function to the list
    func_list[el.type] = func;
  }
  return func_list;
}

// Export functions
const html_element_functions = generate_html_elements_function()
export default html_element_functions;
