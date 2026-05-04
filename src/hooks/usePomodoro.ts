import { useState, useRef, useCallback, useEffect } from 'react';

const POMODORO_DURATION = 25 * 60;

export type TimerState = 'idle' | 'running' | 'paused' | 'finished';

export function usePomodoro(onComplete: () => void) {
  const [secondsLeft, setSecondsLeft] = useState(POMODORO_DURATION);
  const [state, setState] = useState<TimerState>('idle');
  const intervalRef = useRef<number | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const start = useCallback(() => {
    if (state === 'running') return;
    setState('running');
  }, [state]);

  const pause = useCallback(() => {
    if (state !== 'running') return;
    setState('paused');
  }, [state]);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setState('idle');
    setSecondsLeft(POMODORO_DURATION);
  }, []);

  useEffect(() => {
    if (state === 'running') {
      intervalRef.current = window.setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setState('finished');
            onCompleteRef.current();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state]);

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');

  return { secondsLeft, formatted: `${mm}:${ss}`, state, start, pause, reset };
}
