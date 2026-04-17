import SectionHeader from '../components/ui/SectionHeader';
import styles from './GalleryPage.module.css';

const GALLERY_ITEMS = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: '店内全景', category: '店内' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', alt: '備長炭焼鳥', category: '料理' },
  { src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', alt: '自家製エビマヨ', category: '料理' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', alt: 'テーブル席', category: '店内' },
  { src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80', alt: '焼鳥アップ', category: '料理' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: '宴会スペース', category: '店内' },
  { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80', alt: 'チキン南蛮', category: '料理' },
  { src: 'https://images.unsplash.com/photo-1571197119738-be3b4f18f2d6?w=800&q=80', alt: 'ソファ席', category: '店内' },
  { src: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80', alt: 'ごま団子', category: '料理' },
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80', alt: 'カウンター席', category: '店内' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80', alt: 'くつろぎ空間', category: '店内' },
  { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80', alt: '貸切パーティー', category: '宴会' },
];

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHero}>
        <p className={styles.heroEn}>GALLERY</p>
        <h1 className={styles.heroJa}>ギャラリー</h1>
      </div>

      <div className={styles.inner}>
        <SectionHeader
          en="PHOTO GALLERY"
          ja="店内・料理の写真"
          description="鳥楽苑の魅力をご覧ください。実際の雰囲気や料理を写真でご確認いただけます。"
        />
        <div className={`${styles.grid} fade-in-up`}>
          {GALLERY_ITEMS.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.imgBox}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className={styles.overlay}>
                  <span className={styles.category}>{item.category}</span>
                  <p className={styles.altText}>{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
