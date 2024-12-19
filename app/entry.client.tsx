// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './root';

const rootElement = document.getElementById('root');
if (rootElement) {
    hydrateRoot(rootElement, <App />);
} else {
    console.error("Root element not found");
}
