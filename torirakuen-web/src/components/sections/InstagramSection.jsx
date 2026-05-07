import { FiInstagram } from 'react-icons/fi';
import { SHOP_INFO } from '../../data/shopData';
import styles from './InstagramSection.module.css';

const base = import.meta.env.BASE_URL;

// ダミーのInstagram投稿プレースホルダー（実装後はInstagram APIに差し替え）
const IG_PLACEHOLDER = [
  `${base}images/P046162569_480.jpg`,
  `${base}images/P045800866_480.jpg`,
  `${base}images/P047882147_480.jpg`,
  `${base}images/P046162582_480.jpg`,
  `${base}images/P048998033_238.jpg`,
  `${base}images/P045800874_480.jpg`,
];

export default function InstagramSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={`${styles.header} fade-in-up`}>
          <FiInstagram size={28} className={styles.igIcon} />
          <div>
            <p className={styles.igHandle}>@torirakuen</p>
            <p className={styles.igSub}>公式Instagramをフォローして最新情報をチェック</p>
          </div>
          <a
            href={SHOP_INFO.sns.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.followBtn}
          >
            フォローする
          </a>
        </div>

        <div className={`${styles.grid} fade-in-up`}>
          {IG_PLACEHOLDER.map((src, i) => (
            <a
              key={i}
              href={SHOP_INFO.sns.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.post}
            >
              <img src={src} alt={`Instagram投稿 ${i + 1}`} />
              <div className={styles.postOverlay}>
                <FiInstagram size={24} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
