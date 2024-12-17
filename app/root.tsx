import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useRouteError,
    isRouteErrorResponse,
} from '@remix-run/react';
import Navbar from './routes/navbar';
import { ErrorBoundary } from 'react-error-boundary';
import './styles/tailwind.css';  // Make sure to import global styles

// No longer need RMWC ThemeProvider or Typography here

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
    console.error('Error in component tree', error);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-4">Oops! An error occurred.</h1>
            <p className="text-lg">{error.message}</p>
            <button
                onClick={resetErrorBoundary}
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Try again
            </button>
        </div>
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
                <title>Dean Machines</title>
                <meta name="description" content="FPV Prototype Web App" />
            </head>
            <body className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"> {/* Apply Tailwind classes to body */}
                <Navbar />
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Outlet /> {/* Main content outlet */}
                </ErrorBoundary>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export function CatchBoundary() {
    const caught = useRouteError();
    if (isRouteErrorResponse(caught)) {
        // This is an error from a route or the server.  Handle it here.
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <h1 className="text-3xl font-bold mb-4">Oops!</h1>
                {caught.status === 500 ? (
                    <p className="text-lg">Internal Server Error</p>
                ) : caught.status === 404 ? (
                    <p className="text-lg">Page Not Found</p>
                ) : caught.status === 401 ? (
                    <p className="text-lg">Unauthorized</p>
                ) : (
                    <p className="text-lg">
                        {caught.status} {caught.statusText} {caught.data?.message}
                    </p>
                )}

            </div>
        )
    } else if (caught instanceof Error) {
        // This is an error from a component or some other part of the app.
        // Handle it here.  If you don't have a way to handle it here
        // you can re-throw it to show the default error boundary.
        console.error("Client-side error", caught);
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <h1 className="text-3xl font-bold mb-4">Oops!</h1>
                <p className="text-lg">A client-side error occurred.</p>
                <p className="text-lg">Error Message: {caught.message}</p>
            </div>
        )
    } else {
        // This is some other unexpected error.
        console.error("Unexpected error", caught);
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <h1 className="text-3xl font-bold mb-4">Oops!</h1>
                <p className="text-lg">An unexpected error occurred.</p>
            </div>
        )
    }


}


