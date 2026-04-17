import { FiPhone, FiExternalLink, FiMail } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { SHOP_INFO } from '../../data/shopData';
import styles from './ReservationSection.module.css';

export default function ReservationSection() {
  return (
    <section id="reservation" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader en="RESERVATION" ja="ご予約・お問い合わせ" />

        <div className={`${styles.grid} fade-in-up`}>
          {/* 電話予約 */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FiPhone size={28} />
            </div>
            <h3 className={styles.cardTitle}>お電話でのご予約</h3>
            <p className={styles.cardSub}>お気軽にお電話ください</p>
            <div className={styles.phones}>
              <a href={`tel:${SHOP_INFO.phone.reservation.replace(/-/g, '')}`} className={styles.phoneCard}>
                <span className={styles.phoneLabel}>予約専用</span>
                <span className={styles.phoneNum}>{SHOP_INFO.phone.reservation}</span>
              </a>
              <a href={`tel:${SHOP_INFO.phone.main.replace(/-/g, '')}`} className={styles.phoneCard}>
                <span className={styles.phoneLabel}>代表番号</span>
                <span className={styles.phoneNum}>{SHOP_INFO.phone.main}</span>
              </a>
            </div>
          </div>

          {/* WEB予約 */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FiExternalLink size={28} />
            </div>
            <h3 className={styles.cardTitle}>WEBからのご予約</h3>
            <p className={styles.cardSub}>24時間いつでもご予約いただけます</p>
            <div className={styles.webBtns}>
              <a
                href={SHOP_INFO.sns.tabelog}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.webBtn} ${styles.tabelogBtn}`}
              >
                食べログで予約する
              </a>
              <a
                href={SHOP_INFO.sns.hotpepper}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.webBtn} ${styles.hotpepperBtn}`}
              >
                ホットペッパーグルメで予約する
              </a>
            </div>
          </div>

          {/* お問い合わせ */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FiMail size={28} />
            </div>
            <h3 className={styles.cardTitle}>お問い合わせ</h3>
            <p className={styles.cardSub}>貸切・大人数のご相談もお気軽に</p>
            <a
              href={SHOP_INFO.contact}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              お問い合わせフォームへ →
            </a>
          </div>
        </div>

        {/* 営業時間 */}
        <div className={`${styles.hours} fade-in-up`}>
          <div className={styles.hoursItem}>
            <span className={styles.hoursDay}>月〜金</span>
            <span className={styles.hoursTime}>{SHOP_INFO.hours.weekday}</span>
          </div>
          <div className={styles.hoursSep}>／</div>
          <div className={styles.hoursItem}>
            <span className={styles.hoursDay}>土・日・祝</span>
            <span className={styles.hoursTime}>{SHOP_INFO.hours.weekend}</span>
          </div>
          <div className={styles.hoursSep}>／</div>
          <div className={styles.hoursItem}>
            <span className={styles.hoursDay}>定休日</span>
            <span className={styles.hoursTime}>{SHOP_INFO.hours.closed}</span>
          </div>
          <p className={styles.hoursNote}>{SHOP_INFO.hours.lo}</p>
        </div>
      </div>
    </section>
  );
}
