import { useState } from "react";

export function useCounter() {
    const [counter, setCounter] = useState(0);

    const handleIncreaseCount = () => {
        setCounter(counter + 1);
    };

    const handleDecreaseCount = () => {
        setCounter(counter - 1);
    };

    return {
        counter,
        increaseCount: handleIncreaseCount,
        decreaseCount: handleDecreaseCount,
    };
}
