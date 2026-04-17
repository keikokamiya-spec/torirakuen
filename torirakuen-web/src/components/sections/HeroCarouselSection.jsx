import { useState, useEffect, useCallback, useRef } from 'react';
import { HERO_SLIDES } from '../../data/shopData';
import styles from './HeroCarouselSection.module.css';

export default function HeroCarouselSection() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 400);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % HERO_SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const slide = HERO_SLIDES[current];

  return (
    <section className={styles.hero}>
      {/* 背景画像 */}
      <div className={`${styles.bgImage} ${transitioning ? styles.transitioning : ''}`}>
        <img src={slide.image} alt={slide.alt} />
      </div>

      {/* オーバーレイ */}
      <div className={styles.overlay} />

      {/* テキスト */}
      <div className={`${styles.content} ${transitioning ? styles.transitioning : ''}`}>
        <p className={styles.en}>TORIRAKUEN / FUNABASHI</p>
        <h1 className={styles.caption}>{slide.caption}</h1>
        <p className={styles.subcaption}>{slide.subcaption}</p>
        <div className={styles.ctas}>
          <a href="#courses" className={`${styles.ctaBtn} ${styles.primary}`}>
            コースを見る
          </a>
          <a
            href="https://tabelog.com/chiba/A1202/A120201/12061176/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaBtn} ${styles.tabelog}`}
          >
            食べログで予約
          </a>
        </div>
      </div>

      {/* インジケーター */}
      <div className={styles.indicators}>
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => { clearInterval(timerRef.current); goTo(i); }}
            aria-label={`スライド${i + 1}`}
          />
        ))}
      </div>

      {/* スクロールヒント */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL</span>
      </div>
    </section>
  );
}
