import { useState, useEffect } from "react";

export const usePreloader = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const [preloaderPercentage, setPreloaderPercentage] = useState(0);

    return {
        isLoaded,
        preloaderPercentage
    };
}