// app/root.tsx
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useMatches,
    useRouteError,
} from '@remix-run/react';
import './styles/global.css';
import { ThemeProvider } from '@rmwc/theme';
import { Typography } from '@rmwc/typography';
import Navbar from './routes/navbar';
import { ErrorBoundary } from 'react-error-boundary';
import './styles/theme.css';

const theme = {
    '--mdc-theme-primary': '#4285f4',
    '--mdc-theme-on-primary': 'white',
};

function ErrorFallback({ error }: { error: Error }) {
    console.error('Error in component tree', error);
    return (
        <Typography use="headline5" style={{ padding: '20px' }}>
        Oops! An error occurred. Please try again later.
        <br />
        {error.message}
        </Typography>
    );
}

function CatchBoundary() {
    const error = useRouteError();
    const matches = useMatches();
    let statusText: string = '';

    if (error && typeof error === 'object' && 'message' in error) {
        statusText = typeof error.message === 'string' ? error.message : 'An unexpected error occurred.';
    }


    const errorData = matches
        .map((match) => match.data)
        .filter((data): data is { error: { message: string } } =>
        data != null && typeof data === 'object' && 'error' in data && data.error != null && typeof data.error === 'object' && 'message' in data.error && typeof data.error.message === 'string'
    )[0]?.error.message


    return (
        <Typography use="headline5" style={{ padding: '20px' }}>
        Oops! {statusText || errorData || 'An unexpected error occurred.'}
        <br />
        </Typography>
    );
}

function ErrorComponent() {
    const error = useRouteError();
    console.error('Error in route:', error);
    let errorMessage: string = "";
    if (error && typeof error === 'object' && 'message' in error) {
        errorMessage = typeof error.message === 'string' ? error.message : "An error occurred within a route";
    }
    return (
        <Typography use="headline5" style={{ padding: '20px' }}>
        Oops! {errorMessage || "An error occurred within a route"}
        </Typography>
    );
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <Meta />
            <Links />
            <link rel="icon" href="/favicon.ico" />
            <title>Dean Machines</title>
            <meta name="description" content="FPV Prototype Web App" />
        </head>
        <body>
            <ThemeProvider options={theme}>
            <Navbar />
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Outlet />
            </ErrorBoundary>
            </ThemeProvider>
            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}
export function ErrorBoundaryComponent({ error }: { error: Error }) {
    return <ErrorFallback error={error} />;
}
export function CatchBoundaryComponent() {
    return <CatchBoundary />;
}
export function ErrorComponentBoundary() {
    return <ErrorComponent />;
}