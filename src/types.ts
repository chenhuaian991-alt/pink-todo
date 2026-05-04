export interface Todo {
  id: number;
  text: string;
  done: boolean;
  completedCount: number;
  pomodoroSessions: number;
}

export type FilterType = 'all' | 'pending' | 'done';
