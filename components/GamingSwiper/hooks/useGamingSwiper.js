import { useEffect, useRef } from "react"

export const useGamingSwiper = () => {
    const scrollableElementsRef = useRef();

    function scrollHandler() {
        const metrics = scrollableElementsRef.current.getBoundingClientRect();
        scrollableElementsRef.current.style.transform = `translateX(${metrics.top + 300}px)`
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return () => {
            document.removeEventListener('scroll', scrollHandler);
        }
    }, [])

    return {
        scrollableElementsRef,
    }
}