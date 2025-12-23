import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to the Home Page",
}

export default function Home() {
    return (
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 header-zoom-in">
                    Welcome to DenVyew
                </h1>
            </div>
    );
}
