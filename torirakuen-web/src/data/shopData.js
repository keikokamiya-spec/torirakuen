/* ============================================
   TORIRAKUEN - 店舗データ（コンテンツ一元管理）
============================================ */

export const SHOP_INFO = {
  name: '鳥楽苑',
  nameReading: 'とりらくえん',
  tagline: '備長炭の香り、ゆったりと流れる時間。',
  subTagline: '本格炭火焼鳥と、上質なひとときを。',
  address: '千葉県船橋市本町5丁目5-5-101 船橋TRAMSビル',
  access: 'JR船橋駅北口から徒歩1分30秒\nシャポーを抜けて左側の路地を進んで1番奥',
  accessShort: 'JR船橋駅北口 徒歩1分30秒',
  phone: {
    reservation: '050-5595-0489',
    main: '047-409-5229',
  },
  hours: {
    weekday: '16:00 〜 24:00',
    weekend: '14:00 〜 24:00',
    weekdayLabel: '月〜金',
    weekendLabel: '土・日・祝',
    lo: '料理 L.O. 23:00 ／ ドリンク L.O. 23:30',
    closed: '年中無休',
  },
  charge: 'お通し代 380円',
  payment: [
    'VISA', 'Mastercard', 'JCB', 'AMEX', 'Diners',
    'Suica（交通系）', 'iD', 'QUICPay', 'Apple Pay',
  ],
  paymentNote: '※ QRコード決済はご利用いただけません',
  seats: {
    total: '44〜45席',
    table: 'テーブル席 40席',
    counter: 'カウンター席 4席',
    sofa: 'ソファ席あり',
  },
  banquet: {
    range: '20〜50名様',
    detail: 'レイアウト変更可能',
  },
  facilities: [
    '100インチプロジェクター',
    '無料Wi-Fi',
    '車椅子入店可',
    '全席禁煙（テラス席のみ喫煙可）',
  ],
  sns: {
    instagram: 'https://www.instagram.com/torirakuen/',
    tabelog: 'https://tabelog.com/chiba/A1202/A120201/12061176/',
    hotpepper: 'https://www.hotpepper.jp/strJ003917142/',
  },
  contact: 'https://docs.google.com/spreadsheets/d/1e8MBsf3VcS7BnTLQ5UQibVNCxSwufHi2x2kCtDtvbrY/edit?gid=350465576#gid=350465576',
};

/* ---- ヒーロースライド ---- */
const base = import.meta.env.BASE_URL;

export const HERO_SLIDES = [
  {
    id: 1,
    image: `${base}images/hero1.jpg`,
    alt: '鳥楽苑 炭火焼鳥居酒屋',
    caption: '備長炭の香り、ゆったりと流れる時間。',
    subcaption: '船橋駅北口 徒歩1分30秒',
  },
  {
    id: 2,
    image: `${base}images/hero2.jpg`,
    alt: '鳥楽苑 店内 - 落ち着いた大人の空間',
    caption: '本格炭火焼鳥と、上質なひとときを。',
    subcaption: 'ソファ席・テーブル席・カウンター席',
  },
  {
    id: 3,
    image: `${base}images/hero3.jpg`,
    alt: '鳥楽苑 広々とした店内全景',
    caption: '洗練された大人の空間で、特別なひとときを。',
    subcaption: '最大50名様の貸切にも対応',
  },
  {
    id: 4,
    image: `${base}images/hero4.jpg`,
    alt: '鳥楽苑 ゆったりとしたソファ席・テーブル席',
    caption: '最大50名様の貸切にも対応。',
    subcaption: '100インチプロジェクター完備',
  },
];

/* ---- おすすめ料理 ---- */
export const FOOD_ITEMS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    alt: '自家製エビマヨ',
    title: '自家製エビマヨ',
    price: null,
    description: 'ぷりぷりとした食感が自慢の一番人気メニュー。独自の特製マヨネーズソースが絡む、鳥楽苑を代表する逸品です。',
    badge: '一番人気',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    alt: '備長炭焼鳥 盛り合わせ',
    title: '備長炭焼鳥',
    price: '1本 180円〜',
    description: '毎日昼から手差しで仕込み、備長炭で香ばしく焼き上げる本格串焼き。素材の旨みを最大限に引き出します。',
    badge: '看板メニュー',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
    alt: 'チキン南蛮',
    title: 'チキン南蛮',
    price: null,
    description: '外はサクッと、中はジューシー。特製タルタルソースと甘酢の絶妙なバランスが食欲をそそる人気の一品。',
    badge: null,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
    alt: 'ごま団子',
    title: 'ごま団子',
    price: null,
    description: '香ばしいごまをまとった、もちもち食感のごま団子。食事の締めやちょっとしたデザートにも人気です。',
    badge: null,
  },
];

