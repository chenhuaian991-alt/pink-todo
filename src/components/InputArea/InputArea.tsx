import { useState, useRef } from 'react';
import styles from './InputArea.module.css';

interface InputAreaProps {
  onAdd: (text: string) => void;
}

export function InputArea({ onAdd }: InputAreaProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAdd() {
    const text = value.trim();
    if (!text) { inputRef.current?.focus(); return; }
    onAdd(text);
    setValue('');
    inputRef.current?.focus();
  }

  return (
    <div className={styles.inputArea}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="写下要做的事情~"
        maxLength={100}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') handleAdd(); }}
      />
      <button className={styles.btnAdd} onClick={handleAdd} title="添加">+</button>
    </div>
  );
}
