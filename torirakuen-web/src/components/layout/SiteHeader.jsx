import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { SHOP_INFO } from '../../data/shopData';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* ロゴ・店名 */}
        <Link to="/" className={styles.brand}>
          <span className={styles.logoSymbol}>🍢</span>
          <span className={styles.nameJa}>{SHOP_INFO.name}</span>
          <span className={styles.nameEn}>TORIRAKUEN</span>
        </Link>

        {/* 右側：電話・予約CTA */}
        <div className={styles.right}>
          <a href={`tel:${SHOP_INFO.phone.reservation.replace(/-/g, '')}`} className={styles.phone}>
            <FiPhone size={15} />
            <span className={styles.phoneNum}>{SHOP_INFO.phone.reservation}</span>
            <span className={styles.phoneSub}>予約専用</span>
          </a>
          <a
            href={SHOP_INFO.sns.tabelog}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaBtn} ${styles.tabelogBtn}`}
          >
            食べログ予約
          </a>
          <a
            href={SHOP_INFO.sns.hotpepper}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaBtn} ${styles.hotpepperBtn}`}
          >
            ホットペッパー
          </a>
        </div>
      </div>
    </header>
  );
}
