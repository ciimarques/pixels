import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import PixelsProvider from './context/PixelProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PixelsProvider>
    <App />
  </PixelsProvider>,
);
