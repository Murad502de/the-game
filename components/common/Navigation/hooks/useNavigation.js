import { useState } from "react";

export const useNavigation = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenuvisibility = () => setIsMenuVisible(prev => !prev);

    return {
        isMenuVisible,
        toggleMenuvisibility
    }
}