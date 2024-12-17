import { json, LoaderFunction, ActionFunction } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { generateText } from "~/utils/gemini.server";

interface LoaderData {
    generatedText: string | null;
    error: string | null;
}


export const loader: LoaderFunction = async () => {
    const loaderData: LoaderData = { generatedText: null, error: null };
    return json<LoaderData>(loaderData);
};


export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const prompt = formData.get("prompt") as string;
    if (!prompt) {
      return json<LoaderData>({ generatedText: null, error: "Prompt is required" }, { status: 400 }); // Explicit type for error case
    }

    try {
    const generatedText = await generateText(prompt);
    const actionData: LoaderData = { generatedText, error: null };
    return json<LoaderData>(actionData); 
    } catch (error) {
    if (error instanceof Error) { // Narrow down the error type
      return json<LoaderData>({ generatedText: null, error: error.message }, { status: 500 }); // Explicit type for error case
    } else { // Handle when error isn't an instance of Error
      return json<LoaderData>({ generatedText: null, error: "An unexpected error occurred." }, { status: 500 }); // Explicit type for error case
    }
    }
};
export default function GeminiRoute() {
    const data = useLoaderData<LoaderData>();
    console.log(data)
    if (data.error) {
    return (
        <div style={{ color: "red" }}>{data.error}</div>
    )
    }
    return (
        <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">Gemini Demo</h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full md:w-2/3 lg:w-1/2"> {/* Chatbox container */}
            <Form method="post" className="flex">  {/* Flexbox for input and button */}
                <input
                type="text"
                name="prompt"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-gray-300"  // Input styles
                placeholder="Type your prompt here..."
                />
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-900"  // Button styles
                >
                Generate
            </button>
            </Form>
            {data.generatedText && (
              <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-md"> {/* Response container */}
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Generated Text:</h2>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line"> {/* Preserve whitespace */}
                    {data.generatedText}</p>
                </div>
            )}
            </div>
        </div>
        );
    }