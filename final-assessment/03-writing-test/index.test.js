import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function should correctly add two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 20), 30);
  assert.strictEqual(sum(100, 50), 150);
});

test('sum function should correctly add negative numbers', () => {
  assert.strictEqual(sum(-1, 2), 1);
  assert.strictEqual(sum(1, -2), -1);
  assert.strictEqual(sum(-1, -2), -3);
});

test('sum function should handle type coercion', () => {
  assert.strictEqual(sum('2', 3), '23');
  assert.strictEqual(sum(2, '3'), '23');
});

test('sum function should return correct sum with zero', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('sum function should return 0 with zero values', () => {
  assert.strictEqual(sum(0, 0), 0);
});

test('sum function should handle decimal numbers', () => {
  assert.strictEqual(sum(2.5, 3.5), 6);
  assert.strictEqual(sum(1.1, 2.2), 3.3000000000000003);
});
