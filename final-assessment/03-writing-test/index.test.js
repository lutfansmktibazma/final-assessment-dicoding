import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function should correctly add two numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('sum function should return 0 when adding negative numbers', () => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(1, -2), 0);
  assert.strictEqual(sum(-1, -2), 0);
});

test('sum function should return 0 when inputs are not numbers', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum(null, 3), 0);
});

test('sum function should return correct sum with zero', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('sum function should return 0 with zero values', () => {
  assert.strictEqual(sum(0, 0), 0);
});
