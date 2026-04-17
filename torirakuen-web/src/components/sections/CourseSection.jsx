import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { COURSES, SHOP_INFO } from '../../data/shopData';
import styles from './CourseSection.module.css';

export default function CourseSection() {
  return (
    <section id="courses" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          en="COURSE"
          ja="コース"
          description="備長炭焼鳥食べ放題＋飲み放題のコースをご用意。特別な夜もカジュアルな集まりにも対応しています。"
        />
        <ul className={`${styles.list} fade-in-up`}>
          {COURSES.map(course => (
            <li key={course.id} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={course.image} alt={course.title.replace('\n', ' ')} />
                {course.badge && <span className={styles.badge}>{course.badge}</span>}
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{course.title}</h3>
                <div className={styles.meta}>
                  {course.dishCount && <span className={styles.metaTag}>{course.dishCount}</span>}
                  <span className={styles.metaTag}>{course.includes}</span>
                  <span className={styles.metaTag}>{course.guestRange}</span>
                </div>
                <p className={styles.description}>{course.description}</p>
                <div className={styles.price}>
                  <span className={styles.priceNum}>{course.price}</span>
                  <span className={styles.priceNote}>（{course.priceNote}）</span>
                </div>
                <div className={styles.ctas}>
                  <a
                    href={SHOP_INFO.sns.tabelog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.ctaBtn} ${styles.tabelogBtn}`}
                  >
                    <FiExternalLink size={13} /> 食べログで予約
                  </a>
                  <a
                    href={SHOP_INFO.sns.hotpepper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.ctaBtn} ${styles.hotpepperBtn}`}
                  >
                    <FiExternalLink size={13} /> ホットペッパー
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.more}>
          <Link to="/courses" className={styles.moreLink}>
            コース一覧をすべて見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
