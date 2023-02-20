import { useEffect, useRef, useState } from "react";

export const useLoungeSection = () => {
    const [isLoungeVisible, setIsLoingeVisible] = useState(false);

    const loungeRef = useRef();

    useEffect(() => {
        if(loungeRef.current) {
            const observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    setIsLoingeVisible(true);
                } else {
                    setIsLoingeVisible(false);
                }
            }, {
                threshold: 0.5
            })
    
            observer.observe(loungeRef.current);

            return () => {
                observer.unobserve(loungeRef.current);
            }
        }
    }, [loungeRef.current]);

    return {
        isLoungeVisible,
        loungeRef
    }
}