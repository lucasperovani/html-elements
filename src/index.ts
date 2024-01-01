import builder from './builder';
import Element from './element';

const html_element_list = [
  // Headers
  {tagName: 'h1', end: true},
  {tagName: 'h2', end: true},
  {tagName: 'h3', end: true},
  {tagName: 'h4', end: true},
  {tagName: 'h5', end: true},
  {tagName: 'h6', end: true},

  {tagName: 'hr', end: false},

  // Paragraph
  {tagName: 'p', end: true},

  // Span
  {tagName: 'span', end: true},

  // Div
  {tagName: 'div', end: true},

  // Section
  {tagName: 'section', end: true},

  // Article
  {tagName: 'article', end: true},

  // Aside
  {tagName: 'aside', end: true},

  // Footer
  {tagName: 'footer', end: true},

  // Header
  {tagName: 'header', end: true},

  // Link
  {tagName: 'a', end: true},
]

type HTML_Classes_Type = {
  classes: {
    [key: string]: (
      tagName?: string,
      classes?: string[],
      innerHTML?: (Element | string)[],
      attributes?: object
    ) => Element,
  },
  functions: {
    [key: string]: (
      tagName?: string,
      classes?: string[],
      innerHTML?: string,
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
    class_list[el.tagName] = function(id, classes, content, attributes) {
      return new Element(el.tagName, id, classes, content, attributes, el.end);
    }

    // Create the functions
    func_list[el.tagName] = function(id, classes, content, attributes) {
      return builder(el.tagName, id, classes, content, attributes, el.end);
    }
  }
  return {classes: class_list, functions: func_list};
}

// Export functions
const html_element: HTML_Classes_Type = generate_html_elements();
export default html_element;
