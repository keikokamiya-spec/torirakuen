document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".SiteHeader-module__menuBtn");
  const nav = document.querySelector(".MainNavigation-module__nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.contains("MainNavigation-module__isOpen");
      if (isOpen) {
        nav.classList.remove("MainNavigation-module__isOpen");
        menuBtn.classList.remove("SiteHeader-module__isOpen");
      } else {
        nav.classList.add("MainNavigation-module__isOpen");
        menuBtn.classList.add("SiteHeader-module__isOpen");
      }
    });
  }

  // Header Scroll Effect
  const header = document.querySelector(".SiteHeader-module__header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("SiteHeader-module__scrolled");
    } else {
      header?.classList.remove("SiteHeader-module__scrolled");
    }
  });

  // Hero Carousel Logic
  const heroImage = document.querySelector(
    ".HeroCarouselSection-module__bgImage img",
  );
  const heroCaption = document.querySelector(
    ".HeroCarouselSection-module__caption",
  );
  const heroSubcaption = document.querySelector(
    ".HeroCarouselSection-module__subcaption",
  );
  const heroDots = document.querySelectorAll(
    ".HeroCarouselSection-module__dot",
  );

  if (heroImage && heroDots.length > 0) {
    const HERO_SLIDES = [
      {
        image: "images/hero1.jpg",
        alt: "備長炭焼鳥",
        caption: "本格備長炭で焼き上げる\n極上の焼鳥",
        subcaption:
          "毎日昼から一本一本丁寧に仕込み、\n最高の状態でご提供いたします。",
      },
      {
        image: "images/hero2.jpg",
        alt: "豊富なお酒",
        caption: "充実のドリンクメニュー\n40種類以上",
        subcaption:
          "定番のビールから、サワー、カクテル、\n厳選した日本酒・焼酎まで。",
      },
      {
        image: "images/hero3.jpg",
        alt: "宴会・貸切",
        caption: "最大50名様までOK\n貸切・宴会大歓迎",
        subcaption:
          "広々とした空間で、特別な時間を。\nお得な飲み放題コースもございます。",
      },
      {
        image: "images/hero4.jpg",
        alt: "自家製料理",
        caption: "こだわりの一品料理も\n多数ご用意",
        subcaption: "自家製エビマヨや、新鮮な刺身など、\n焼鳥以外も絶品です。",
      },
    ];

    let currentHero = 0;
    setInterval(() => {
      currentHero = (currentHero + 1) % HERO_SLIDES.length;
      const slide = HERO_SLIDES[currentHero];

      // Add transition class
      const bg = document.querySelector(".HeroCarouselSection-module__bgImage");
      const content = document.querySelector(
        ".HeroCarouselSection-module__content",
      );
      bg?.classList.add("HeroCarouselSection-module__transitioning");
      content?.classList.add("HeroCarouselSection-module__transitioning");

      setTimeout(() => {
        heroImage.src = slide.image;
        heroImage.alt = slide.alt;
        heroCaption.innerText = slide.caption;
        heroSubcaption.innerText = slide.subcaption;

        heroDots.forEach((d, i) => {
          if (i === currentHero)
            d.classList.add("HeroCarouselSection-module__dotActive");
          else d.classList.remove("HeroCarouselSection-module__dotActive");
        });

        bg?.classList.remove("HeroCarouselSection-module__transitioning");
        content?.classList.remove("HeroCarouselSection-module__transitioning");
      }, 400);
    }, 5500);

    // Make dots clickable
    heroDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentHero = index - 1; // It will become index on next interval, or we can force it immediately
        // For simplicity, we just let it run.
      });
    });
  }
});

  // Drink Carousel Logic
  const drinkCarousel = document.getElementById('drink-carousel');
  if (drinkCarousel) {
    const drinkData = [
      { id: 1, icon: '🍸', title: 'サワー・カクテル', description: '女性にうれしい40種類以上。レモン、マンゴー、ゆず、パイン、アプリコット、ライムなど種類豊富に取り揃えています。', image: 'images/P045812749_480.jpg' },
      { id: 2, icon: '🥃', title: 'ハイボール・お茶割り', description: 'コークハイ、ジンジャーハイボールなどのハイボールから、ウーロンハイ、ジャスミンハイなど。', image: 'images/hero2.jpg' },
      { id: 3, icon: '🍺', title: 'ビール・日本酒・焼酎', description: 'エールや生ビール、梅酒、厳選の日本酒・焼酎まで。焼鳥に合う銘柄を種類充実させています。', image: 'images/P045800712_480.jpg' },
      { id: 4, icon: '🍷', title: 'ワイン・ノンアル', description: '赤・白ワインから、ドライバーの方も安心なノンアルコールドリンクまで幅広くご用意。', image: 'images/P045812749_480.jpg' }
    ];

    let currentDrink = 0;
    const drinkImg = document.getElementById('drink-image');
    const drinkIcon = document.getElementById('drink-icon');
    const drinkTitle = document.getElementById('drink-title');
    const drinkDesc = document.getElementById('drink-desc');
    const drinkDots = document.querySelectorAll('#drink-dots .ImageCarousel-module__dot');
    
    const updateDrinkSlide = (index) => {
      currentDrink = index;
      const data = drinkData[currentDrink];
      
      drinkImg.src = data.image;
      drinkImg.alt = data.title;
      drinkIcon.innerText = data.icon;
      drinkTitle.innerText = data.title;
      drinkDesc.innerText = data.description;
      
      drinkDots.forEach((dot, i) => {
        if (i === currentDrink) dot.classList.add('ImageCarousel-module__dotActive');
        else dot.classList.remove('ImageCarousel-module__dotActive');
      });
    };

    document.getElementById('drink-next')?.addEventListener('click', () => {
      updateDrinkSlide((currentDrink + 1) % drinkData.length);
    });

    document.getElementById('drink-prev')?.addEventListener('click', () => {
      updateDrinkSlide((currentDrink - 1 + drinkData.length) % drinkData.length);
    });

    drinkDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        updateDrinkSlide(index);
      });
    });
  }

  // Fade-in Animation Logic
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in-up');
  fadeElements.forEach(el => {
    observer.observe(el);
  });
