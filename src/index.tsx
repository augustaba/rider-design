import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './styles/index.scss';

const container = document.querySelector('#root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  if (import.meta.webpackHot) {
    import.meta.webpackHot.accept();
  }
} else {
  console.warn('请确认root节点存在');
}
