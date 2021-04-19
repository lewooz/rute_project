import { MutableRefObject, useEffect, useState } from "react";

function useOnScreen(ref: MutableRefObject<any>, triggerUnobserve = true, rootMargin = "0px") {

    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        if (triggerUnobserve) {
            return () => {
                observer.unobserve(ref.current);
            };
        }
    }, []);
    return isIntersecting;
}

export default useOnScreen