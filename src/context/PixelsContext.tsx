import { createContext } from 'react';
import { Color } from '../types';

type PixelsType = {
  colors: Color[];
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
};

const PixelsContext = createContext({} as PixelsType);

export default PixelsContext;
