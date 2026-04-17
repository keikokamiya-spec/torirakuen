import styles from './ConceptSection.module.css';

export default function ConceptSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>TORIRAKUEN</div>
      <div className={styles.inner}>
        <p className={`${styles.subtitle} fade-in-up`}>— 鳥楽苑について —</p>
        <h2 className={`${styles.title} fade-in-up`}>
          備長炭で、丁寧に。<br />
          大人が集う、上質な焼鳥の夜。
        </h2>
        <div className={`${styles.body} fade-in-up`}>
          <p>
            毎日昼から手差しで仕込み、備長炭で香ばしく焼き上げる本格串焼き。
            素材の旨みを最大限に引き出した焼鳥は、1本180円〜お楽しみいただけます。
          </p>
          <p>
            ぷりぷり食感が自慢の「自家製エビマヨ」をはじめ、チキン南蛮、ごま団子など
            居酒屋の枠を超えた多彩なメニューをご用意。
            女性に嬉しいカクテル・サワー40種類以上のドリンクとともに、
            洗練された大人の空間でゆったりとお楽しみください。
          </p>
        </div>
        <div className={`${styles.features} fade-in-up`}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🔥</span>
            <span className={styles.featureText}>備長炭焼鳥</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🏮</span>
            <span className={styles.featureText}>最大50名様貸切</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🍸</span>
            <span className={styles.featureText}>ドリンク40種以上</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📍</span>
            <span className={styles.featureText}>船橋駅徒歩1分半</span>
          </div>
        </div>
      </div>
    </section>
  );
}
