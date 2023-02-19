import { useEffect, useRef } from "react"

export const useClickOutside = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        const clickOusideHandler = (event) => {
            if(!domNode.current.contains(event.target)) {
                handler();
            }
        }

        document.addEventListener('mousedown', clickOusideHandler);

        return () => {
            document.removeEventListener('mousedown', clickOusideHandler);
        }
    }, [])

    return domNode;
}