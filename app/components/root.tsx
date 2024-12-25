import { Links, LiveReload, Meta, Scripts, ScrollRestoration, Outlet } from '@remix-run/react';
import { DarkModeProvider } from './context/DarkModeContext';
import './styles/tailwind.css';  // Single source for global styles

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
                <title>Dean Machines</title>
                <meta name="description" content="FPV Prototype Web App" />
            </head>
            <body>
                <DarkModeProvider>
                    <Outlet />
                </DarkModeProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}