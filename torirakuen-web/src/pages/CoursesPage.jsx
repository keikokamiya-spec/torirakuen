import { FiExternalLink } from 'react-icons/fi';
import SectionHeader from '../components/ui/SectionHeader';
import { COURSES, SHOP_INFO } from '../data/shopData';
import styles from './CoursesPage.module.css';

export default function CoursesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHero}>
        <p className={styles.heroEn}>COURSE</p>
        <h1 className={styles.heroJa}>コース一覧</h1>
      </div>

      <div className={styles.inner}>
        <SectionHeader
          en="COURSE LINEUP"
          ja="備長炭焼鳥 食べ飲み放題コース"
          description="本格備長炭焼鳥の食べ放題と、豊富なドリンクが楽しめる飲み放題をセットにしたコースをご用意しています。グループでのご利用に最適です。"
        />

        <div className={styles.list}>
          {COURSES.map(course => (
            <article key={course.id} className={`${styles.card} fade-in-up`}>
              <div className={styles.imgBox}>
                <img src={course.image} alt={course.title.replace('\n', ' ')} />
                {course.badge && <span className={styles.badge}>{course.badge}</span>}
              </div>
              <div className={styles.body}>
                <h2 className={styles.title}>{course.title}</h2>
                <div className={styles.meta}>
                  {course.dishCount && <span className={styles.metaTag}>{course.dishCount}</span>}
                  <span className={styles.metaTag}>{course.includes}</span>
                  <span className={styles.metaTag}>{course.guestRange}</span>
                </div>
                <p className={styles.description}>{course.description}</p>
                <div className={styles.priceArea}>
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
                      <FiExternalLink size={14} /> 食べログで予約する
                    </a>
                    <a
                      href={SHOP_INFO.sns.hotpepper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.ctaBtn} ${styles.hotpepperBtn}`}
                    >
                      <FiExternalLink size={14} /> ホットペッパーで予約する
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.notice} fade-in-up`}>
          <h3 className={styles.noticeTitle}>ご予約・ご利用にあたって</h3>
          <ul className={styles.noticeList}>
            <li>価格はすべて税込です。</li>
            <li>お通し代として一人前380円を頂戴しております。</li>
            <li>コースの内容や価格は予告なく変更になる場合があります。</li>
            <li>各種グルメサイトのクーポンをご利用いただける場合がございます。詳細はご予約サイトをご確認ください。</li>
            <li>ご不明な点はお電話（{SHOP_INFO.phone.reservation}）にてお気軽にお問い合わせください。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
