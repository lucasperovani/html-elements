import builder from './builder';

class Element {
  tagName: string;
  id: string;
  classes: string[];
  innerHTML: (Element | string)[];
  attributes: object;
  shouldClose: boolean;

  constructor(
    tagName, id, classes = [], innerHTML = [], attributes = {},
    shouldClose = true,
  ) {
    this.tagName = tagName;
    this.id = id;
    this.classes = classes;
    this.innerHTML = innerHTML;
    this.attributes = attributes;
    this.shouldClose = shouldClose;
  }

  /**
   * Get the tag name of the element.
   *
   * @returns The tag name of the element.
   */
  getTagName(): string {
    return this.tagName;
  }

  /**
   * Get the ID of the element.
   *
   * @returns The ID of the element.
   */
  getID(): string {
    return this.id;
  }

  /**
   * Set the ID of the element.
   *
   * @param id - The ID of the element.
   */
  setID(id: string): void {
    this.id = id;
  }

  /**
   * Get the classes of the element.
   *
   * @returns The classes of the element.
   */
  getClasses(): string[] {
    return this.classes;
  }

  /**
   * Set the classes of the element.
   *
   * @param classes - The classes of the element.
   */
  setClasses(classes: string[]): void {
    this.classes = classes;
  }

  /**
   * Append a class to the element.
   *
   * @param classe - The class to append to the element.
   */
  appendClass(classe: string): void {
    this.classes.push(classe);
  }

  /**
   * Append classes to the element.
   *
   * @param classes - The classes to append to the element.
   */
  appendClasses(classes: string[]): void {
    this.classes = this.classes.concat(classes);
  }

  /**
   * Get the inner HTML of the element.
   *
   * @returns The inner HTML of the element.
   */
  getInnerHTML(): (Element | string)[] {
    return this.innerHTML;
  }

  /**
   * Set the inner HTML of the element.
   *
   * @param innerHTML - The inner HTML of the element.
   */
  setContent(innerHTML: Element[]): void {
    this.innerHTML = innerHTML;
  }

  /**
   * Append a inner HTML to the element.
   *
   * @param innerHTML - The inner HTML to append to the element.
   */
  appendContent(innerHTML: Element|string): void {
    this.innerHTML.push(innerHTML);
  }

  /**
   * Append inner HTML to the element.
   *
   * @param innerHTML - The inner HTML to append to the element.
   */
  appendContents(innerHTML: (Element | string)[]): void {
    this.innerHTML = this.innerHTML.concat(innerHTML);
  }

  /**
   * Get the attributes of the element.
   *
   * @returns The attributes of the element.
   */
  getAttributes(): object {
    return this.attributes;
  }

  /**
   * Set the attributes of the element.
   *
   * @param attributes - The attributes of the element.
   */
  setAttributes(attributes: object): void {
    this.attributes = attributes;
  }

  /**
   * Append an attribute to the element.
   *
   * @param key - The key of the attribute.
   * @param value - The value of the attribute.
   */
  appendAttribute(key: string, value: string): void {
    this.attributes[key] = value;
  }

  /**
   * Append attributes to the element.
   *
   * @param attributes - The attributes to append to the element.
   */
  appendAttributes(attributes: object): void {
    this.attributes = Object.assign(this.attributes, attributes);
  }

  /**
   * Get the HTML string generated.
   *
   * @returns The HTML string.
   */
  toHTML(): string {
    let innerHTML = '';

    for (const element of this.innerHTML) {
      if (typeof element === 'string') innerHTML += element;
      else innerHTML += element.toHTML();
    }

    return builder(
      this.tagName, this.id, this.classes, innerHTML, this.attributes,
      this.shouldClose,
    )
  }
}

export default Element;
