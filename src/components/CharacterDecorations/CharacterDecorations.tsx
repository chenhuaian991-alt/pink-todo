import styles from './CharacterDecorations.module.css';

export function CharacterDecorations() {
  return (
    <>
      <div className={`${styles.deco} ${styles.topLeft}`}>
        <img src="/images/character-tl.jpg" alt="" aria-hidden="true" />
      </div>
      <div className={`${styles.deco} ${styles.topRight}`}>
        <img src="/images/character-tr.jpg" alt="" aria-hidden="true" />
      </div>
      <div className={`${styles.deco} ${styles.bottomLeft}`}>
        <img src="/images/character-bl.jpg" alt="" aria-hidden="true" />
      </div>
      <div className={`${styles.deco} ${styles.bottomRight}`}>
        <img src="/images/character-br.png" alt="" aria-hidden="true" />
      </div>
    </>
  );
}
