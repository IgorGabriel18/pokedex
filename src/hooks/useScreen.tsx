import { useState, useEffect } from "react";

export const useScreen = () => {
    const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

    const changeSize = () => setSizeScreen(window.innerWidth);

    useEffect(() => {
        changeSize();

        window.addEventListener("resize", changeSize);
    }, []);

    return { sizeScreen };
};
