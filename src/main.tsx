import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  BrowserRouter,
} from 'react-router-dom';
import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic.ts';
import './i18n.ts'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <PrismicProvider client={client}>
            <App />
    </PrismicProvider>
  </BrowserRouter>
);
