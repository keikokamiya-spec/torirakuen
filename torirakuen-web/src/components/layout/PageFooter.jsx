import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiClock, FiInstagram, FiExternalLink } from 'react-icons/fi';
import { SHOP_INFO } from '../../data/shopData';
import styles from './PageFooter.module.css';

export default function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* ブランド */}
        <div className={styles.brand}>
          <p className={styles.nameJa}>{SHOP_INFO.name}</p>
          <p className={styles.nameEn}>TORIRAKUEN</p>
          <p className={styles.tagline}>{SHOP_INFO.tagline}</p>
          <div className={styles.sns}>
            <a href={SHOP_INFO.sns.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.snsIcon}>
              <FiInstagram size={20} />
            </a>
            <a href={SHOP_INFO.sns.tabelog} target="_blank" rel="noopener noreferrer" className={styles.snsText}>食べログ</a>
            <a href={SHOP_INFO.sns.hotpepper} target="_blank" rel="noopener noreferrer" className={styles.snsText}>ホットペッパー</a>
          </div>
        </div>

        {/* 店舗情報 */}
        <div className={styles.info}>
          <h3 className={styles.colTitle}>店舗情報</h3>
          <ul className={styles.infoList}>
            <li>
              <FiMapPin size={14} className={styles.icon} />
              <span>{SHOP_INFO.address}</span>
            </li>
            <li>
              <FiPhone size={14} className={styles.icon} />
              <span>
                予約専用 {SHOP_INFO.phone.reservation}<br />
                代表 {SHOP_INFO.phone.main}
              </span>
            </li>
            <li>
              <FiClock size={14} className={styles.icon} />
              <span>
                月〜金 {SHOP_INFO.hours.weekday}<br />
                土・日・祝 {SHOP_INFO.hours.weekend}<br />
                <small>{SHOP_INFO.hours.lo}</small>
              </span>
            </li>
          </ul>
        </div>

        {/* ナビ */}
        <div className={styles.navCol}>
          <h3 className={styles.colTitle}>メニュー</h3>
          <ul className={styles.navList}>
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/courses">コース</Link></li>
            <li><Link to="/seats">お席・貸切</Link></li>
            <li><Link to="/gallery">ギャラリー</Link></li>
            <li><Link to="/access">アクセス</Link></li>
            <li>
              <a href={SHOP_INFO.contact} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <FiExternalLink size={12} />お問い合わせ
              </a>
            </li>
          </ul>
        </div>

        {/* 予約 */}
        <div className={styles.reserveCol}>
          <h3 className={styles.colTitle}>ご予約</h3>
          <div className={styles.ctaBtns}>
            <a href={SHOP_INFO.sns.tabelog} target="_blank" rel="noopener noreferrer" className={`${styles.footerBtn} ${styles.tabelogBtn}`}>
              食べログで予約
            </a>
            <a href={SHOP_INFO.sns.hotpepper} target="_blank" rel="noopener noreferrer" className={`${styles.footerBtn} ${styles.hotpepperBtn}`}>
              ホットペッパーで予約
            </a>
            <a href={`tel:${SHOP_INFO.phone.reservation.replace(/-/g, '')}`} className={`${styles.footerBtn} ${styles.phoneBtn}`}>
              <FiPhone size={14} /> {SHOP_INFO.phone.reservation}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© {new Date().getFullYear()} 鳥楽苑 All Rights Reserved.</p>
        <p className={styles.charge}>※ お通し代 380円 / QRコード決済はご利用いただけません</p>
      </div>
    </footer>
  );
}
