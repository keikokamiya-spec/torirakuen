import InfoSection from '../components/sections/InfoSection';
import styles from './AccessPage.module.css';

export default function AccessPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHero}>
        <p className={styles.heroEn}>ACCESS</p>
        <h1 className={styles.heroJa}>アクセス・店舗情報</h1>
      </div>
      <InfoSection />
    </div>
  );
}
