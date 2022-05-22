import { useState } from "react";

export const useInput = (init: any) => {
    const [value, setValue] = useState(init);
    const [error, setError] = useState<string[]>();

    const onChange = (e: any) => {
        setValue(e.target.value);
    }

    return {
        main: {
            value,
            error,
            onChange
        }, setError
    }
}