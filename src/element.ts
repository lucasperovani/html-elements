import builder from './builder';

class Element {
  type: string;
  id: string;
  classes: string[];
  content: (Element | string)[];
  attributes: object;
  end: boolean;

  constructor(
    type, id, classes = [], content = [], attributes = {}, end = true,
  ) {
    this.type = type;
    this.id = id;
    this.classes = classes;
    this.content = content;
    this.attributes = attributes;
    this.end = end;
  }

  /**
   * Get the type of the element.
   *
   * @returns The type of the element.
   */
  getType(): string {
    return this.type;
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
   * Get the content of the element.
   *
   * @returns The content of the element.
   */
  getContent(): (Element | string)[] {
    return this.content;
  }

  /**
   * Set the content of the element.
   *
   * @param content - The content of the element.
   */
  setContent(content: Element[]): void {
    this.content = content;
  }

  /**
   * Append a content to the element.
   *
   * @param content - The content to append to the element.
   */
  appendContent(content: Element|string): void {
    this.content.push(content);
  }

  /**
   * Append contents to the element.
   *
   * @param content - The contents to append to the element.
   */
  appendContents(content: (Element | string)[]): void {
    this.content = this.content.concat(content);
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
    let content = '';

    for (const element of this.content) {
      if (typeof element === 'string') content += element;
      else content += element.toHTML();
    }

    return builder(
      this.type, this.id, this.classes, content, this.attributes, this.end,
    )
  }
}

export default Element;
