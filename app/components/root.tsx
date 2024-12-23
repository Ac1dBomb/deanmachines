import '../styles/tailwind.css'; // Ensure correct path
import { Outlet, ScrollRestoration, useRouteError, isRouteErrorResponse } from '@remix-run/react';
import { ErrorBoundary } from 'react-error-boundary';
import { useState, useEffect } from 'react';

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

export default function Root() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="fixed top-4 right-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Toggle Dark Mode
            </button>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Outlet />
            </ErrorBoundary>
            <ScrollRestoration />
        </div>
    );
}

export function CatchBoundary() {
    const caught = useRouteError();
    let errorMessage;

    if (isRouteErrorResponse(caught)) {
        switch (caught.status) {
            case 500:
                errorMessage = <p className="text-lg">Internal Server Error</p>;
                break;
            case 404:
                errorMessage = <p className="text-lg">Page Not Found</p>;
                break;
            case 401:
                errorMessage = <p className="text-lg">Unauthorized</p>;
                break;
            default:
                errorMessage = (
                    <p className="text-lg">
                        {caught.status} {caught.statusText} {caught.data?.message}
                    </p>
                );
                break;
        }
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <h1 className="text-3xl font-bold mb-4">Oops!</h1>
                {errorMessage}
            </div>
        );
    } else if (caught instanceof Error) {
        console.error("Client-side error", caught);
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <h1 className="text-3xl font-bold mb-4">Oops!</h1>
                <p className="text-lg">A client-side error occurred.</p>
                <p className="text-lg">Error Message: {caught.message}</p>
            </div>
        );
    } else {
        console.error("Unexpected error", caught);
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <h1 className="text-3xl font-bold mb-4">Oops!</h1>
                <p className="text-lg">An unexpected error occurred.</p>
            </div>
        );
    }
}