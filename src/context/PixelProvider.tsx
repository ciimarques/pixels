import { useEffect, useState } from 'react';
import { Color } from '../types';
import PixelContext from './PixelsContext';

type PixelsProviderProps = {
  children: React.ReactNode;
};

function PixelsProvider({ children }: PixelsProviderProps) {
  const [colors, setColors] = useState<Color[]>(
    JSON.parse(localStorage.getItem('colors') || '[]'),
  );

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);
  const values = {
    colors,
    setColors,
  };
  return (
    <PixelContext.Provider value={ values }>
      { children }
    </PixelContext.Provider>
  );
}

export default PixelsProvider;
