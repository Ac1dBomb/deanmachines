import { LinksFunction } from '@remix-run/node';
import type { ErrorResponse } from '@remix-run/router';
import { Links, LiveReload, Meta, Scripts, ScrollRestoration, useRouteError, isRouteErrorResponse } from '@remix-run/react';
import styles from './styles/global.css';
import Root from './components/root';

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: styles }];
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
                <title>Dean Machines</title>
                <meta name="description" content="FPV Prototype Web App" />
                <link rel="stylesheet" href="/styles/tailwind.css" /> {/* Ensure correct path */}
            </head>
            <body className="bg-black text-white">
                <Root />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export function ErrorBoundary() {
    const caught = useRouteError() as ErrorResponse | Error;

    let errorMessage = null;

    if (isRouteErrorResponse(caught)) {
        errorMessage = <p className="text-lg">{caught.status} {caught.statusText} {caught.data?.message}</p>;
    } else if (caught instanceof Error) {
        errorMessage = <p className="text-lg">A client-side error occurred. Error Message: {caught.message}</p>;
    } else {
        errorMessage = <p className="text-lg">An unexpected error occurred.</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-4">Oops!</h1>
            {errorMessage}
        </div>
    );
}