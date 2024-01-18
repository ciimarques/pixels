import { createContext } from 'react';
import { Color, Pixel } from '../types';

type PixelsType = {
  colors: Color[];
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
  pixels: Pixel[];
  setPixels: React.Dispatch<React.SetStateAction<Pixel[]>>;
  size: number;
  setSize:React.Dispatch<React.SetStateAction<number>>;
};

const PixelsContext = createContext({} as PixelsType);

export default PixelsContext;
