import styles from './CharacterDecorations.module.css';

export function CharacterDecorations() {
  return (
    <>
      <div className={`${styles.deco} ${styles.topLeft}`}>
        <img src="/images/character-tl.svg" alt="" aria-hidden="true" />
      </div>
      <div className={`${styles.deco} ${styles.topRight}`}>
        <img src="/images/character-tr.svg" alt="" aria-hidden="true" />
      </div>
      <div className={`${styles.deco} ${styles.bottomLeft}`}>
        <img src="/images/character-bl.svg" alt="" aria-hidden="true" />
      </div>
      <div className={`${styles.deco} ${styles.bottomRight}`}>
        <img src="/images/character-br.svg" alt="" aria-hidden="true" />
      </div>
    </>
  );
}
