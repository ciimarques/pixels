import { useEffect, useState } from 'react';
import { Pixel } from '../../types';
import usePixels from '../../context/usePixels';

function Dashboard() {
  const { pixels, setPixels, selectedColor, setLoading } = usePixels();
  const { size, setSize } = usePixels();
  const [additionalRows, setAdditionalRows] = useState(1);

  useEffect(() => {
    const generateBoard = () => {
      setLoading(true);
      if (pixels.length === 0) {
        const generatedPixels: Pixel[] = [];

        for (let row = 0; row < size; row++) {
          for (let col = 0; col < size; col++) {
            const pixel: Pixel = {
              id: `${row}-${col}`,
              color: '#FFFFFF',
            };
            generatedPixels.push(pixel);
          }
        }
        setPixels(generatedPixels);
      }
      setLoading(false);
    };
    generateBoard();
  }, [size, additionalRows, pixels]);

  const increaseBoardSize = () => {
    if (size + additionalRows <= 50) {
      setSize(size + additionalRows);
      setPixels([]);
    }
  };

  const decreaseBoardSize = () => {
    if (size - additionalRows >= 5) {
      setSize(size - additionalRows);
      setPixels([]);
    }
  };

  const handlePixelClick = (pixelId: string) => {
    const updatedPixels = pixels.map((pixel) => {
      if (pixel.id === pixelId) {
        return { ...pixel, color: selectedColor };
      }
      return pixel;
    });
    setPixels(updatedPixels);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();
    setPixels([]);
  };

  return (
    <div className="flex flex-col items-center justify-center p-18 my-4">
      <div>
        <label
          className="text-gray-700 sm:text-lg lg:text-xl font-mono font-bold"
        >
          Adicionar Linhas:
          <input
            className="border-b-8 h-1/2 text-center text-gray-700 px-4 py-3 rounded-lg
            font-mono font-bold w-full sm:w-auto "
            type="number"
            value={ additionalRows }
            onChange={ (event) => setAdditionalRows(parseInt(event.target.value, 10)) }
          />
        </label>
        <button
          className="border-b-8 bg-white text-gray-700 px-4 py-3 rounded-lg font-mono
          font-bold hover:bg-gray-700 hover:text-white transition duration-300
          w-full sm:w-auto "
          onClick={ increaseBoardSize }
        >
          Aumentar Quadro
        </button>
        <button
          className="border-b-8  bg-white text-gray-700 px-4 py-3 rounded-lg font-mono
           font-bold hover:bg-gray-700 hover:text-white transition duration-300 w-full
           sm:w-auto"
          onClick={ decreaseBoardSize }
        >
          Diminuir Quadro
        </button>
        <button
          className="border-b-8 bg-white text-gray-700 px-4 py-3 bg- rounded-lg font-mono
          font-bold hover:bg-gray-700 hover:text-white transition duration-300
          w-full sm:w-auto"
          type="button"
          onClick={ handleSubmit }
        >
          Limpa Quadro
        </button>
      </div>
      <span className="text-gray-700 my-4 sm:text-lg lg:text-xl font-mono font-bold">
        Quadro:
        {' '}
        {size}
        {' '}
        x
        {' '}
        {size}
        {' '}
        Pixels
      </span>
      <div
        id="pixel-board"
        style={ {
          display: 'grid',
          gridTemplateColumns: `repeat(${size}, 40px)`,
          gap: '1px',
        } }
      >
        {pixels.map((pixel) => (
          <div
            key={ pixel.id }
            className="border border-black w-10 h-10 cursor-pointer"
            style={ {
              backgroundColor: pixel.color,
            } }
            role="button"
            tabIndex={ 0 }
            aria-label={ `Select pixel with color ${pixel.color}` }
            onClick={ () => handlePixelClick(pixel.id) }
            onKeyDown={ (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handlePixelClick(pixel.id);
              }
            } }
            onKeyUp={ () => {} }
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
