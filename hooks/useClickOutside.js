import { useEffect, useRef } from "react"

export const useClickOutside = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        const clickOutsideHandler = (event) => {
            if(!domNode.current.contains(event.target)) {
                handler();
            }
        }

        document.addEventListener('mousedown', clickOutsideHandler);

        return () => {
            document.removeEventListener('mousedown', clickOutsideHandler);
        }
    }, [])

    return domNode;
}