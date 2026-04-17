import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import MainNavigation from './MainNavigation';
import StickyReservationBar from './StickyReservationBar';
import PageFooter from './PageFooter';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // ページ遷移時にトップへスクロール
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // フェードインアニメーション（IntersectionObserver）
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <SiteHeader />
      <MainNavigation />
      <main className={styles.main}>
        {children}
      </main>
      <PageFooter />
      <StickyReservationBar />
    </div>
  );
}
