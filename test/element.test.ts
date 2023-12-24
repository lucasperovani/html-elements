import { describe, test, expect } from 'vitest';
import elements from '../dist/index';
const { div, h5, hr } = elements.classes;


describe('Testing Classes', () => {
  test('Testing single div', () => {
    expect(div().toHTML()).toBe('<div></div>');
  })

  test('Testing div with id', () => {
    expect(div('test').toHTML()).toBe('<div id="test"></div>');
  })

  test('Testing div with classes', () => {
    expect(div('', ['test1']).toHTML())
      .toBe('<div class="test1"></div>');
  })

  test('Testing div with id and classes', () => {
    expect(div('test', ['test1', 'test2']).toHTML())
      .toBe('<div id="test" class="test1 test2"></div>');
  })

  test('Testing div with content', () => {
    expect(div('', [], ['test']).toHTML())
      .toBe('<div>test</div>');
  })

  test('Testing div with attributes', () => {
    expect(div('', [], [], { test1: 'test2' }).toHTML())
      .toBe('<div test1="test2"></div>');
  })

  test('Testing full div', () => {
    expect(
      div('test', ['test1', 'test2'], ['test3'], { test4: 'test5' }).toHTML()
    ).toBe('<div id="test" class="test1 test2" test4="test5">test3</div>');
  })

  test('Testing nested elements', () => {
    expect(
      div('', [], [
        h5('', [], ['test']),
        hr(),
      ]).toHTML()
    ).toBe('<div><h5>test</h5><hr></div>');
  })
});