/* ---- 雰囲気・席種 ---- */
export const MOOD_ITEMS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    alt: '鳥楽苑 店内 - 広々としたテーブル席',
    title: 'テーブル席',
    description: '40席のテーブル席。グループでの食事に最適な、ゆとりある配置で洗練された空間をお楽しみいただけます。',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571197119738-be3b4f18f2d6?w=800&q=80',
    alt: '鳥楽苑 ソファ席',
    title: 'ソファ席',
    description: '心地よいソファ席で、ゆっくりとした時間をお過ごしください。特別な夜にも最適な上質な空間です。',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80',
    alt: '鳥楽苑 カウンター席',
    title: 'カウンター席',
    description: '4席のカウンター席。お一人でも気軽にお立ち寄りいただけます。炭火を間近に感じながらの食事は格別です。',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80',
    alt: '鳥楽苑 宴会・貸切スペース',
    title: '貸切・宴会',
    description: '最大50名様まで対応。レイアウト変更可能で、会社の宴会・歓送迎会・各種パーティーに幅広くご利用いただけます。',
  },
];

/* ---- コース ---- */
export const COURSES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
    title: '【満腹コース】\n備長炭焼鳥食べ放題',
    dishCount: '全8品',
    includes: '2時間飲み放題付き',
    guestRange: '2名様〜',
    price: '¥4,980',
    priceNote: '税込',
    couponText: null,
    description: '備長炭で焼き上げる串焼き食べ放題。おすすめ料理8品と2時間の飲み放題で大満足のコース。',
    badge: '人気No.1',
    href: 'https://tabelog.com/chiba/A1202/A120201/12061176/',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=800&q=80',
    title: '【鳥楽苑コース】\n備長炭焼鳥食べ放題',
    dishCount: '全9品',
    includes: '3時間飲み放題付き',
    guestRange: '2名様〜',
    price: '¥6,980',
    priceNote: '税込',
    couponText: null,
    description: '3時間の飲み放題と9品の充実したコース。特別な夜やゆっくりと楽しみたい方におすすめのプレミアムコース。',
    badge: 'プレミアム',
    href: 'https://tabelog.com/chiba/A1202/A120201/12061176/',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    title: '【スタンダードコース】\n食べ飲み放題',
    dishCount: null,
    includes: '飲み放題付き',
    guestRange: '2名様〜',
    price: '¥3,980',
    priceNote: '税込〜',
    couponText: null,
    description: 'お手軽に楽しめるスタンダードコース。各種グルメサイトのクーポン適用でさらにお得にご利用いただけます。',
    badge: 'お手軽',
    href: 'https://www.hotpepper.jp/strJ003917142/',
  },
];

/* ---- ドリンク ---- */
export const DRINK_CATEGORIES = [
  {
    id: 1,
    icon: '🍸',
    title: 'サワー・カクテル',
    description: '女性に嬉しい豊富なラインナップ。フルーティーなカクテルからスッキリとしたサワーまで40種類以上。',
  },
  {
    id: 2,
    icon: '🍶',
    title: '日本酒・焼酎',
    description: '焼鳥に合う厳選の日本酒・焼酎を豊富に取り揃え。芋・麦・米など産地・種類豊富に展開。',
  },
  {
    id: 3,
    icon: '🍷',
    title: 'ワイン・ビール',
    description: '料理に合わせて選べる赤・白ワインをはじめ、生ビールや各種ボトルビールもご用意。',
  },
  {
    id: 4,
    icon: '🍹',
    title: 'ノンアルコール',
    description: 'ドライバーの方や妊娠中の方も安心してお楽しみいただけるノンアルコールドリンクも充実。',
  },
];
