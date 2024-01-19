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
    <div
      className="flex flex-col items-center justify-center p-18 my-4"
    >
      <h2
        className="text-gray-700 sm:text-2xl my-4 lg:text-3xl font-mono font-bold"
      >
        Paleta de Cores
      </h2>
      <div
        id="color-palette"
        style={ { display: 'flex' } }
      >
        { colors.map((color, index) => (
          <div
            key={ index }
            className={ `color ${selectedColor === color ? 'selected' : ''}border
             border-black rounded-full w-8 h-8 sm:w-14 sm:h-14` }
            style={ {
              backgroundColor: color,
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
        className="border-b-8  bg-white text-gray-700 my-4 px-4 py-3 bg- rounded-lg
        font-bold hover:bg-gray-700 hover:text-white transition duration-300
        font-mono w-full sm:w-auto "
        onClick={ handleSubmit }
        disabled={ loading }
      >
        Gerar cores
      </button>
    </div>
  );
}

export default Palette;
