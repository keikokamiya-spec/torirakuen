import SectionHeader from '../components/ui/SectionHeader';
import styles from './GalleryPage.module.css';

const base = import.meta.env.BASE_URL;

const GALLERY_ITEMS = [
  { src: `${base}images/hero3.jpg`, alt: '店内全景', category: '店内' },
  { src: `${base}images/P045800866_480.jpg`, alt: '備長炭焼鳥', category: '料理' },
  { src: `${base}images/P046162569_480.jpg`, alt: '自家製エビマヨ', category: '料理' },
  { src: `${base}images/P047882147_480.jpg`, alt: 'テーブル席', category: '店内' },
  { src: `${base}images/P047882468_480.jpg`, alt: '焼鳥アップ', category: '料理' },
  { src: `${base}images/naikan2.jpg`, alt: '宴会スペース', category: '店内' },
  { src: `${base}images/P046162566_480.jpg`, alt: 'チキン南蛮', category: '料理' },
  { src: `${base}images/P048998033_238.jpg`, alt: 'ソファ席', category: '店内' },
  { src: `${base}images/P045800875_480.jpg`, alt: 'ごま団子', category: '料理' },
  { src: `${base}images/naikan.jpg`, alt: 'カウンター席', category: '店内' },
  { src: `${base}images/P045800806_480.jpg`, alt: 'くつろぎ空間', category: '店内' },
  { src: `${base}images/P045800856_480.jpg`, alt: '貸切パーティー', category: '宴会' },
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
