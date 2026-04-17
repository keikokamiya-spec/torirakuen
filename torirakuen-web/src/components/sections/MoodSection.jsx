import SectionHeader from '../ui/SectionHeader';
import ImageCarousel from '../ui/ImageCarousel';
import { MOOD_ITEMS } from '../../data/shopData';
import styles from './MoodSection.module.css';

export default function MoodSection() {
  return (
    <section id="seats" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          en="ATMOSPHERE"
          ja="お店の雰囲気・お席"
          description="洗練された大人の空間で、特別なひとときをお過ごしください。テーブル席・ソファ席・カウンター席など、シーンに合わせた多彩な席をご用意しています。"
        />
        <div className="fade-in-up">
          <ImageCarousel items={MOOD_ITEMS} showThumbnails autoPlay interval={6000} />
        </div>
      </div>
    </section>
  );
}
