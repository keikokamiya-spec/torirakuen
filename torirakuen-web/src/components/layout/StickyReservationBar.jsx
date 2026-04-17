import { useState } from 'react';
import { FiPhone, FiCalendar, FiX, FiExternalLink } from 'react-icons/fi';
import { SHOP_INFO } from '../../data/shopData';
import styles from './StickyReservationBar.module.css';

export default function StickyReservationBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className={styles.bar}>
        <a
          href={`tel:${SHOP_INFO.phone.reservation.replace(/-/g, '')}`}
          className={`${styles.item} ${styles.phone}`}
        >
          <FiPhone size={20} />
          <span>電話</span>
        </a>
        <button
          className={`${styles.item} ${styles.web}`}
          onClick={() => setDrawerOpen(true)}
        >
          <FiCalendar size={20} />
          <span>WEB予約</span>
        </button>
      </div>

      {/* ドロワー */}
      {drawerOpen && (
        <div className={styles.overlay} onClick={() => setDrawerOpen(false)}>
          <div className={styles.drawer} onClick={e => e.stopPropagation()}>
            <div className={styles.drawerHandle} />
            <p className={styles.drawerTitle}>WEBからご予約</p>
            <a
              href={SHOP_INFO.sns.tabelog}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.drawerBtn} ${styles.tabelogBtn}`}
              onClick={() => setDrawerOpen(false)}
            >
              <FiExternalLink size={16} />
              食べログで予約
            </a>
            <a
              href={SHOP_INFO.sns.hotpepper}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.drawerBtn} ${styles.hotpepperBtn}`}
              onClick={() => setDrawerOpen(false)}
            >
              <FiExternalLink size={16} />
              ホットペッパーグルメで予約
            </a>
            <button className={styles.drawerClose} onClick={() => setDrawerOpen(false)}>
              <FiX size={20} />
              <span>閉じる</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
