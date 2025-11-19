import { Button } from "antd";

export function NavigationBar() {
    return (
        <nav className={"flex flex-row w-full min-h-12 z-50 py-2 px-4 bg-gray-200 dark:bg-gray-800 items-center justify-between rounded-xl"}>
            <a href={"/"}>
                <h1 className={"text-lg font-semibold text-gray-900 dark:text-gray-100"}>DenVyew</h1>
            </a>
            <div className={"flex flex-row gap-4"}>
                <Button type={"link"} href={"/metrics"}>Metrics</Button>
                <Button type={"link"} href={"/pm2"}>PM2</Button>
            </div>
        </nav>
    );
}