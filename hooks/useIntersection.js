import { useState, useEffect, useRef } from "react";

export const useIntersection = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const nodeRef = useRef();

    useEffect(() => {
        if(nodeRef.current) {
            const observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    setIsIntersecting(true);
                } else {
                    setIsIntersecting(false);
                }
            }, {
                threshold: 0.5
            })
    
            observer.observe(nodeRef.current);

            return () => {
                observer.unobserve(nodeRef.current);
            }
        }
    }, [nodeRef.current]);

    return {
        isIntersecting,
        nodeRef
    }
}