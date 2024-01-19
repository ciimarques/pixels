import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';

describe('Header Component', () => {
  it('has the correct text', () => {
    render(<Header />);
    const headingElement = screen.getByText('Pintando com Pixels');
    expect(headingElement).toBeInTheDocument();
  });

  it('has the correct styling classes', () => {
    render(<Header />);
    const headingElement = screen.getByText('Pintando com Pixels');
    expect(headingElement).toHaveClass('text-gray-700');
    expect(headingElement).toHaveClass('my-4');
    expect(headingElement).toHaveClass('sm:text-3xl');
    expect(headingElement).toHaveClass('lg:text-5xl');
    expect(headingElement).toHaveClass('font-mono');
    expect(headingElement).toHaveClass('font-bold');
    const containerDiv = headingElement.parentElement;
    expect(containerDiv).toHaveClass('flex');
    expect(containerDiv).toHaveClass('items-center');
    expect(containerDiv).toHaveClass('justify-center');
    expect(containerDiv).toHaveClass('p-18');
  });
});
