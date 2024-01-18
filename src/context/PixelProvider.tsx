import { useEffect, useState } from 'react';
import { Color, Pixel } from '../types';
import PixelContext from './PixelsContext';

type PixelsProviderProps = {
  children: React.ReactNode;
};

function PixelsProvider({ children }: PixelsProviderProps) {
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [loading, setLoading] = useState(false);
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
    localStorage.setItem('size', JSON.stringify(size));
  }, [colors, pixels, size]);

  const values = {
    colors,
    setColors,
    loading,
    setLoading,
    pixels,
    setPixels,
    size,
    setSize,
    selectedColor,
    setSelectedColor,
  };
  return (
    <PixelContext.Provider value={ values }>
      { children }
    </PixelContext.Provider>
  );
}

export default PixelsProvider;
