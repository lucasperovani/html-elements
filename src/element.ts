import { builder } from './builder';

class Element {
  type: string;
  id: string;
  classes: string[];
  content: Element[];
  extra: object;
  end: boolean;

  constructor(
    type, id, classes = [], content = [], extra = {}, end = true,
  ) {
    this.type = type;
    this.id = id;
    this.classes = classes;
    this.content = content;
    this.extra = extra;
    this.end = end;
  }

  getType(): string {
    return this.type;
  }

  getID(): string {
    return this.id;
  }

  setID(id: string): void {
    this.id = id;
  }

  getClasses(): string[] {
    return this.classes;
  }

  setClasses(classes: string[]): void {
    this.classes = classes;
  }

  appendClass(classe: string): void {
    this.classes.push(classe);
  }

  appendClasses(classes: string[]): void {
    this.classes = this.classes.concat(classes);
  }

  getContent(): Element[] {
    return this.content;
  }

  setContent(content: Element[]): void {
    this.content = content;
  }

  appendContent(content: Element): void {
    this.content.push(content);
  }

  appendContents(content: Element[]): void {
    this.content = this.content.concat(content);
  }

  getExtra(): object {
    return this.extra;
  }

  setExtra(extra: object): void {
    this.extra = extra;
  }

  appendExtra(key: string, value: string): void {
    this.extra[key] = value;
  }

  appendExtras(extra: object): void {
    this.extra = Object.assign(this.extra, extra);
  }

  toHTML(): string {
    let content = '';

    for (const element of this.content) {
      content += element.toHTML();
    }

    return builder(
      this.type, this.id, this.classes, content, this.extra, this.end,
    )
  }
}

export default Element;
