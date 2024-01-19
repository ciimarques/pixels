import { generateRandomColor } from '../service/generateColor';

describe('generateRandomColor', () => {
  it('should return a string', () => {
    const color = generateRandomColor();
    expect(typeof color).toBe('string');
  });

  it('should return a valid hex color', () => {
    const color = generateRandomColor();
    expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it('should return different colors on multiple calls', () => {
    const colors = new Set();
    for (let i = 0; i < 100; i++) {
      colors.add(generateRandomColor());
    }
    expect(colors.size).toBeGreaterThan(1);
  });
});
