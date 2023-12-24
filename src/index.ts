import builder from './builder';
import Element from './element';

const html_element_list = [
  // Headers
  {type: 'h1', end: true},
  {type: 'h2', end: true},
  {type: 'h3', end: true},
  {type: 'h4', end: true},
  {type: 'h5', end: true},
  {type: 'h6', end: true},

  {type: 'hr', end: false},

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

type HTML_Classes_Type = {
  classes: {
    [key: string]: (
      id?: string,
      classes?: string[],
      content?: (Element | string)[],
      attributes?: object
    ) => Element,
  },
  functions: {
    [key: string]: (
      id?: string,
      classes?: string[],
      content?: string,
      attributes?: object
    ) => string,
  },
};

/**
 * Generate the HTML elements functions that creates an Element.
 *
 * @returns The HTML elements functions.
 */
function generate_html_elements(): HTML_Classes_Type {
  const class_list = {};
  const func_list = {};

  // For each element
  for (const el of html_element_list) {
    // Create the function to create the class
    class_list[el.type] = function(id, classes, content, attributes) {
      return new Element(el.type, id, classes, content, attributes, el.end);
    }

    // Create the functions
    func_list[el.type] = function(id, classes, content, attributes) {
      return builder(el.type, id, classes, content, attributes, el.end);
    }
  }
  return {classes: class_list, functions: func_list};
}

// Export functions
const html_element: HTML_Classes_Type = generate_html_elements();
export default html_element;
