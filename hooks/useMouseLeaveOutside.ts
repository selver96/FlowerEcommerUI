import { useEffect, useRef } from "react"

export const useMouseLeaveOutside = (handler: any) => {
    const domNode = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        let close = (event: any) => {
            if (domNode.current?.contains(event.target)) {
                
            }else{
                handler();
            }
        };

        document.addEventListener("mouseenter", close);

        return () => {
            document.removeEventListener("mouseenter", close);
        };
    });

    return domNode;
} 