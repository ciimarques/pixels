import { useContext } from 'react';
import PixelsContext from './PixelsContext';

const usePixels = () => {
  const context = useContext(PixelsContext);
  if (!context) {
    throw new Error('usePixels deve ser usado dentro de um PixelsProvider');
  }
  return context;
};

export default usePixels;
