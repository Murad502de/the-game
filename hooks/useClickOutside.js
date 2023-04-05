import { useEffect, useRef } from "react"

export const useClickOutside = (handler) => {
    const domNode = useRef();

    useEffect(() => {
        const clickOutsideHandler = (event) => {
            console.debug('clickOutsideHandler/is_contains', domNode.current.contains(event.target)); //DELETE
            console.debug('clickOutsideHandler/target', event.target); //DELETE
            console.debug('clickOutsideHandler/domNode', domNode.current); //DELETE

            if (!domNode.current.contains(event.target)) {
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