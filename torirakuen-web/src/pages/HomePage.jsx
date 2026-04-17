import HeroCarouselSection from '../components/sections/HeroCarouselSection';
import ConceptSection from '../components/sections/ConceptSection';
import ReservationSection from '../components/sections/ReservationSection';
import RecommendedFoodSection from '../components/sections/RecommendedFoodSection';
import BanquetSection from '../components/sections/BanquetSection';
import MoodSection from '../components/sections/MoodSection';
import CourseSection from '../components/sections/CourseSection';
import DrinkSection from '../components/sections/DrinkSection';
import InfoSection from '../components/sections/InfoSection';
import InstagramSection from '../components/sections/InstagramSection';

export default function HomePage() {
  return (
    <>
      <HeroCarouselSection />
      <ConceptSection />
      <ReservationSection />
      <RecommendedFoodSection />
      <BanquetSection />
      <MoodSection />
      <CourseSection />
      <DrinkSection />
      <InfoSection />
      <InstagramSection />
    </>
  );
}
