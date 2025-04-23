import { test, expect } from 'vitest';
import { WebsterDictionaryData } from '@models/dictionary/webster-dictionary-data';

test('model construtor', () => {
  const websterDictionaryData = new WebsterDictionaryData();
  expect(websterDictionaryData.word).toBe('');
});

test('model construtor word', () => {
  const websterDictionaryData = new WebsterDictionaryData('test');
  expect(websterDictionaryData.word).toBe('test');
});

test('model construtor definition', () => {
  const websterDictionaryData = new WebsterDictionaryData('test');
  expect(websterDictionaryData.definitions).toStrictEqual([]);
});

test('model construtor definition', () => {
  const def = 'this is a definition.';
  const websterDictionaryData = new WebsterDictionaryData('test');
  websterDictionaryData.shortdef.push(def);
  expect(websterDictionaryData.definitions).toStrictEqual([def]);
});
