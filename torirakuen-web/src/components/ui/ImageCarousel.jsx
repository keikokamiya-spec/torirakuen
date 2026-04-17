import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './ImageCarousel.module.css';

export default function ImageCarousel({ items, showThumbnails = true, autoPlay = true, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [next, autoPlay, interval]);

  const handleManual = (fn) => {
    clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(next, interval);
  };

  const item = items[current];

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.imageBox}>
          <img src={item.image} alt={item.alt} className={styles.image} />
          <div className={styles.overlay} />
        </div>
        <div className={styles.content}>
          {item.badge && <span className={styles.badge}>{item.badge}</span>}
          <h3 className={styles.title}>{item.title}</h3>
          {item.price && <p className={styles.price}>{item.price}</p>}
          <p className={styles.description}>{item.description}</p>
        </div>
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => handleManual(prev)}
          aria-label="前へ"
        >
          ‹
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => handleManual(next)}
          aria-label="次へ"
        >
          ›
        </button>
      </div>

      {showThumbnails && (
        <div className={styles.thumbnails}>
          {items.map((it, i) => (
            <button
              key={it.id}
              className={`${styles.thumb} ${i === current ? styles.thumbActive : ''}`}
              onClick={() => handleManual(() => setCurrent(i))}
              aria-label={it.title}
            >
              <img src={it.image} alt={it.alt} />
            </button>
          ))}
        </div>
      )}

      <div className={styles.dots}>
        {items.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => handleManual(() => setCurrent(i))}
            aria-label={`スライド${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
