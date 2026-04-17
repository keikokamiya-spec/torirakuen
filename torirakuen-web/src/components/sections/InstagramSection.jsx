import { FiInstagram } from 'react-icons/fi';
import { SHOP_INFO } from '../../data/shopData';
import styles from './InstagramSection.module.css';

// ダミーのInstagram投稿プレースホルダー（実装後はInstagram APIに差し替え）
const IG_PLACEHOLDER = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
  'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
  'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80',
  'https://images.unsplash.com/photo-1571197119738-be3b4f18f2d6?w=400&q=80',
  'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80',
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
