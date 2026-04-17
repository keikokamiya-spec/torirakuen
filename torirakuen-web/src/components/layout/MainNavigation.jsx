import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiExternalLink } from 'react-icons/fi';
import { SHOP_INFO } from '../../data/shopData';
import styles from './MainNavigation.module.css';

const NAV_LINKS = [
  { to: '/',         label: 'ホーム',   exact: true },
  { to: '/courses',  label: 'コース'               },
  { to: '/seats',    label: 'お席・貸切'           },
  { to: '/gallery',  label: 'ギャラリー'           },
  { to: '/access',   label: 'アクセス'             },
];

export default function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.inner}>
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* ハンバーガー（スマホ） */}
        <button className={styles.hamburger} onClick={() => setOpen(true)} aria-label="メニューを開く">
          <FiMenu size={22} />
        </button>
      </nav>

      {/* ドロワーメニュー */}
      {open && (
        <div className={styles.drawerOverlay} onClick={() => setOpen(false)}>
          <nav className={styles.drawer} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setOpen(false)} aria-label="閉じる">
              <FiX size={24} />
            </button>
            <div className={styles.drawerBrand}>鳥楽苑</div>
            <ul className={styles.drawerLinks}>
              {NAV_LINKS.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.exact}
                    className={({ isActive }) =>
                      `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={styles.drawerCta}>
              <a href={`tel:${SHOP_INFO.phone.reservation.replace(/-/g, '')}`} className={styles.drawerPhone}>
                <FiPhone size={16} />
                {SHOP_INFO.phone.reservation}
              </a>
              <a href={SHOP_INFO.sns.tabelog} target="_blank" rel="noopener noreferrer" className={`${styles.drawerBtn} ${styles.tabelogBtn}`}>
                <FiExternalLink size={13} /> 食べログで予約
              </a>
              <a href={SHOP_INFO.sns.hotpepper} target="_blank" rel="noopener noreferrer" className={`${styles.drawerBtn} ${styles.hotpepperBtn}`}>
                <FiExternalLink size={13} /> ホットペッパーで予約
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
