import { useEffect, useState } from "react";

export function useWindowsize() {
    const [windowsize, setWindowsize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        window.addEventListener("resize", () => {
        setWindowsize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        });
    }, []);

    return windowsize
}
