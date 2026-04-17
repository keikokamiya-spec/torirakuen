import { FiCheck } from 'react-icons/fi';
import SectionHeader from '../components/ui/SectionHeader';
import { MOOD_ITEMS, SHOP_INFO } from '../data/shopData';
import styles from './SeatsPage.module.css';

export default function SeatsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHero}>
        <p className={styles.heroEn}>SEATS & PRIVATE</p>
        <h1 className={styles.heroJa}>お席・貸切情報</h1>
      </div>

      <div className={styles.inner}>
        <SectionHeader
          en="OUR SEATS"
          ja="席のご案内"
          description="44〜45席の広々とした店内。テーブル席・ソファ席・カウンター席と、シーンに合わせた席をご用意しています。"
        />

        <div className={`${styles.seatGrid} fade-in-up`}>
          {MOOD_ITEMS.map(item => (
            <div key={item.id} className={styles.seatCard}>
              <div className={styles.seatImgBox}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.seatBody}>
                <h3 className={styles.seatTitle}>{item.title}</h3>
                <p className={styles.seatDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 貸切セクション */}
        <div className={`${styles.banquet} fade-in-up`}>
          <div className={styles.banquetImg}>
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80"
              alt="貸切・宴会スペース"
            />
          </div>
          <div className={styles.banquetBody}>
            <p className={styles.banquetEn}>BANQUET & PRIVATE</p>
            <h2 className={styles.banquetTitle}>貸切・宴会のご案内</h2>
            <p className={styles.banquetDesc}>
              20〜50名様まで貸切対応が可能です。テーブルのレイアウト変更も可能で、
              歓送迎会・忘新年会・誕生日会・各種パーティーなど幅広いシーンでご利用いただけます。
            </p>
            <ul className={styles.banquetFeatures}>
              {SHOP_INFO.facilities.map((f, i) => (
                <li key={i}>
                  <FiCheck size={14} />
                  {f}
                </li>
              ))}
              <li><FiCheck size={14} />貸切人数：20〜50名様</li>
              <li><FiCheck size={14} />レイアウト変更可能</li>
            </ul>
            <a
              href={SHOP_INFO.contact}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.banquetCta}
            >
              貸切のご相談・お問い合わせはこちら →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
