import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Dashboard from '../Components/Dashboard';
import PixelsContext from '../context/PixelsContext';
import { PixelsType } from '../types';

describe('Dashboard Component', () => {
  const mockUsePixels: PixelsType = {
    pixels: [],
    setPixels: vi.fn(),
    selectedColor: '#000000',
    setSelectedColor: vi.fn(),
    setLoading: vi.fn(),
    loading: false,
    size: 10,
    setSize: vi.fn(),
    colors: ['#FFFFFF', '#000000'],
    setColors: vi.fn(),
  };

  const renderComponent = () => render(
    <PixelsContext.Provider value={ mockUsePixels }>
      <Dashboard />
    </PixelsContext.Provider>,
  );
  it('should render without errors', () => {
    renderComponent();
    expect(screen.getByText(/Quadro:/i)).toBeInTheDocument();
  });

  it('should increase board size on button click', async () => {
    renderComponent();
    const increaseButton = screen.getByText(/Aumentar Quadro/i);
    fireEvent.click(increaseButton);
    expect(mockUsePixels.setSize).toHaveBeenCalledWith(mockUsePixels.size + 1);
  });
  it('should handle pixel click correctly', () => {
    mockUsePixels.pixels = [{ id: '0-0', color: '#FFFFFF' }];
    renderComponent();
    const pixel = screen.getByRole('button', { name: /Select pixel with color #FFFFFF/i });
    fireEvent.click(pixel);
    expect(mockUsePixels.setPixels).toHaveBeenCalled();
  });
});
