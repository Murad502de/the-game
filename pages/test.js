import { useEffect } from "react";
import { starsAnimation } from "../utils/starsAnimation";

const Test = () => {

    useEffect(() => {
        starsAnimation();
    }, [])
    
    return (
        <></>
    )
}

export default Test;