import { useEffect } from 'react';

const useScript = src => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = src;
        //script.id = id;
        script.async = true;
        //script.onload = onLoad;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [src]);
};

export default useScript;