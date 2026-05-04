import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import { useSakura } from './hooks/useSakura';
import { Header } from './components/Header/Header';
import { InputArea } from './components/InputArea/InputArea';
import { Filters } from './components/Filters/Filters';
import { TodoList } from './components/TodoList/TodoList';
import { CharacterDecorations } from './components/CharacterDecorations/CharacterDecorations';
import type { FilterType } from './types';

function App() {
  useSakura();
  const { todos, addTodo, toggleTodo, deleteTodo, incrementPomodoro } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');

  const pendingCount = todos.filter(t => !t.done).length;
  const doneCount = todos.filter(t => t.done).length;

  return (
    <>
      <CharacterDecorations />
      <Header pendingCount={pendingCount} doneCount={doneCount} />
      <InputArea onAdd={addTodo} />
      <Filters active={filter} onChange={setFilter} />
      <TodoList
        todos={todos}
        filter={filter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onIncrementPomodoro={incrementPomodoro}
      />
      <div style={{ textAlign: 'center', padding: '20px', color: 'var(--text-light)', fontSize: 12, letterSpacing: 1 }}>
        ✦ 用心生活 ✦ 认真待办 ✦
      </div>
    </>
  );
}

export default App;
