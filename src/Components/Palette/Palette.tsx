import { useEffect } from 'react';
import { generateRandomColor } from '../../service/generateColor';
import usePixels from '../../context/usePixels';

function Palette() {
  const {
    colors,
    setColors,
    selectedColor,
    setSelectedColor,
    loading,
    setLoading,
  } = usePixels();
  useEffect(() => {
    const initializePalette = () => {
      setLoading(true);
      if (colors.length === 0) {
        const initialColors = [
          '#000000', ...Array.from({ length: 9 }, generateRandomColor),
        ];
        setColors(initialColors);
      } else {
        setColors(colors);
      }
      setLoading(false);
    };
    initializePalette();
  }, []);

  const generatPalette = () => {
    setLoading(true);
    const generatedColor = ['#000000', ...colors.slice(1).map(generateRandomColor)];
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
      <div
        id="color-palette"
        style={ { display: 'flex' } }
      >
        { colors.map((color, index) => (
          <div
            key={ index }
            className={ `color ${selectedColor === color ? 'selected' : ''}` }
            style={ {
              backgroundColor: color,
              border: '1px solid black',
              width: '50px',
              height: '50px',
            } }
            onClick={ () => setSelectedColor(color) }
            onKeyDown={ () => {} }
            role="button"
            tabIndex={ 0 }
            aria-label={ `Select color ${color}` }
          />
        ))}
      </div>
      <button
        onClick={ handleSubmit }
        disabled={ loading }
      >
        Gerar cores
      </button>
    </div>
  );
}

export default Palette;
