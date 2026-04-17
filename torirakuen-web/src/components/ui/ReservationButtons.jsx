import { FiPhone, FiExternalLink } from 'react-icons/fi';
import { SHOP_INFO } from '../../data/shopData';
import styles from './ReservationButtons.module.css';

export default function ReservationButtons({ layout = 'row', showPhone = true }) {
  return (
    <div className={`${styles.wrapper} ${styles[layout]}`}>
      {showPhone && (
        <a href={`tel:${SHOP_INFO.phone.reservation.replace(/-/g, '')}`} className={`${styles.btn} ${styles.phone}`}>
          <FiPhone size={16} />
          <span>電話で予約</span>
          <span className={styles.sub}>{SHOP_INFO.phone.reservation}</span>
        </a>
      )}
      <a
        href={SHOP_INFO.sns.tabelog}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.tabelog}`}
      >
        <FiExternalLink size={14} />
        <span>食べログで予約</span>
      </a>
      <a
        href={SHOP_INFO.sns.hotpepper}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.hotpepper}`}
      >
        <FiExternalLink size={14} />
        <span>ホットペッパーで予約</span>
      </a>
    </div>
  );
}
