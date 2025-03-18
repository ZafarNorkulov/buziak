"use client";
import useWindowSize from "@/hooks/useWindowSize";

export default function ScreenCheck({ children }: { children: React.ReactNode }) {
    const { width } = useWindowSize()



    if (width > 480) {
        return <div className="text-center text-lg p-5" >📱 This website is for mobile devices only.</div>;
    }

    return <>{children}</>;
}
