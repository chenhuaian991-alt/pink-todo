import { useCallback } from 'react';
import { usePomodoro } from '../../hooks/usePomodoro';
import styles from './PomodoroTimer.module.css';

interface PomodoroTimerProps {
  todoId: number;
  onComplete: (todoId: number) => void;
}

export function PomodoroTimer({ todoId, onComplete }: PomodoroTimerProps) {
  const handleComplete = useCallback(() => onComplete(todoId), [todoId, onComplete]);
  const { formatted, state, start, pause, reset } = usePomodoro(handleComplete);

  const stateClass = state === 'running' ? styles.running : state === 'finished' ? styles.finished : '';

  return (
    <div className={`${styles.timer} ${stateClass}`}>
      <span className={styles.display}>{formatted}</span>
      {state === 'idle' && <button className={styles.btnTimer} onClick={start}>开始</button>}
      {state === 'running' && <button className={styles.btnTimer} onClick={pause}>暂停</button>}
      {state === 'paused' && (
        <>
          <button className={styles.btnTimer} onClick={start}>继续</button>
          <button className={styles.btnTimer} onClick={reset}>重置</button>
        </>
      )}
      {state === 'finished' && (
        <>
          <span className={styles.status}>🎉 完成!</span>
          <button className={styles.btnTimer} onClick={reset}>重置</button>
        </>
      )}
    </div>
  );
}
