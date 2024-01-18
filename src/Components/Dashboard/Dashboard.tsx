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
    setSize(size + additionalRows);
    setPixels([]);
  };

  const decreaseBoardSize = () => {
    if (size > 1) {
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

  return (
    <div>
      <div>
        <label>
          Adicionar Linhas:
          <input
            type="number"
            value={ additionalRows }
            onChange={ (event) => setAdditionalRows(parseInt(event.target.value, 10)) }
          />
        </label>
        <button onClick={ increaseBoardSize }>Aumentar Quadro</button>
        <button onClick={ decreaseBoardSize }>Diminuir Quadro</button>
      </div>
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
            className="pixel"
            style={ {
              backgroundColor: pixel.color,
              border: '1px solid black',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            } }
            role="button"
            tabIndex={ 0 }
            aria-label={ `Select pixel with color ${pixel.color}` }
            onClick={ () => handlePixelClick(pixel.id) }
            onKeyDown={ (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handlePixelClick(pixel.id);
              }
            } }
            onKeyUp={ () => {} }
          />
        ))}
      </div>
      <button
        type="button"
        onClick={ () => setPixels([]) }
      >
        Limpa Quadro
      </button>
    </div>
  );
}

export default Dashboard;
