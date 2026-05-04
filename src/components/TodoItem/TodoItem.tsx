import { useState } from 'react';
import type { Todo } from '../../types';
import { PomodoroTimer } from '../PomodoroTimer/PomodoroTimer';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  deleting: boolean;
  onToggle: (id: number) => void;
  onDeleteRequest: (id: number) => void;
  onTransitionEnd: (id: number) => void;
  onIncrementPomodoro: (id: number) => void;
}

export function TodoItem({ todo, deleting, onToggle, onDeleteRequest, onTransitionEnd, onIncrementPomodoro }: TodoItemProps) {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <div
        className={`${styles.item} ${deleting ? styles.deleting : ''}`}
        onTransitionEnd={() => { if (deleting) onTransitionEnd(todo.id); }}
      >
        <div
          className={`${styles.checkbox} ${todo.done ? styles.checked : ''}`}
          onClick={() => onToggle(todo.id)}
        />
        <div className={styles.main}>
          <div className={styles.textRow}>
            <span className={`${styles.text} ${todo.done ? styles.done : ''}`}>
              {todo.text}
            </span>
            {todo.completedCount > 0 && (
              <span className={styles.badge}>x{todo.completedCount}</span>
            )}
            {todo.pomodoroSessions > 0 && (
              <span className={styles.badge}>🍅{todo.pomodoroSessions}</span>
            )}
          </div>
          {showTimer && (
            <PomodoroTimer
              todoId={todo.id}
              onComplete={onIncrementPomodoro}
            />
          )}
        </div>
        <div className={styles.actions}>
          <button
            className={styles.btnIcon}
            onClick={() => setShowTimer(v => !v)}
            title="番茄钟"
          >
            🍅
          </button>
          <button
            className={styles.btnIcon}
            onClick={() => onDeleteRequest(todo.id)}
            title="删除"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
