import { useState, useEffect } from "react";

export const usePreloader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let timer;
        window.addEventListener('load', () => {
            timer = setTimeout(() => {
                setIsLoaded(true);
            }, 5000)
        })

        return () => {
            window.removeEventListener('load', () => {
                clearTimeout(timer);
            })
        }
    }, [])

    return isLoaded;
}