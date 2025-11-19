import React from "react";
import styles from './styles.module.css';

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className={"relative h-dvh w-dvw overflow-hidden"}>
            <div className={"scale-110 conic-bg absolute blur-md size-full -z-10 " + styles.conicBg}/>
            <div className={"absolute size-full flex flex-col items-center justify-center gap-4"}>
                {children}
            </div>
        </div>
    );
}