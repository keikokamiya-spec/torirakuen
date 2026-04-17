import { FiMapPin, FiClock, FiCreditCard, FiInfo } from 'react-icons/fi';
import SectionHeader from '../ui/SectionHeader';
import { SHOP_INFO } from '../../data/shopData';
import styles from './InfoSection.module.css';

export default function InfoSection() {
  return (
    <section id="access" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          en="ACCESS & INFO"
          ja="アクセス・店舗情報"
        />
        <div className={`${styles.grid} fade-in-up`}>
          {/* マップ */}
          <div className={styles.mapBox}>
            <iframe
              title="鳥楽苑 地図"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9563885686075!2d139.9866199!3d35.7026908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018810008c29551%3A0x19a7cc02c5ffec64!2z6bOl5qW96IuR!5e0!3m2!1sja!2sjp!4v1776407384239!5m2!1sja!2sjp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://maps.app.goo.gl/search?q=千葉県船橋市本町5丁目5-5-101"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Google マップで開く →
            </a>
          </div>

          {/* 情報 */}
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <FiMapPin size={18} className={styles.detailIcon} />
              <div>
                <p className={styles.detailLabel}>住所</p>
                <p className={styles.detailText}>{SHOP_INFO.address}</p>
                <p className={styles.detailSub}>{SHOP_INFO.access}</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <FiClock size={18} className={styles.detailIcon} />
              <div>
                <p className={styles.detailLabel}>営業時間</p>
                <p className={styles.detailText}>
                  月〜金：{SHOP_INFO.hours.weekday}<br />
                  土・日・祝：{SHOP_INFO.hours.weekend}
                </p>
                <p className={styles.detailSub}>{SHOP_INFO.hours.lo}</p>
                <p className={styles.detailSub}>定休日：{SHOP_INFO.hours.closed}</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <FiCreditCard size={18} className={styles.detailIcon} />
              <div>
                <p className={styles.detailLabel}>お支払い方法</p>
                <div className={styles.paymentTags}>
                  {SHOP_INFO.payment.map((p, i) => (
                    <span key={i} className={styles.paymentTag}>{p}</span>
                  ))}
                </div>
                <p className={styles.detailSub}>{SHOP_INFO.paymentNote}</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <FiInfo size={18} className={styles.detailIcon} />
              <div>
                <p className={styles.detailLabel}>その他</p>
                <p className={styles.detailText}>{SHOP_INFO.charge}</p>
                <div className={styles.facilitiesList}>
                  {SHOP_INFO.facilities.map((f, i) => (
                    <span key={i} className={styles.facilityTag}>{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
