import styles from './Header.module.css';

interface HeaderProps {
  pendingCount: number;
  doneCount: number;
}

export function Header({ pendingCount, doneCount }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>✧ 我的待办清单 ✧</h1>
      <p className={styles.subtitle}>今天也要加油哦~</p>
      <div className={styles.counter}>
        <span>待完成 <b>{pendingCount}</b></span>
        <span>已完成 <b>{doneCount}</b></span>
      </div>
    </div>
  );
}
