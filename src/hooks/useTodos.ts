import { useState, useEffect, useCallback } from 'react';
import type { Todo } from '../types';

const STORAGE_KEY = 'pink_todos';

function loadTodos(): Todo[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    const parsed = JSON.parse(stored);
    return parsed.map((t: Record<string, unknown>) => ({
      id: t.id as number,
      text: t.text as string,
      done: t.done as boolean,
      completedCount: (t.completedCount as number) ?? ((t.done as boolean) ? 1 : 0),
      pomodoroSessions: (t.pomodoroSessions as number) ?? 0,
    }));
  } catch {
    return [];
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(loadTodos);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((text: string) => {
    setTodos(prev => [
      { id: Date.now(), text, done: false, completedCount: 0, pomodoroSessions: 0 },
      ...prev,
    ]);
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prev => prev.map(t =>
      t.id === id
        ? { ...t, done: !t.done, completedCount: t.done ? t.completedCount : t.completedCount + 1 }
        : t,
    ));
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []);

  const incrementPomodoro = useCallback((id: number) => {
    setTodos(prev => prev.map(t =>
      t.id === id ? { ...t, pomodoroSessions: t.pomodoroSessions + 1 } : t,
    ));
  }, []);

  return { todos, addTodo, toggleTodo, deleteTodo, incrementPomodoro };
}
