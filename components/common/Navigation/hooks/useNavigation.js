import { useState } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";

export const useNavigation = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const menuPopupRef = useClickOutside(() => {
        setIsMenuVisible(false);
    })
    
    const toggleMenuVisibility = () =>  setIsMenuVisible(prev => !prev);

    const scrollToSection = (section) => {
        window.scrollTo({
            top: section.current.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    return {
        isMenuVisible,
        toggleMenuVisibility,
        menuPopupRef,
        scrollToSection
    }
}