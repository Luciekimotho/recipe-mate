import { Recipe } from '../app';

test('Recipe', () => {
  expect(Recipe('World')).toBe('Hello World');
});
