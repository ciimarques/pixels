import { useEffect, useState } from 'react';
import { Pixel } from '../../types';
import usePixels from '../../context/usePixels';

function Dashboard() {
  const { pixels, setPixels } = usePixels();
  const [loading, setLoading] = useState(false);
  const { size, setSize } = usePixels();
  const [additionalRows, setAdditionalRows] = useState(1);

  useEffect(() => {
    const generateBoard = () => {
      setLoading(true);

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

      setLoading(false);
      setPixels(generatedPixels);
    };
    generateBoard();
  }, [size, additionalRows]);

  const increaseBoardSize = () => {
    setSize(size + additionalRows);
  };

  const decreaseBoardSize = () => {
    if (size > 1) {
      setSize(size - additionalRows);
    }
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
            } }
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
