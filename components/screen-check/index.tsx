"use client";
import useWindowSize from "@/hooks/useWindowSize";

export default function ScreenCheck({ children }: { children: React.ReactNode }) {
    const { width } = useWindowSize()



    if (width > 480) {
        return <div style={{ textAlign: "center", padding: "20px", fontSize: "18px" }}>📱 This website is for mobile devices only.</div>;
    }

    return <>{children}</>;
}
