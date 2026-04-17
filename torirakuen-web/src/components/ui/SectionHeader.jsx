import styles from './SectionHeader.module.css';

export default function SectionHeader({ en, ja, description, light = false }) {
  return (
    <div className={`${styles.wrapper} ${light ? styles.light : ''}`}>
      <p className={styles.en}>{en}</p>
      <h2 className={styles.ja}>{ja}</h2>
      {description && <p className={styles.description}>{description}</p>}
      <span className={styles.line} />
    </div>
  );
}
