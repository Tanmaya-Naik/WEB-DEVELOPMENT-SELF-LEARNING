import { useEffect, useRef, useState } from "react";

export default function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerIdRef = useRef(null);

    const startInterval = () => {
        timerIdRef.current = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);
        setIsRunning(true);
    };

    const clearTimer = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = null;
        setIsRunning(false);
    };

    const start = () => {
        if (timerIdRef.current !== null) return;
        startInterval();
    };

    const pause = () => clearTimer();

    const resume = () => {
        if (timerIdRef.current !== null) return;
        startInterval();
    };

    const stop = () => clearTimer();

    const restart = () => {
        clearTimer();
        setTime(0);
    };

    // Cleanup on unmount to prevent memory leaks
    useEffect(() => {
        return () => clearInterval(timerIdRef.current);
    }, []);

    return (
        <>
            <p>Stopwatch: {time}s</p>
            <button onClick={start} disabled={isRunning}>Start</button>
            <button onClick={pause} disabled={!isRunning}>Pause</button>
            <button onClick={resume} disabled={isRunning}>Resume</button>
            <button onClick={stop} disabled={!isRunning}>Stop</button>
            <button onClick={restart}>Restart</button>
        </>
    );
}