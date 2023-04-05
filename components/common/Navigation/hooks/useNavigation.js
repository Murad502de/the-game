import { useState } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";

export const useNavigation = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMenuVisibleMd, setIsMenuVisibleMd] = useState(false);

    const menuPopupRef = useClickOutside(() => {
        setIsMenuVisible(false);
    });

    const menuPopupRefMd = useClickOutside(() => {
        setIsMenuVisibleMd(false);
    });

    const toggleMenuVisibility = () => setIsMenuVisible(prev => !prev);
    const toggleMenuVisibilityMd = () => setIsMenuVisibleMd(prev => !prev);

    const scrollToSection = (section) => {
        window.scrollTo({
            top: section.current.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

    return {
        isMenuVisible,
        isMenuVisibleMd,
        toggleMenuVisibility,
        toggleMenuVisibilityMd,
        menuPopupRef,
        menuPopupRefMd,
        scrollToSection,
    }
}