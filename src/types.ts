export type Color = string;
export type Pixel = {
  id: string;
  color: string;
};
export type PixelsType = {
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
