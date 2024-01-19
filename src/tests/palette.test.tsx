import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Palette from '../Components/Palette';

const mockSetColors = vi.fn();
vi.mock('../context/usePixels', () => ({
  default: () => ({
    colors: [],
    setColors: mockSetColors,
    selectedColor: '',
    setSelectedColor: vi.fn(),
    loading: false,
    setLoading: vi.fn(),
  }),
}));

describe('Palette Component', () => {
  it('renders correctly', () => {
    render(<Palette />);
    expect(screen.getByText('Paleta de Cores')).toBeInTheDocument();
  });

  it('generates new colors on button click', async () => {
    render(<Palette />);
    fireEvent.click(screen.getByText('Gerar cores'));

    await waitFor(() => {
      expect(mockSetColors).toHaveBeenCalled();
    });
  });
});
