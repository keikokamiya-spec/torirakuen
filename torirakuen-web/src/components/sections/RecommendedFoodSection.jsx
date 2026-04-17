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
          description="毎日昼から手差しで仕込む本格焼鳥。備長炭で丁寧に焼き上げた串焼きをはじめ、一番人気の自家製エビマヨなど多彩なメニューをご用意しています。"
        />
        <div className="fade-in-up">
          <ImageCarousel items={FOOD_ITEMS} showThumbnails />
        </div>
      </div>
    </section>
  );
}
