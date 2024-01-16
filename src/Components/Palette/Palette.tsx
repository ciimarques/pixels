import { useEffect, useState } from 'react';
import { Color } from '../../types'
import { generateRandomColor } from '../../service/generateColor';


const Palette = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState(false);

  const initializePalette = () => {
    setLoading(true);
    const initialColors = Array.from({ length: 10 }, generateRandomColor);
    setLoading(false);
    setColors(initialColors);
  };
  useEffect(() => {
    initializePalette();
  }, []);

  const generatPalette = () => {
    setLoading(true);
    const generatedColor = colors.map(generateRandomColor);
    setLoading(false);
    setColors(generatedColor);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();
    generatPalette();
  };

  return (
    <div>
      <h2>Paleta de Cores</h2>
      <div id="color-palette" style={{ display: 'flex' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="color"
            style={{
              backgroundColor: color,
              border: '1px solid black',
              width: '50px',
              height: '50px',
            }}
          >
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={loading}
      >
        Gerar cores
      </button>
    </div>
  );
};

export default Palette;
