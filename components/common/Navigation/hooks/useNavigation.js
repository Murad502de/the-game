import { useState } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";

export const useNavigation = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const menuPopupRef = useClickOutside(() => {
        setIsMenuVisible(false);
    })
    
    const toggleMenuVisibility = () =>  setIsMenuVisible(prev => !prev);

    return {
        isMenuVisible,
        toggleMenuVisibility,
        menuPopupRef
    }
}