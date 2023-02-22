import { Recipe } from '..';

test('Recipe', () => {
  expect(Recipe('World')).toBe('Hello World');
});