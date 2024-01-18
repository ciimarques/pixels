import { createContext } from 'react';
import { Color, Pixel } from '../types';

type PixelsType = {
  colors: Color[];
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
  pixels: Pixel[];
  setPixels: React.Dispatch<React.SetStateAction<Pixel[]>>;
  loading: boolean,
  setLoading:React.Dispatch<React.SetStateAction<boolean>>;
  size: number;
  setSize:React.Dispatch<React.SetStateAction<number>>;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>
};

const PixelsContext = createContext({} as PixelsType);

export default PixelsContext;
