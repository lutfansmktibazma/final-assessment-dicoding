import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function - should correctly add two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 20), 30);
  assert.strictEqual(sum(100, 50), 150);
});

test('sum function - should return 0 when first argument is negative', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(-10, 20), 0);
  assert.strictEqual(sum(-100, 50), 0);
});

test('sum function - should return 0 when second argument is negative', () => {
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(20, -10), 0);
  assert.strictEqual(sum(50, -100), 0);
});

test('sum function - should return 0 when both arguments are negative', () => {
  assert.strictEqual(sum(-1, -5), 0);
  assert.strictEqual(sum(-10, -20), 0);
});

test('sum function - should return 0 when first argument is not a number', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(undefined, 10), 0);
  assert.strictEqual(sum({}, 5), 0);
  assert.strictEqual(sum([], 5), 0);
});

test('sum function - should return 0 when second argument is not a number', () => {
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum(5, null), 0);
  assert.strictEqual(sum(10, undefined), 0);
  assert.strictEqual(sum(5, {}), 0);
  assert.strictEqual(sum(5, []), 0);
});

test('sum function - should return 0 when both arguments are not numbers', () => {
  assert.strictEqual(sum('2', '3'), 0);
  assert.strictEqual(sum(null, null), 0);
});

test('sum function - should handle zero correctly', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 0), 0);
});

test('sum function - should handle decimal numbers correctly', () => {
  assert.strictEqual(sum(2.5, 3.5), 6);
  assert.strictEqual(sum(1.1, 2.2), 3.3000000000000003); // Due to floating-point precision
});

test('sum function - should handle large numbers correctly', () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000);
  assert.strictEqual(sum(999999, 1), 1000000);
});
