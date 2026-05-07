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
    image: `${base}images/P046162569_480.jpg`,
    alt: '自家製エビマヨ',
    title: '自家製エビマヨ',
    price: '1,280円',
    description: '下処理にこだわったプリプリ食感。独自の特製マヨネーズソースが絡む、鳥楽苑を代表する看板メニューです。',
    badge: '看板メニュー',
  },
  {
    id: 2,
    image: `${base}images/P045800866_480.jpg`,
    alt: '備長炭 炭火焼鳥',
    title: '備長炭 炭火焼鳥',
    price: '1本 180円〜',
    description: '毎日店舗で1本1本手差しし、備長炭で焼き上げる自慢の焼鳥。地鶏串や野菜串、人気のつくねや牛タンなど種類も豊富です。',
    badge: '看板メニュー',
  },
  {
    id: 3,
    image: `${base}images/P046162566_480.jpg`,
    alt: 'チキン南蛮',
    title: 'チキン南蛮',
    price: null,
    description: '外はサクッと、中はジューシー。特製タルタルソースと甘酢の絶妙なバランスが食欲をそそる人気の一品。',
    badge: null,
  },
  {
    id: 4,
    image: `${base}images/P045800874_480.jpg`,
    alt: '手作り餃子',
    title: '手作り餃子',
    price: null,
    description: '皮から手作りでモチモチの食感。一口食べれば肉汁が広がる、こだわりの一品料理です。',
    badge: 'こだわり',
  },
  {
    id: 5,
    image: `${base}images/P045800854_480.jpg`,
    alt: 'からあげ定食',
    title: 'からあげ定食',
    price: null,
    description: 'ランチ限定の定番メニュー。ボリューム満点でジューシーな唐揚げを定食でお楽しみください。',
    badge: 'ランチ限定',
  },
  {
    id: 6,
    image: `${base}images/P045800875_480.jpg`,
    alt: '自家製デザート',
    title: '自家製デザート',
    price: null,
    description: 'ごま団子や杏仁豆腐、ケーキなど、お食事の最後に嬉しいデザートもご用意しています。',
    badge: 'デザート',
  },
];

/* ---- 雰囲気・席種 ---- */
export const MOOD_ITEMS = [
  {
    id: 1,
    image: `${base}images/P047882147_480.jpg`,
    alt: '鳥楽苑 店内 - 広々としたテーブル席',
    title: 'テーブル席',
    description: '40席のテーブル席。グループでの食事に最適な、ゆとりある配置で洗練された空間をお楽しみいただけます。',
  },
  {
    id: 2,
    image: `${base}images/P048998033_238.jpg`,
    alt: '鳥楽苑 ソファ席',
    title: 'ソファ席',
    description: '心地よいソファ席で、ゆっくりとした時間をお過ごしください。特別な夜にも最適な上質な空間です。',
  },
  {
    id: 3,
    image: `${base}images/内観.jpg`,
    alt: '鳥楽苑 カウンター席',
    title: 'カウンター席',
    description: '4席のカウンター席。お一人でも気軽にお立ち寄りいただけます。炭火を間近に感じながらの食事は格別です。',
  },
  {
    id: 4,
    image: `${base}images/内観2.jpg`,
    alt: '鳥楽苑 宴会・貸切スペース',
    title: '貸切・宴会',
    description: '最大50名様まで対応。レイアウト変更可能で、会社の宴会・歓送迎会・各種パーティーに幅広くご利用いただけます。',
  },
];

/* ---- コース ---- */
export const COURSES = [
  {
    id: 1,
    image: `${base}images/P045800856_480.jpg`,
    title: '【2時間飲み放題+焼鳥食べ放題】\n炭火焼き鳥コース',
    dishCount: null,
    includes: '2時間飲み放題付き',
    guestRange: '2名様〜',
    price: '¥3,980',
    priceNote: '税込',
    couponText: null,
    description: 'お得にご利用いただけるベースのコース。備長炭で焼き上げる焼鳥食べ放題をお手軽に楽しめます。',
    badge: 'お手軽',
    href: 'https://tabelog.com/chiba/A1202/A120201/12061176/',
  },
  {
    id: 2,
    image: `${base}images/P047882468_480.jpg`,
    title: '【2時間プレミアム飲み放題生ビール付き+焼鳥食べ放題】\n満腹コース',
    dishCount: '全8品',
    includes: '2時間プレミアム飲み放題付き',
    guestRange: '2名様〜',
    price: '¥4,980',
    priceNote: '税込',
    couponText: null,
    description: '生ビールも楽しめるプレミアム飲み放題。全8品のお料理と焼鳥食べ放題で大満足の内容です。',
    badge: '人気No.1',
    href: 'https://tabelog.com/chiba/A1202/A120201/12061176/',
  },
  {
    id: 3,
    image: `${base}images/P046171309_480.jpg`,
    title: '【2時間プレミアム飲み放題生ビール付き+焼鳥食べ放題】\n贅沢コース',
    dishCount: '全9品',
    includes: '2時間プレミアム飲み放題付き',
    guestRange: '2名様〜',
    price: '¥5,980',
    priceNote: '税込',
    couponText: null,
    description: '全9品の豪華なお料理と、生ビール付きプレミアム飲み放題がセットになった贅沢なプラン。',
    badge: '贅沢',
    href: 'https://tabelog.com/chiba/A1202/A120201/12061176/',
  },
  {
    id: 4,
    image: `${base}images/P045812749_480.jpg`,
    title: '【3時間プレミアム飲み放題生ビール付き+焼鳥食べ放題】\n鳥楽苑コース',
    dishCount: '全9品',
    includes: '3時間プレミアム飲み放題付き',
    guestRange: '2名様〜',
    price: '¥6,980',
    priceNote: '税込',
    couponText: null,
    description: 'ゆったり3時間のプレミアム飲み放題。特別な夜や接待、ゆっくりと語り合いたい時におすすめです。',
    badge: 'プレミアム',
    href: 'https://tabelog.com/chiba/A1202/A120201/12061176/',
  },
];

/* ---- ドリンク ---- */
export const DRINK_CATEGORIES = [
  {
    id: 1,
    icon: '🍸',
    title: 'サワー・カクテル',
    description: '女性にうれしい40種類以上。レモン、マンゴー、ゆず、パイン、アプリコット、ライムなど種類豊富に取り揃えています。',
  },
  {
    id: 2,
    icon: '🥃',
    title: 'ハイボール・お茶割り',
    description: 'コークハイ、ジンジャーハイボールなどのハイボールから、ウーロンハイ、ジャスミンハイなど。',
  },
  {
    id: 3,
    icon: '🍺',
    title: 'ビール・日本酒・焼酎',
    description: 'エールや生ビール、梅酒、厳選の日本酒・焼酎まで。焼鳥に合う銘柄を種類充実させています。',
  },
  {
    id: 4,
    icon: '🍷',
    title: 'ワイン・ノンアル',
    description: '赤・白ワインから、ドライバーの方も安心なノンアルコールドリンクまで幅広くご用意。',
  },
];
