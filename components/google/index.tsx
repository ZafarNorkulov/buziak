"use client";
import { useEffect } from "react";
import Image from "next/image";
import GoogleIcon from "@/assets/icons/Google.svg";
import instance from "@/config/axios.config";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface GoogleCredentialResponse {
    credential: string;
    select_by?: string;
}

declare global {
    interface Window {
        google?: {
            accounts: {
                id: {
                    initialize: (options: {
                        client_id: string;
                        callback: (response: GoogleCredentialResponse) => void;
                        ux_mode?: "popup" | "redirect";
                    }) => void;
                    renderButton: (element: HTMLElement | null, options: { theme: string; size: string }) => void;
                };
            };
        };
    }
}

// Google-dan kelgan tokenni backendga jo‘natish
const handleCredentialResponse = async (response: GoogleCredentialResponse, router: ReturnType<typeof useRouter>) => {
    console.log("Google Token:", response.credential);

    try {
        const res = await instance.post<{ access_token: string }>("/google/auth/", { token: response.credential });

        if (res.status === 200) {
            localStorage.setItem("access_token", res.data.access_token);
            Cookies.set("access_token", res.data.access_token, { expires: 1 / 24 });
            router.push("/");
        }
    } catch (error) {
        console.error("Google auth error:", error);
    }
};

const GoogleLogin = () => {
    const router = useRouter();

    useEffect(() => {
        // Google skriptini yuklash
        const loadGoogleScript = () => {
            if (document.getElementById("google-client-script")) return;

            const script = document.createElement("script");
            script.id = "google-client-script";
            script.src = "https://accounts.google.com/gsi/client";
            script.async = true;
            script.onload = initializeGoogleSignIn;
            document.body.appendChild(script);
        };

        // Google Sign-In ni ishga tushirish
        const initializeGoogleSignIn = () => {
            if (window.google?.accounts) {
                window.google.accounts.id.initialize({
                    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
                    callback: (response) => handleCredentialResponse(response, router),
                    ux_mode: "popup",
                });

                window.google.accounts.id.renderButton(
                    document.getElementById("g_id_signin"),
                    { theme: "outline", size: "large" }
                );
            }
        };

        loadGoogleScript();
    }, [router]);

    return (
        <div>
            <button className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-white" id="g_id_signin">
                <Image src={GoogleIcon} width={24} height={24} alt="Google icon" />
            </button>
        </div>
    );
};

export default GoogleLogin;
