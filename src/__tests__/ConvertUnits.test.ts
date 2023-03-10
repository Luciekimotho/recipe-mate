import { ConvertVolumeUnits } from '../ConvertUnits';
import { ConvertWeightUnits } from '../ConvertUnits';

describe('Convert Units', () => {
  it('Convert Volume Units', () => {
    expect(ConvertVolumeUnits(1, 'ml', 'l')).toBe(0.001);
    expect(ConvertVolumeUnits(1, 'l', 'ml')).toBe(1000);
    expect(ConvertVolumeUnits(1, 'tsp', 'ml')).toBe(5);
    expect(ConvertVolumeUnits(1, 'tbs', 'ml')).toBe(15);
    expect(ConvertVolumeUnits(1, 'cup', 'ml')).toBe(250);
    expect(ConvertVolumeUnits(1, 'ml', 'tsp')).toBe(0.2);
    expect(ConvertVolumeUnits(1, 'ml', 'tbs')).toBe(0.06666666666666667);
    expect(ConvertVolumeUnits(1, 'ml', 'cup')).toBe(0.004);
    expect(ConvertVolumeUnits(1, 'l', 'cup')).toBe(4);
  });

  test('Convert Weight Units', () => {
    expect(ConvertWeightUnits(1, 'g', 'kg')).toBe(0.001);
    expect(ConvertWeightUnits(1, 'kg', 'g')).toBe(1000);
    expect(ConvertWeightUnits(1, 'oz', 'g')).toBe(28.3495);
    expect(ConvertWeightUnits(1, 'lb', 'g')).toBe(453.592);
    expect(ConvertWeightUnits(1, 'g', 'oz')).toBe(0.03527399072294044);
    expect(ConvertWeightUnits(1, 'g', 'lb')).toBe(0.0022046244201837776);
    expect(ConvertWeightUnits(1, 'kg', 'lb')).toBe(2.2046244201837775);
  });
});
