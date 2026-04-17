import SectionHeader from '../ui/SectionHeader';
import { DRINK_CATEGORIES } from '../../data/shopData';
import styles from './DrinkSection.module.css';

export default function DrinkSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          en="DRINK"
          ja="ドリンク"
          description="女性に嬉しいサワー・カクテルをはじめ、日本酒・焼酎・ワインなど40種類以上のドリンクを取り揃えています。"
          light
        />
        <div className={`${styles.grid} fade-in-up`}>
          {DRINK_CATEGORIES.map(cat => (
            <div key={cat.id} className={styles.card}>
              <span className={styles.icon}>{cat.icon}</span>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.description}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.note} fade-in-up`}>
          <p>飲み放題コース（2〜3時間）でお得にお楽しみいただけます。</p>
          <p>コースの詳細は<a href="#courses" className={styles.noteLink}>コースページ</a>をご確認ください。</p>
        </div>
      </div>
    </section>
  );
}
