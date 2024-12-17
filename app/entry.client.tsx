// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './styles/global.css';
import App from './root';

hydrateRoot(document, <App />);
