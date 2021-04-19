import { useState, useEffect } from 'react';
import Platform from '../enums/platform';
import { useStores } from './use_stores';


export default function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const { homeStore } = useStores();

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            if (window.innerWidth < 577) {
                homeStore.setCurrentPlatform(Platform.Phone)
                return
            }
            if (window.innerWidth < 961) {
                homeStore.setCurrentPlatform(Platform.Tablet)
                return
            }
            if (window.innerWidth < 1281) {
                homeStore.setCurrentPlatform(Platform.Desktop)
                return
            }
            if (window.innerWidth < 1921) {
                homeStore.setCurrentPlatform(Platform.LargeScreen)
                return
            }
            if (window.innerWidth >= 1921) {
                homeStore.setCurrentPlatform(Platform.BigScreen)
                return
            }
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
}