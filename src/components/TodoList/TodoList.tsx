import { useState, useCallback } from 'react';
import type { Todo, FilterType } from '../../types';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: Todo[];
  filter: FilterType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onIncrementPomodoro: (id: number) => void;
}

const EMPTY_MSGS: Record<FilterType, string> = {
  all: '还没有待办事项哦~',
  pending: '全部完成啦！',
  done: '还没有完成的任务',
};

export function TodoList({ todos, filter, onToggle, onDelete, onIncrementPomodoro }: TodoListProps) {
  const [deletingIds, setDeletingIds] = useState<Set<number>>(new Set());

  const handleDeleteRequest = useCallback((id: number) => {
    setDeletingIds(prev => new Set(prev).add(id));
  }, []);

  const handleTransitionEnd = useCallback((id: number) => {
    onDelete(id);
    setDeletingIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, [onDelete]);

  const filtered = todos.filter(t => {
    if (filter === 'pending') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  if (filtered.length === 0) {
    return (
      <div className={`todo-list ${styles.todoList}`}>
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🎀</div>
          {EMPTY_MSGS[filter]}
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-list ${styles.todoList}`}>
      {filtered.map(t => (
        <TodoItem
          key={t.id}
          todo={t}
          deleting={deletingIds.has(t.id)}
          onToggle={onToggle}
          onDeleteRequest={handleDeleteRequest}
          onTransitionEnd={handleTransitionEnd}
          onIncrementPomodoro={onIncrementPomodoro}
        />
      ))}
    </div>
  );
}
