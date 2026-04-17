import { FiCheck, FiMail } from 'react-icons/fi';
import { SHOP_INFO } from '../../data/shopData';
import styles from './BanquetSection.module.css';

const FEATURES = [
  '20〜50名様まで貸切対応',
  'レイアウト変更可能',
  '100インチプロジェクター完備',
  '無料Wi-Fi',
  '車椅子入店可',
  '全席禁煙（テラス席のみ喫煙可）',
];

export default function BanquetSection() {
  return (
    <section className={styles.section}>
      {/* 背景画像 */}
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&q=80"
          alt="鳥楽苑 宴会・貸切対応の広い空間"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>
        <div className={`${styles.content} fade-in-up`}>
          <p className={styles.en}>BANQUET &amp; PRIVATE</p>
          <h2 className={styles.title}>
            最大50名様まで、<br />
            貸切対応いたします。
          </h2>
          <p className={styles.body}>
            歓送迎会・忘新年会・各種パーティーなど、
            20〜50名様の大人数でのご利用に対応。
            テーブルのレイアウト変更も可能で、
            100インチプロジェクターや無料Wi-Fiも完備しており、
            プレゼンテーションや映像上映にもご活用いただけます。
          </p>
          <ul className={styles.features}>
            {FEATURES.map((f, i) => (
              <li key={i} className={styles.feature}>
                <FiCheck size={15} className={styles.check} />
                {f}
              </li>
            ))}
          </ul>
          <a
            href={SHOP_INFO.contact}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <FiMail size={16} />
            貸切・宴会のご相談はこちら
          </a>
        </div>
      </div>
    </section>
  );
}
