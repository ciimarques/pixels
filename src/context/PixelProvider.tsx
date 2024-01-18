import { useEffect, useState } from 'react';
import { Color, Pixel } from '../types';
import PixelContext from './PixelsContext';

type PixelsProviderProps = {
  children: React.ReactNode;
};

function PixelsProvider({ children }: PixelsProviderProps) {
  const [colors, setColors] = useState<Color[]>(
    JSON.parse(localStorage.getItem('colors') || '[]'),
  );
  const [pixels, setPixels] = useState<Pixel[]>(
    JSON.parse(localStorage.getItem('pixels') || '[]'),
  );
  const [size, setSize] = useState<number>(
    JSON.parse(localStorage.getItem('size') || '5'),
  );

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
    localStorage.setItem('pixels', JSON.stringify(pixels));
  }, [colors, pixels]);

  const values = {
    colors,
    setColors,
    pixels,
    setPixels,
    size,
    setSize,
  };
  return (
    <PixelContext.Provider value={ values }>
      { children }
    </PixelContext.Provider>
  );
}

export default PixelsProvider;
