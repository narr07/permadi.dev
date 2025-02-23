"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiSunDuotone, PiMoonStarsDuotone } from "react-icons/pi";

export function DarkMode() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div>
            {theme === "dark" ? (
                <button onClick={() => setTheme("light")}>
                    <PiSunDuotone />
                </button>
            ) : (
                <button onClick={() => setTheme("dark")}>
                    <PiMoonStarsDuotone />
                </button>
            )}
        </div>
    );
}