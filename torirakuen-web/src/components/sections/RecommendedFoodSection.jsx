import SectionHeader from '../ui/SectionHeader';
import ImageCarousel from '../ui/ImageCarousel';
import { FOOD_ITEMS } from '../../data/shopData';
import styles from './RecommendedFoodSection.module.css';

export default function RecommendedFoodSection() {
  return (
    <section id="food" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader
          en="OUR FOOD"
          ja="おすすめ料理"
          description="毎日店舗で1本1本手差しし、備長炭で焼き上げる自慢の焼鳥。看板メニューの自家製エビマヨをはじめ、本格中華から居酒屋定番メニューまで幅広く取り揃えています。"
        />
        <div className="fade-in-up">
          <ImageCarousel items={FOOD_ITEMS} showThumbnails />
        </div>
      </div>
    </section>
  );
}
