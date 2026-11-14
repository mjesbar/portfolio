import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MjApp from './MjApp';
import './styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element #root not found');

createRoot(rootElement).render(
  <StrictMode>
    <MjApp />
  </StrictMode>,
);
