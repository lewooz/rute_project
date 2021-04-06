import { useState, useEffect } from 'react';

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState({
        top: undefined,
        left: undefined
    })

    useEffect(() => {

        function handleScroll(event: any) {
            console.log(event)
            setScrollPosition({
                left: window.screenX,
                top: event.srcElement.body.scrollTop,
            });
        }

        // Add event listener
        window.addEventListener("scroll", handleScroll);

        // Call handler right away so state gets updated with initial window size

        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollPosition
}

export default useScrollPosition