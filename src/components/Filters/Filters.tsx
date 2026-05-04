import type { FilterType } from '../../types';
import styles from './Filters.module.css';

interface FiltersProps {
  active: FilterType;
  onChange: (f: FilterType) => void;
}

const OPTIONS: { key: FilterType; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'pending', label: '待完成' },
  { key: 'done', label: '已完成' },
];

export function Filters({ active, onChange }: FiltersProps) {
  return (
    <div className={styles.filters}>
      {OPTIONS.map(o => (
        <button
          key={o.key}
          className={`${styles.btn} ${active === o.key ? styles.active : ''}`}
          onClick={() => onChange(o.key)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
