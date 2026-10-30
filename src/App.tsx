import { useEffect, useRef, useState, type SVGProps } from 'react';
import facadeImage from '../facade-1440.avif';
import { GuidePage, GuidePreview } from './GuidePage';
import { storeBrands } from './catalogData';

type IconProps = SVGProps<SVGSVGElement>;

const ArrowRight = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ArrowUpRight = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M6 18 18 6M8 6h10v10" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const Pin = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path
      d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const Layers = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const Transit = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="5" y="3" width="14" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 12h14M8 18l-2 3M16 18l2 3M8 7h.01M16 7h.01" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const Info = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 11v5M12 8h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const Parking = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M5 3h14v18H5z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 17V7h3.2a3 3 0 0 1 0 6H10" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const Phone = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M7.2 3.8 9.5 3l2.1 4.7-2 1.5a14.5 14.5 0 0 0 5.2 5.2l1.5-2 4.7 2.1-.8 2.3a3 3 0 0 1-3.4 1.9A16.9 16.9 0 0 1 5.3 7.2a3 3 0 0 1 1.9-3.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const Mail = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="1.5" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const Clock = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3.2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const Sofa = (props: IconProps) => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
    <path d="M6 5h20v16H6z" stroke="currentColor" strokeWidth="1.7" />
    <path d="M4 13a2 2 0 0 1 2 2v6h20v-6a2 2 0 1 1 4 0v11H2V15a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" />
    <path d="M5 26v3M27 26v3" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const Home = (props: IconProps) => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
    <path d="m4 14 12-10 12 10M7 14v14h18V14M13 28V17h6v11" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const Sun = (props: IconProps) => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M16 2v5M16 25v5M30 16h-5M7 16H2M25.9 6.1l-3.5 3.5M9.6 22.4l-3.5 3.5M25.9 25.9l-3.5-3.5M9.6 9.6 6.1 6.1" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const Menu = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const Close = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const mapUrl = `https://yandex.ru/maps/?text=${encodeURIComponent('Богатырский проспект, 18к2, литера А')}`;

const sitePath = (path: string) => {
  if (path.startsWith('#')) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
};

const assetPath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const navItems = [
  { label: 'Мебель и интерьер', href: sitePath('/catalog/') },
  { label: 'О центре', href: sitePath('/about/') },
  { label: 'Схема и инфраструктура', href: sitePath('/guide/') },
  { label: 'Аренда помещений', href: sitePath('/about/#rental') },
  { label: 'Контакты и проезд', href: sitePath('/contacts/') },
];

const quickLinks = [
  {
    eyebrow: 'Свободно ориентируйтесь',
    title: 'Четыре этажа комплекса',
    Icon: Layers,
    href: sitePath('/guide/#scheme'),
  },
  {
    eyebrow: 'Общественный транспорт',
    title: 'Метро и наземный транспорт',
    Icon: Transit,
    href: sitePath('/contacts/#transport'),
  },
  {
    eyebrow: 'Приезжайте на автомобиле',
    title: 'Парковка у центра',
    Icon: Parking,
    href: sitePath('/contacts/#parking'),
  },
];

const ideaCards = [
  {
    number: '01',
    title: 'Мебель для дома',
    text: 'Идеи для гостиной, спальни и уютного пространства.',
    href: '/catalog/divani_i_kresla/',
    Icon: Sofa,
    tone: 'sage',
  },
  {
    number: '02',
    title: 'Кухни и интерьер',
    text: 'Решения для обустройства и обновления дома.',
    href: '/catalog/kuhni_i_interer/',
    Icon: Home,
    tone: 'sand',
  },
  {
    number: '03',
    title: 'Свет и детали',
    text: 'Освещение, текстиль и предметы интерьера.',
    Icon: Sun,
    tone: 'mint',
  },
];

const popularDirections = [
  {
    slug: 'divani_i_kresla',
    route: '/catalog/divani_i_kresla/',
    title: 'Диваны и кресла',
    text: 'Мягкая мебель должна подходить размерам комнаты, сценарию использования и повседневным привычкам.',
  },
  {
    slug: 'divany',
    route: '/catalog/divani_i_kresla/divani/',
    title: 'Диваны',
    text: 'Диван для ежедневного отдыха и диван для сна решают разные задачи. Перед выбором измерьте свободное пространство, проходы и место для раскладывания.',
  },
  {
    slug: 'kresla',
    route: '/catalog/divani_i_kresla/kresla/',
    title: 'Кресла',
    text: 'Удобство кресла определяется глубиной и наклоном сиденья, поддержкой спины и соответствием росту человека.',
  },
  {
    slug: 'hranenie',
    route: '/catalog/hranenie_i_porjadok/',
    title: 'Хранение',
    text: 'Продуманное хранение помогает меньше загромождать комнаты. Начинайте не с фасадов, а со списка вещей и доступных размеров.',
  },
  {
    slug: 'komody_i_tumby',
    route: '/catalog/hranenie_i_porjadok/komodi_i_tumbi/',
    title: 'Комоды и тумбы',
    text: 'Комод полезен там, где важна вместительность без массивного шкафа. Начните с того, что именно предстоит хранить и какой доступ нужен каждый день.',
  },
  {
    slug: 'krovati_i_matrasy',
    route: '/catalog/krovati_i_matrasi/',
    title: 'Кровати и матрасы',
    text: 'Даже хороший матрас не будет работать как задумано, если его размер и тип не подходят выбранному основанию.',
  },
  {
    slug: 'krovati',
    route: '/catalog/krovati_i_matrasi/krovati/',
    title: 'Кровати',
    text: 'Выбор кровати начинается с размеров комнаты, расположения дверей и желания свободно проходить вокруг спального места.',
  },
  {
    slug: 'modulnye_kuhni',
    route: '/catalog/kuhni_i_interer/modulnye_kuhni/',
    title: 'Модульные кухни',
    text: 'Модульная кухня собирается из типовых корпусов, но её удобство зависит от точных замеров помещения и размещения техники.',
  },
  {
    slug: 'stoly_i_stoliki',
    route: '/catalog/stoli_i_stoliki/',
    title: 'Столы и столики',
    text: 'Стол выбирают не только по числу мест: важно, чтобы за ним было удобно сидеть и свободно перемещаться.',
  },
  {
    slug: 'stulya',
    route: '/catalog/stulja_i_skami/stulja/',
    title: 'Стулья',
    text: 'За обеденным столом важны не только форма и цвет стула, но и положение ног, поддержка спины и возможность свободно отодвинуть сиденье.',
  },
];

function StoreBrandsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const scrollCards = (direction: -1 | 1) => {
    const cards = cardsRef.current;
    if (!cards) return;
    cards.scrollBy({ left: direction * cards.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="catalog-stores" id="stores" aria-labelledby="catalog-stores-title">
      <div className="catalog-stores__inner page-width">
        <div className="catalog-stores__intro">
          <div>
            <p className="eyebrow">Представлены в комплексе</p>
            <h2 id="catalog-stores-title">Магазины и бренды</h2>
          </div>
          <div className="catalog-stores__side">
            <p>Познакомьтесь с магазинами и брендами, представленными в торговом центре.</p>
            <div className="catalog-stores__controls" aria-label="Прокрутка списка магазинов">
              <button type="button" aria-label="Прокрутить бренды назад" aria-controls="store-brands-list" onClick={() => scrollCards(-1)}>
                <ArrowRight className="catalog-stores__arrow catalog-stores__arrow--previous" />
              </button>
              <button type="button" aria-label="Прокрутить бренды вперёд" aria-controls="store-brands-list" onClick={() => scrollCards(1)}>
                <ArrowRight className="catalog-stores__arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="catalog-stores__grid" id="store-brands-list" ref={cardsRef} role="list" aria-label="Магазины и направления мебели">
          {storeBrands.map(({ id, name, phone, phoneHref, category, image, imageAlt }, index) => (
            <article className={`store-card ${image ? 'store-card--photo' : 'store-card--text'}`} key={id} role="listitem">
              {image && (
                <div className="store-card__image-wrap">
                  <img src={assetPath(image)} alt={imageAlt ?? name} loading="lazy" />
                </div>
              )}
              <div className="store-card__body">
                {!image && <span className="store-card__number">{String(index + 1).padStart(2, '0')}</span>}
                <h3>{name}</h3>
                {phoneHref ? (
                  <a href={`tel:${phoneHref}`} aria-label={`Позвонить в магазин ${name}: ${phone}`}>
                    {phone}
                  </a>
                ) : (
                  <span className="store-card__phone">{phone}</span>
                )}
                <span className="store-card__category">{category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogPage() {
  return (
    <section className="catalog-page page-width" aria-labelledby="catalog-title">
      <div className="catalog-page__body">
        <nav className="contacts-breadcrumb" aria-label="Навигационная цепочка">
          <a href={sitePath('/')}>Главная</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Мебель и интерьер</span>
        </nav>

        <header className="catalog-intro">
          <p className="eyebrow">Советы по выбору</p>
          <h1 id="catalog-title">Мебель и интерьер</h1>
          <p>Как выбрать мебель для дома: практические ориентиры по размерам, материалам и планировке. Подготовьтесь к сравнению решений и визиту в торговый центр «Богатырь».</p>
        </header>

        <section className="catalog-directions" id="popular-directions" aria-labelledby="catalog-directions-title">
          <h2 id="catalog-directions-title">Популярные направления</h2>
          <div className="catalog-directions__grid">
            {popularDirections.map(({ slug, route, title, text }) => {
              return (
                <a
                  className="catalog-direction"
                  href={sitePath(route)}
                  id={`direction-${slug}`}
                  key={title}
                >
                  <span className="eyebrow">Направление</span>
                  <h3>{title}</h3>
                  <span className="catalog-direction__description">{text}</span>
                  <span className="catalog-direction__cta">Советы по выбору <ArrowUpRight /></span>
                </a>
              );
            })}
          </div>
        </section>

        <aside className="catalog-trip" aria-labelledby="catalog-trip-title">
          <div className="catalog-trip__panel">
            <h2 id="catalog-trip-title">Планируете поездку?</h2>
            <p>
              На сайте можно изучить <a href={sitePath('/guide/#scheme')}>схему четырёх этажей</a>,{' '}
              <a href={sitePath('/contacts/#location')}>адрес</a> и{' '}
              <a href={sitePath('/contacts/#transport')}>общественный транспорт</a>. Наличие конкретных товаров и моделей лучше уточнять перед визитом.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function KitchenInteriorPage() {
  return (
    <section className="catalog-page page-width" aria-labelledby="kitchen-interior-title">
      <div className="catalog-page__body">
        <nav className="contacts-breadcrumb" aria-label="Навигационная цепочка">
          <a href={sitePath('/')}>Главная</a>
          <span aria-hidden="true">/</span>
          <a href={sitePath('/catalog/')}>Мебель и интерьер</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Кухни и интерьер</span>
        </nav>

        <header className="catalog-intro">
          <p className="eyebrow">Кухни и интерьер</p>
          <h1 id="kitchen-interior-title">Кухни и интерьер</h1>
          <p>Решения для обустройства и обновления дома.</p>
        </header>

        <section className="catalog-directions" aria-labelledby="kitchen-interior-directions-title">
          <h2 id="kitchen-interior-directions-title">Популярные направления</h2>
          <div className="catalog-directions__grid">
            <a className="catalog-direction" href={sitePath('/catalog/kuhni_i_interer/modulnye_kuhni/')}>
              <span className="eyebrow">Направление</span>
              <h3>Модульные кухни</h3>
              <span className="catalog-direction__description">
                Модульная кухня собирается из типовых корпусов, но её удобство зависит от точных замеров помещения и размещения техники.
              </span>
              <span className="catalog-direction__cta">Советы по выбору <ArrowUpRight /></span>
            </a>
          </div>
        </section>

        <aside className="catalog-trip" aria-labelledby="kitchen-interior-trip-title">
          <div className="catalog-trip__panel">
            <h2 id="kitchen-interior-trip-title">Планируете поездку?</h2>
            <p>
              На сайте можно изучить <a href={sitePath('/guide/#scheme')}>схему четырёх этажей</a>,{' '}
              <a href={sitePath('/contacts/#location')}>адрес</a> и{' '}
              <a href={sitePath('/contacts/#transport')}>общественный транспорт</a>. Наличие конкретных товаров и моделей лучше уточнять перед визитом.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

const furnitureGuides = [
  {
    route: '/catalog/divani_i_kresla',
    title: 'Диваны и кресла',
    description: 'Мягкая мебель должна подходить размерам комнаты, сценарию использования и повседневным привычкам.',
    points: [
      { title: 'Задача мебели', text: 'Нужна зона для гостей, место для чтения или полноценное спальное место? Приоритеты по форме и механизму будут разными.' },
      { title: 'Размеры и планировка', text: 'Нарисуйте схему комнаты и обязательно оставьте доступ к дверям, окнам, шкафам и основным проходам.' },
      { title: 'Материалы и проверка', text: 'Сравните обивку и наполнитель, оцените посадку лично и проверьте основные параметры ухода и гарантии.' },
    ],
    related: ['Диваны ↗', 'Кресла ↗', 'Все направления ↗'],
  },
  {
    route: '/catalog/divani_i_kresla/divani',
    title: 'Диваны',
    description: 'Диван для ежедневного отдыха и диван для сна решают разные задачи. Перед выбором измерьте свободное пространство, проходы и место для раскладывания.',
    points: [
      { title: 'Сначала измерьте пространство', text: 'Запишите ширину стены и расстояние до соседней мебели. Для раскладной модели проверьте глубину в полностью разложенном виде и проход к двери.' },
      { title: 'Сравните посадку и механизм', text: 'Посидите на диване несколько минут: проверьте глубину сиденья, высоту спинки и поддержку поясницы. Если планируете спать ежедневно, оцените ровность спальной поверхности и удобство раскладывания.' },
      { title: 'Проверьте материал и уход', text: 'Попросите сведения о стойкости обивки к истиранию, способах очистки и составе наполнителя. Уточните ограничения по нагрузке и гарантию.' },
    ],
    related: ['Кресла ↗', 'Кровати ↗', 'Все направления ↗'],
  },
  {
    route: '/catalog/divani_i_kresla/kresla',
    title: 'Кресла',
    description: 'Удобство кресла определяется глубиной и наклоном сиденья, поддержкой спины и соответствием росту человека.',
    points: [
      { title: 'Проверьте размер', text: 'Измерьте место для кресла и расстояние до столика, дивана или прохода. У моделей с реклайнером учитывайте пространство при откинутой спинке.' },
      { title: 'Оцените посадку', text: 'Сядьте в привычной позе: стопы должны иметь опору, подлокотники не должны поднимать плечи. Проверьте, удобно ли вставать.' },
      { title: 'Уточните уход', text: 'Для обивки уточните условия очистки и особенности материала. Для поворотных и раскладных моделей проверьте ход механизма.' },
    ],
    related: ['Диваны ↗', 'Столы и столики ↗', 'Все направления ↗'],
  },
  {
    route: '/catalog/hranenie_i_porjadok',
    title: 'Хранение',
    description: 'Продуманное хранение помогает меньше загромождать комнаты. Начинайте не с фасадов, а со списка вещей и доступных размеров.',
    points: [
      { title: 'Разделите вещи по частоте использования', text: 'То, что нужно ежедневно, разместите на удобной высоте. Сезонные предметы можно хранить выше.' },
      { title: 'Сравните способы открытия', text: 'Для тесных проходов проверьте варианты раздвижных дверей и выдвижных ящиков.' },
      { title: 'Проверьте крепление', text: 'Высокие элементы требуют устойчивой установки и крепления согласно инструкции.' },
    ],
    related: ['Комоды и тумбы ↗', 'Все направления ↗'],
  },
  {
    route: '/catalog/hranenie_i_porjadok/komodi_i_tumbi',
    title: 'Комоды и тумбы',
    description: 'Комод полезен там, где важна вместительность без массивного шкафа. Начните с того, что именно предстоит хранить и какой доступ нужен каждый день.',
    points: [
      { title: 'Подберите высоту и глубину', text: 'Для узкого прохода измеряйте не только глубину корпуса, но и пространство перед открытыми ящиками. В спальне учитывайте расстояние до кровати и дверей.' },
      { title: 'Оцените внутреннее устройство', text: 'Сравните полное и частичное выдвижение ящиков, плавность направляющих и возможности установки разделителей. Небольшие предметы удобнее хранить в нескольких неглубоких ящиках.' },
      { title: 'Уточните безопасность крепления', text: 'Высокие комоды следует закреплять согласно инструкции производителя, особенно если дома есть дети. Проверьте устойчивость и допустимую нагрузку на верхнюю поверхность.' },
    ],
    related: ['Кровати ↗', 'Хранение ↗', 'Все направления ↗'],
  },
  {
    route: '/catalog/krovati_i_matrasi',
    title: 'Кровати и матрасы',
    description: 'Даже хороший матрас не будет работать как задумано, если его размер и тип не подходят выбранному основанию.',
    points: [
      { title: 'Определите габариты', text: 'Измерьте спальное место, включая наружные размеры кровати. Учтите дополнительное место для прохода и тумбочек.' },
      { title: 'Сравните конструкции', text: 'Уточните, какой тип основания рекомендует производитель матраса, допустимую нагрузку и возможность проветривания.' },
      { title: 'Проверьте ощущения', text: 'Если есть возможность, полежите на матрасе в привычном положении и обратите внимание на поддержку спины и плеч. Уточните правила ухода.' },
    ],
    related: ['Кровати ↗', 'Комоды и тумбы ↗', 'Все направления ↗'],
  },
  {
    route: '/catalog/krovati_i_matrasi/krovati',
    title: 'Кровати',
    description: 'Выбор кровати начинается с размеров комнаты, расположения дверей и желания свободно проходить вокруг спального места.',
    points: [
      { title: 'Измерьте проходы', text: 'Отметьте на плане наружные размеры каркаса, а не только размер матраса. Если рядом шкаф, проверьте открывание дверей и ящиков.' },
      { title: 'Сравните основание и конструкцию', text: 'Проверьте совместимость каркаса с матрасом, тип основания и допустимую нагрузку. У модели с подъёмным механизмом оцените доступ к нише для хранения.' },
      { title: 'Подберите удобную высоту', text: 'Проверьте высоту посадки вместе с матрасом: вставать с кровати должно быть удобно. Уточните требования к уходу за материалами и условия сборки.' },
    ],
    related: ['Кровати и матрасы ↗', 'Комоды и тумбы ↗', 'Все направления ↗'],
  },
  {
    route: '/catalog/kuhni_i_interer/modulnye_kuhni',
    title: 'Модульные кухни',
    description: 'Модульная кухня собирается из типовых корпусов, но её удобство зависит от точных замеров помещения и размещения техники.',
    points: [
      { title: 'Подготовьте план комнаты', text: 'Измерьте длины стен, высоту, дверные и оконные проёмы. Отметьте расположение воды, вентиляции, электрических розеток и выступающих труб.' },
      { title: 'Продумайте зоны', text: 'Разделите задачи приготовления, мойки, хранения и размещения техники. Проверьте свободное открывание ящиков и дверец.' },
      { title: 'Уточните ограничения модулей', text: 'Сверьте доступные ширины, высоту столешницы и варианты угловых соединений. До заказа проверьте монтаж, подрезки и возможность замены отдельных секций.' },
    ],
    related: ['Комоды и тумбы ↗', 'Столы и столики ↗', 'Все направления ↗'],
  },
  {
    route: '/catalog/stoli_i_stoliki',
    title: 'Столы и столики',
    description: 'Стол выбирают не только по числу мест: важно, чтобы за ним было удобно сидеть и свободно перемещаться.',
    points: [
      { title: 'Рассчитайте площадь', text: 'Примерьте габариты столешницы в помещении. Для раздвижной модели учитывайте размер в раскрытом положении.' },
      { title: 'Проверьте посадку', text: 'Оцените место для ног и удобство стульев, которые планируете использовать вместе со столом.' },
      { title: 'Учитывайте уход', text: 'Сравните поверхности по устойчивости к влаге, нагреву и ежедневной уборке.' },
    ],
    related: ['Стулья ↗', 'Все направления ↗'],
  },
  {
    route: '/catalog/stulja_i_skami/stulja',
    title: 'Стулья',
    description: 'За обеденным столом важны не только форма и цвет стула, но и положение ног, поддержка спины и возможность свободно отодвинуть сиденье.',
    points: [
      { title: 'Соотнесите стол и стул', text: 'Сравните высоту сиденья и столешницы, пространство для коленей и наличие подлокотников. Проверьте, помещаются ли стулья под стол в собранном виде.' },
      { title: 'Оцените комфорт', text: 'Посидите на стуле хотя бы несколько минут. Обратите внимание на наклон и форму спинки, жёсткость сиденья и устойчивость ножек.' },
      { title: 'Подберите практичную отделку', text: 'Для кухни важны возможность очистки поверхности и устойчивость к ежедневному использованию. Для пола может потребоваться защита ножек.' },
    ],
    related: ['Столы и столики ↗', 'Кресла ↗', 'Все направления ↗'],
  },
] as const;

type FurnitureGuide = typeof furnitureGuides[number];

function FurnitureGuidePage({ guide }: { guide: FurnitureGuide }) {
  return (
    <section className="furniture-guide page-width" aria-labelledby="furniture-guide-title">
      <div className="furniture-guide__body">
        <nav className="contacts-breadcrumb" aria-label="Навигационная цепочка">
          <a href={sitePath('/')}>Главная</a>
          <span aria-hidden="true">/</span>
          <a href={sitePath('/catalog/')}>Мебель и интерьер</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{guide.title}</span>
        </nav>

        <header className="catalog-intro furniture-guide__intro">
          <p className="eyebrow">Справочник по интерьеру</p>
          <h1 id="furniture-guide-title">{guide.title}</h1>
          <p>{guide.description}</p>
        </header>

        <section className="furniture-guide__attention" aria-labelledby="furniture-guide-attention-title">
          <h2 id="furniture-guide-attention-title">На что обратить внимание</h2>
          <div className="furniture-guide__points">
            {guide.points.map(({ title, text }, index) => (
              <article className="furniture-guide__point" key={title}>
                <span className="furniture-guide__number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="furniture-guide__related" aria-labelledby="furniture-guide-related-title">
          <h2 id="furniture-guide-related-title">Смотрите также</h2>
          <div>
            {guide.related.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <aside className="catalog-trip furniture-guide__visit" aria-labelledby="furniture-guide-visit-title">
          <div className="catalog-trip__panel">
            <h2 id="furniture-guide-visit-title">Посмотреть варианты лично</h2>
            <p>
              Перед визитом в ТЦ «Богатырь» подготовьте размеры комнаты и фотографии интерьера.{' '}
              <a href={sitePath('/guide/#scheme')}>Схема центра</a> поможет сориентироваться, а{' '}
              <a href={sitePath('/contacts/')}>контакты и проезд</a> — спланировать дорогу. Ассортимент у продавцов может изменяться.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Brand() {
  return (
    <a className="brand" href={sitePath('/#top')} aria-label="Богатырь — на главную">
      <img className="brand__mark" src={assetPath('/images/bogatyr-mark.png')} alt="" />
      <span className="brand__type">
        <span className="brand__name">Богатырь</span>
        <span className="brand__caption">Торговый центр</span>
      </span>
    </a>
  );
}

function ContactsOverview() {
  return (
    <section className="contacts-page page-width" aria-labelledby="contacts-title">
      <div className="contacts-breadcrumb">
        <a href={sitePath('/')}>Главная</a>
        <span aria-hidden="true">/</span>
      </div>

      <div className="contacts-intro">
        <div>
          <p className="eyebrow contacts-intro__eyebrow">Контакты и как добраться</p>
          <h1 id="contacts-title">До встречи<br />в «Богатыре».</h1>
        </div>
        <div className="contacts-intro__summary">
          <p>Богатырский проспект, 18к2, литера А. Выберите удобный способ добраться и спланируйте свой визит.</p>
          <a href={mapUrl} target="_blank" rel="noreferrer">
            Открыть Яндекс Карты <ArrowUpRight />
          </a>
        </div>
      </div>

      <div className="contact-card-grid">
        <article className="contact-card" id="hours">
          <Clock />
          <p className="eyebrow">Время работы ТЦ</p>
          <h2>Ежедневно, 11:00–21:00</h2>
          <p className="contact-card__note">Часы отдельных организаций могут отличаться.</p>
        </article>

        <article className="contact-card">
          <Phone />
          <p className="eyebrow">Администрация</p>
          <a className="contact-card__phone" href="tel:+79313133501">+7 (931) 313-35-01</a>
          <a className="contact-card__phone" href="tel:+78124188671">+7 (812) 418-86-71</a>
          <a className="contact-card__email" href="mailto:bogatyr18k2@gmail.com">bogatyr18k2@gmail.com</a>
        </article>

        <article className="contact-card">
          <Home />
          <p className="eyebrow">Отдел аренды</p>
          <a className="contact-card__phone" href="tel:+78125963476">+7 (812) 596-34-76</a>
          <a className="contact-card__phone" href="tel:+78122955200">+7 (812) 295-52-00</a>
          <a className="contact-card__phone" href="tel:+79313131878">+7 (931) 313-18-78</a>
          <p className="contact-card__note">По будням, 10:00–18:00</p>
          <a className="contact-card__rental" href={sitePath('/about/#rental')}>Об аренде помещений <ArrowRight /></a>
        </article>
      </div>

      <nav className="travel-options" aria-label="Способы добраться">
        <a href={sitePath('/contacts/#location')}>
          <Pin />
          <span>Адрес и маршрут</span>
          <ArrowRight />
        </a>
        <a href={sitePath('/contacts/#transport')}>
          <Transit />
          <span>Общественный транспорт</span>
          <ArrowRight />
        </a>
        <a href={sitePath('/contacts/#parking')}>
          <Parking />
          <span>На автомобиле</span>
          <ArrowRight />
        </a>
      </nav>
    </section>
  );
}

function VisitSection({ sectionId }: { sectionId: string }) {
  return (
    <section className="visit-section" id={sectionId} aria-labelledby="visit-title">
      <div className="visit-section__inner page-width">
        <div className="visit-copy">
          <p className="eyebrow visit-copy__eyebrow">Спланируйте визит</p>
          <h2 id="visit-title">Мы рядом.<br />Заглядывайте.</h2>
          <a className="visit-copy__address" href={mapUrl} target="_blank" rel="noreferrer">
            Санкт-Петербург, Богатырский<br className="visit-copy__address-break" /> проспект, 18, корпус 2, литера А
          </a>
          <p className="visit-copy__hours"><Clock />Ежедневно, 11:00–21:00</p>
          <a className="button button--dark visit-copy__route" href={mapUrl} target="_blank" rel="noreferrer">
            Построить маршрут до ТЦ <ArrowUpRight />
          </a>
        </div>

        <div className="visit-map">
          <svg className="visit-map__illustration" viewBox="0 0 1700 1000" role="img" aria-labelledby="visit-map-title">
            <title id="visit-map-title">Схематичная карта проезда к торговому центру Богатырь</title>
            <defs>
              <pattern id="visit-map-grid" width="240" height="156" patternUnits="userSpaceOnUse">
                <path d="M 240 0 H 0 V 156" fill="none" stroke="#daddd6" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="1700" height="1000" fill="#e9eae4" />
            <rect width="1700" height="1000" fill="url(#visit-map-grid)" />

            <path d="M -70 810 L 1770 340 L 1770 490 L -70 960 Z" fill="#fbfbf8" />
            <path d="M -70 885 L 1770 415" fill="none" stroke="#d9dbd4" strokeWidth="3" strokeDasharray="18 17" />

            <path d="M 1145 -70 L 1255 -70 L 1395 1070 L 1285 1070 Z" fill="#fbfbf8" />
            <path d="M 1200 -70 L 1340 1070" fill="none" stroke="#d9dbd4" strokeWidth="3" strokeDasharray="18 17" />

            <rect x="800" y="180" width="350" height="225" rx="4" fill="#e7c4aa" transform="rotate(-14 975 292)" />
            <text x="120" y="710" fill="#65716a" fontFamily="Arial, Helvetica, sans-serif" fontSize="38" transform="rotate(-14 120 710)">Богатырский проспект</text>
            <text x="1320" y="240" fill="#65716a" fontFamily="Arial, Helvetica, sans-serif" fontSize="36" transform="rotate(83 1320 240)">Торфяная дорога</text>

            <path d="M 960 340 C 918 340 885 373 885 415 C 885 463 930 505 960 540 C 990 505 1035 463 1035 415 C 1035 373 1002 340 960 340 Z" fill="#b34a31" />
            <circle cx="960" cy="405" r="22" fill="#fff" />

            <rect x="748" y="578" width="424" height="92" rx="46" fill="#fff" />
            <text x="960" y="625" fill="#303735" fontFamily="Arial, Helvetica, sans-serif" fontSize="40" fontWeight="700" textAnchor="middle" dominantBaseline="middle">ТЦ «БОГАТЫРЬ»</text>
          </svg>
          <a className="visit-map__open" href={mapUrl} target="_blank" rel="noreferrer" aria-label="Открыть маршрут на карте">
            <ArrowUpRight />
          </a>
          <span className="visit-map__credit">Условная схема · точный маршрут в Яндекс Картах</span>
        </div>
      </div>
    </section>
  );
}

function OrientationSection() {
  return (
    <section className="orientation-section">
      <div className="orientation-section__inner page-width">
        <div>
          <p className="eyebrow">Ориентируйтесь в комплексе</p>
          <h2>Начните со схемы.</h2>
          <p>Выберите этаж, найдите вход, лифт или эскалатор. Схемы можно сохранить на телефон перед поездкой.</p>
        </div>
        <a href={sitePath('/guide/#scheme')}>
          Схема и инфраструктура <ArrowRight />
        </a>
      </div>
    </section>
  );
}

function AboutPage() {
  const rentalMail = 'mailto:bogatyr18k2@gmail.com?subject=Аренда%20—%20ТЦ%20«Богатырь»';

  return (
    <>
      <section className="about-page page-width" aria-label="О торговом центре Богатырь">
        <div className="contacts-breadcrumb">
          <a href={sitePath('/')}>Главная</a>
          <span aria-hidden="true">/</span>
        </div>

        <div className="about-hero">
          <p className="eyebrow about-hero__eyebrow">О центре и аренда</p>
          <div className="about-hero__intro">
            <div className="about-hero__main">
              <h1>Место для вашего<br />следующего шага.</h1>
            </div>
            <div className="about-hero__copy">
              <p>Расскажите нам о вашем проекте. Отдел аренды поможет обсудить подходящий формат, требования к помещению и условия размещения в торговом центре.</p>
              <a className="text-link" href="#rental">Связаться с отделом аренды <ArrowRight /></a>
            </div>
          </div>
          <img
            className="about-hero__image"
            src={assetPath('/images/about-facade.avif')}
            alt="Архитектура торгового центра «Богатырь»: остеклённый фасад и оранжевые панели"
          />
        </div>
      </section>

      <section className="about-story" aria-labelledby="about-story-title">
        <div className="about-story__inner page-width">
          <div className="about-story__heading">
            <p className="eyebrow">Торговый центр «Богатырь»</p>
            <h2 id="about-story-title">Знакомое место.<br />Новые возможности.</h2>
          </div>
          <div className="about-story__copy">
            <p>Торговый центр «Богатырь» объединяет знакомые направления для обустройства дома и пространство для торговых и сервисных проектов. Приезжайте за идеями или обсудите возможности для вашего бизнеса.</p>
            <p>«Богатырь» — торговый центр в Приморском районе Санкт-Петербурга, на пересечении Богатырского проспекта и Торфяной дороги. Мебель, кухни, интерьер и товары для дома — знакомые направления комплекса. Посмотрите схему этажей и выберите удобный способ добраться.</p>
          </div>
        </div>
      </section>

      <section className="about-space" aria-labelledby="about-space-title">
        <div className="about-space__inner page-width">
          <div className="about-space__intro">
            <div>
              <p className="eyebrow">Пространство и возможности</p>
              <h2 id="about-space-title">Всё начинается<br />с удобного места.</h2>
            </div>
            <p>Четыре этажа торгового комплекса, наземная парковка и расположение на Богатырском проспекте. Детали размещения и доступную инфраструктуру для вашего проекта уточняйте в отделе аренды.</p>
          </div>

          <div className="about-space__content">
            <div className="about-space__photos">
              <img src={assetPath('/images/about-interior.avif')} alt="Торговое пространство с естественным освещением" loading="lazy" />
              <img src={assetPath('/images/about-stairs.avif')} alt="Эскалаторы внутри торгового центра «Богатырь»" loading="lazy" />
            </div>
            <div className="about-facts">
              <article className="about-fact">
                <span className="about-fact__number">01</span>
                <Layers />
                <h3>Четыре этажа</h3>
                <p>Торговые пространства и организации комплекса.</p>
              </article>
              <article className="about-fact">
                <span className="about-fact__number">02</span>
                <Parking />
                <h3>Наземная парковка</h3>
                <p>Рядом со зданием торгового центра.</p>
              </article>
              <article className="about-fact">
                <span className="about-fact__number">03</span>
                <Transit />
                <h3>Связь с метро</h3>
                <p>До центра можно добраться на общественном транспорте. Подберите маршрут и остановку в Яндекс Картах.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="about-projects page-width" aria-labelledby="about-projects-title">
        <div className="about-projects__intro">
          <div>
            <p className="eyebrow">Открыты к обсуждению</p>
            <h2 id="about-projects-title">У вашего проекта<br />есть перспектива.</h2>
          </div>
          <p>Подходящий формат и возможность размещения определим вместе с отделом аренды.</p>
        </div>

        <div className="about-projects__grid">
          <article className="about-project-card">
            <span>01</span>
            <h3>Торговое пространство</h3>
            <p>Обсудите открытие магазина или салона и требования к экспозиции.</p>
          </article>
          <article className="about-project-card">
            <span>02</span>
            <h3>Услуги и мастерские</h3>
            <p>Расскажите об услугах вашего бизнеса и планируемом формате работы.</p>
          </article>
          <article className="about-project-card">
            <span>03</span>
            <h3>Другие форматы</h3>
            <p>Предложите свой проект — возможность размещения обсудим индивидуально.</p>
          </article>
        </div>
      </section>

      <section className="about-rental" id="rental" aria-labelledby="about-rental-title">
        <div className="about-rental__inner page-width">
          <div className="about-rental__copy">
            <p className="eyebrow">Давайте познакомимся</p>
            <h2 id="about-rental-title">Расскажите<br />о вашем бизнесе.</h2>
            <p>Для первого разговора достаточно идеи проекта, желаемой площади и требований к помещению.</p>
            <a className="button button--light" href={rentalMail}>Написать об аренде <Mail /></a>
          </div>
          <aside className="about-rental__contact">
            <p className="eyebrow">Отдел аренды</p>
            <a href="tel:+78125963476">+7 (812) 596-34-76</a>
            <a href="tel:+78122955200">+7 (812) 295-52-00</a>
            <a href="tel:+79313131878">+7 (931) 313-18-78</a>
            <a className="about-rental__email" href="mailto:bogatyr18k2@gmail.com">bogatyr18k2@gmail.com <ArrowUpRight /></a>
            <p>По будням, 10:00–18:00</p>
            <p className="about-rental__note">По информации действующего сайта.</p>
          </aside>
        </div>
      </section>

      <section className="about-details page-width" aria-labelledby="about-details-title">
        <img src={assetPath('/images/leasing-vacant-space.png')} alt="Свободное торговое помещение с колоннами и светлыми стенами" loading="lazy" />
        <div>
          <p className="eyebrow">Обсудим детали</p>
          <h2 id="about-details-title">Начните<br />с разговора.</h2>
          <p>Доступные помещения, площадь, стоимость и условия аренды уточняйте в отделе аренды. Фотографии показывают интерьер комплекса и не являются предложением конкретного свободного помещения.</p>
          <a className="button button--dark" href="tel:+78125963476">Позвонить в отдел аренды <Phone /></a>
        </div>
      </section>

      <VisitSection sectionId="about-visit" />
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(() => {
    const requestedFloor = Number(new URLSearchParams(window.location.search).get('floor'));
    return Number.isInteger(requestedFloor) && requestedFloor >= 1 && requestedFloor <= 4 ? requestedFloor : 1;
  });
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pathname = window.location.pathname.slice(basePath.length).replace(/\/$/, '') || '/';
  const isContactsPage = pathname === '/contacts';
  const isAboutPage = pathname === '/about';
  const isGuidePage = pathname === '/guide';
  const isCatalogPage = pathname === '/catalog';
  const isKitchenInteriorPage = pathname === '/catalog/kuhni_i_interer';
  const furnitureGuide = furnitureGuides.find(({ route }) => route === pathname);
  const isFurnitureGuidePage = Boolean(furnitureGuide);
  const isHomePage = !isContactsPage && !isAboutPage && !isGuidePage && !isCatalogPage && !isKitchenInteriorPage && !isFurnitureGuidePage;

  useEffect(() => {
    document.title = isCatalogPage
      ? 'Мебель и интерьер — Торговый центр «Богатырь»'
      : isKitchenInteriorPage
        ? 'Кухни и интерьер — Торговый центр «Богатырь»'
      : furnitureGuide
        ? `${furnitureGuide.title} — Торговый центр «Богатырь»`
      : isGuidePage
        ? 'Схема и инфраструктура — Торговый центр «Богатырь»'
      : isAboutPage
        ? 'О центре и аренда помещений — Торговый центр «Богатырь»'
        : isContactsPage
          ? 'Контакты и как добраться — Торговый центр «Богатырь»'
          : 'Богатырь — торговый центр';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const scrollToHash = () => {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      if (targetId) document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
    };

    const frameId = window.requestAnimationFrame(scrollToHash);
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, [furnitureGuide, isAboutPage, isCatalogPage, isContactsPage, isGuidePage, isKitchenInteriorPage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">К содержанию</a>
      <div className="topline">
        <div className="topline__inner page-width">
          <span>Санкт-Петербург · Приморский район</span>
          <span className="test-label">Тестовая версия</span>
          <span className="hours"><span className="hours__dot" />Ежедневно, 11:00–21:00</span>
        </div>
      </div>

      <header className="site-header page-width" id="top">
        <Brand />

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <Close /> : <Menu />}
        </button>

        <nav
          className={`primary-nav${menuOpen ? ' primary-nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Основная навигация"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              aria-current={
                (isCatalogPage && item.label === 'Мебель и интерьер') ||
                (isKitchenInteriorPage && item.label === 'Мебель и интерьер') ||
                (isFurnitureGuidePage && item.label === 'Мебель и интерьер') ||
                (isContactsPage && item.label === 'Контакты и проезд') ||
                (isAboutPage && item.label === 'О центре') ||
                (isGuidePage && item.label === 'Схема и инфраструктура')
                  ? 'page'
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-route" href={sitePath('/contacts/')}>
          Как добраться <ArrowUpRight />
        </a>
      </header>

      <main id="main">
        {isHomePage && (
          <>
        <section
          className="hero page-width"
          aria-labelledby="hero-title"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(14, 22, 21, .82) 0%, rgba(14, 22, 21, .6) 34%, rgba(14, 22, 21, .08) 78%), linear-gradient(0deg, rgba(14, 22, 21, .48) 0%, transparent 36%), url(${facadeImage})` }}
        >
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">Торговый центр в Приморском районе</p>
            <h1 id="hero-title">Богатырь.<br />Рядом с вами.</h1>
            <p className="hero__description">
              Место для дома, новых идей и встреч — на Богатырском проспекте.
            </p>
            <div className="hero__actions">
              <a className="button button--accent" href={sitePath('/guide/')}>
                Схема комплекса <ArrowRight />
              </a>
              <a className="button button--outline" href={sitePath('/contacts/')}>
                Как добраться <Pin />
              </a>
            </div>
            <a className="hero__rent-link" href={sitePath('/about/#rental')}>
              Аренда помещений <ArrowRight />
            </a>
          </div>

          <a className="hero__address" href={mapUrl} target="_blank" rel="noreferrer">
            <Pin /> Богатырский проспект, 18к2, литера А
          </a>
        </section>

        <section className="quick-links page-width" id="directions" aria-label="Информация о комплексе и проезде">
          {quickLinks.map(({ eyebrow, title, Icon, href }) => {
            const external = href.startsWith('https://');
            return (
              <a
                className="quick-link"
                href={href}
                key={title}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icon className="quick-link__icon" />
                <span className="quick-link__copy">
                  <span className="quick-link__eyebrow">{eyebrow}</span>
                  <span className="quick-link__title">{title}</span>
                </span>
                <ArrowRight className="quick-link__arrow" />
              </a>
            );
          })}
        </section>

        <section className="ideas ideas--store-showcase page-width" id="ideas" aria-labelledby="ideas-title">
          <div className="ideas__intro">
            <div>
              <p className="eyebrow ideas__eyebrow">За идеями. За покупками. Рядом.</p>
              <h2 id="ideas-title">Больше идей<br />для вашего дома.</h2>
            </div>
            <p className="ideas__description">
              Посмотрите материалы, сравните решения и найдите вдохновение лично. Знакомые направления «Богатыря» — в одном торговом центре.
            </p>
          </div>

          <div className="idea-grid">
            {ideaCards.map(({ number, title, text, href, Icon, tone }) => {
              const content = (
                <>
                  <span className="idea-card__number">{number}</span>
                  <Icon className="idea-card__icon" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </>
              );

              return href ? (
                <a className={`idea-card idea-card--${tone}`} href={sitePath(href)} key={number}>
                  {content}
                </a>
              ) : (
                <article className={`idea-card idea-card--${tone}`} key={number}>
                  {content}
                </article>
              );
            })}
          </div>

          <nav className="idea-links" aria-label="Полезные ссылки">
            <a href={sitePath('/catalog/')}>Все направления мебели <ArrowUpRight /></a>
            <a href="https://preview.bogatir.online/news/">Советы для интерьера <ArrowUpRight /></a>
            <a href={sitePath('/#stores')}>Покупки в центре <ArrowUpRight /></a>
          </nav>
        </section>

        <StoreBrandsSection />

        <section className="scheme-section" aria-labelledby="scheme-title">
          <GuidePreview selectedFloor={selectedFloor} onSelectFloor={setSelectedFloor} />
        </section>
          </>
        )}

        {isAboutPage && <AboutPage />}
        {isCatalogPage && <CatalogPage />}
        {isKitchenInteriorPage && <KitchenInteriorPage />}
        {furnitureGuide && <FurnitureGuidePage guide={furnitureGuide} />}
        {isGuidePage && <GuidePage selectedFloor={selectedFloor} onSelectFloor={setSelectedFloor} />}

        {isContactsPage && (
          <>
            <ContactsOverview />
            <VisitSection sectionId="location" />
          </>
        )}

        {!isAboutPage && !isGuidePage && !isCatalogPage && !isKitchenInteriorPage && !isFurnitureGuidePage && <section className="transit-section" id="transport" aria-labelledby="transit-title">
          <div className="transit-section__inner page-width">
            <div className="transit-copy">
              <p className="eyebrow transit-copy__eyebrow">Как добраться</p>
              <h2 id="transit-title">На общественном<br />транспорте</h2>
              <p className="transit-copy__description">
                До ТЦ «Богатырь» можно добраться на<br className="transit-copy__break" /> метро и городском наземном транспорте.<br className="transit-copy__break" /> Выберите удобный маршрут от вашего<br className="transit-copy__break" /> адреса.
              </p>
              <a className="transit-copy__link" href={sitePath('/contacts/#transport')}>
                Подробнее о проезде <ArrowRight />
              </a>
            </div>

            <div className="transit-card">
              <div className="transit-card__header">
                <span className="transit-card__icon"><Transit /></span>
                <span className="transit-card__heading">
                  <span>Общественный транспорт</span>
                  <span>Метро и наземные маршруты</span>
                </span>
              </div>

              <div className="route-detail">
                <p className="route-detail__eyebrow"><span />Станция метро</p>
                <h3>Комендантский проспект</h3>
                <p>Ближайшая станция метро. Дальнейший маршрут удобно подобрать на карте.</p>
              </div>

              <div className="route-detail route-detail--ground">
                <p className="route-detail__eyebrow"><span />Наземный транспорт</p>
                <h3>Автобусы и троллейбусы</h3>
                <p>
                  Ориентируйтесь на остановки в районе Богатырского проспекта, 18, корпус 2, литера А. Проверьте подходящий маршрут перед поездкой.
                </p>
              </div>

              <p className="transit-note">
                <Info />
                <span>Номера маршрутов, время движения и остановки могут изменяться. Проверяйте актуальную информацию перед поездкой.</span>
              </p>

              <a className="transit-card__link" href={mapUrl} target="_blank" rel="noreferrer">
                Построить маршрут на общественном транспорте <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>}

        {!isAboutPage && !isGuidePage && !isCatalogPage && !isKitchenInteriorPage && !isFurnitureGuidePage && <section className="parking-section" id="parking" aria-labelledby="parking-title">
          <div className="parking-section__inner page-width">
            <div className="parking-copy">
              <p className="eyebrow parking-copy__eyebrow">Приезжайте на автомобиле</p>
              <h2 id="parking-title">Парковка<br />у комплекса.</h2>
              <p className="parking-copy__description">
                Рядом с торговым центром расположена наземная парковка. Условия въезда, оплаты и время работы уточняйте у администрации и на стойках въезда.
              </p>
              <p className="parking-copy__note">
                Въезд и расположение доступных мест уточняйте на месте по дорожным указателям.
              </p>
              <a className="button button--dark parking-copy__route" href={mapUrl} target="_blank" rel="noreferrer">
                Построить маршрут до ТЦ <ArrowUpRight />
              </a>
            </div>

            <aside className="parking-card" aria-label="Информация о парковке">
              <span className="parking-card__mark">P</span>
              <h3>Богатырский проспект,<br />18, корпус 2, литера А</h3>
              <p className="parking-card__detail">
                <Pin />
                <span>Ориентируйтесь на указатели въезда к торговому центру.</span>
              </p>
              <p className="parking-card__detail">
                <Info />
                <span>Режим, оплата и расположение доступных мест — по действующим указателям парковки или у администрации.</span>
              </p>
              <a className="parking-card__contact" href="tel:+79313133501">
                Позвонить в администрацию <Phone />
              </a>
            </aside>
          </div>
        </section>}

        {isHomePage && (
          <section className="rental-section page-width" id="rental" aria-labelledby="rental-title">
          <img
            className="rental-section__image"
            src={assetPath('/images/leasing-interior.png')}
            alt="Светлая галерея торгового центра"
            loading="lazy"
          />
          <div className="rental-copy">
            <p className="eyebrow rental-copy__eyebrow">Для вашего бизнеса</p>
            <h2 id="rental-title">Новая точка<br />притяжения.</h2>
            <p className="rental-copy__description">
              Расскажите нам о вашем проекте. Отдел аренды поможет обсудить подходящий формат, требования к помещению и условия размещения в торговом центре.
            </p>
            <a className="button button--dark rental-copy__button" href={sitePath('/about/#rental')}>
              Узнать об аренде <ArrowRight />
            </a>
            <p className="rental-copy__tags">Магазины · Услуги · Ваши идеи</p>
          </div>
          </section>
        )}

        {isContactsPage ? <OrientationSection /> : isHomePage && <VisitSection sectionId="visit" />}
      </main>

      <footer className="site-footer" id="footer">
        <div className="site-footer__inner page-width">
          <div className="footer-masthead">
            <a className="footer-brand" href={sitePath('/#top')}>
              <span>Богатырь</span>
              <small>Торговый центр рядом с вами</small>
            </a>
            <a className="footer-top-link" href="#top" aria-label="Наверх">
              <ArrowUpRight />
            </a>
          </div>

          <div className="footer-columns">
            <section className="footer-column">
              <h2>Ждём вас</h2>
              <a href={mapUrl} target="_blank" rel="noreferrer">Санкт-Петербург, Богатырский проспект, 18,<br />корпус 2, литера А</a>
              <p>Ежедневно, 11:00–21:00</p>
            </section>

            <section className="footer-column">
              <h2>Администрация</h2>
              <a href="tel:+79313133501">+7 (931) 313-35-01</a>
              <a href="tel:+78124188671">+7 (812) 418-86-71</a>
              <a href="mailto:bogatyr18k2@gmail.com">bogatyr18k2@gmail.com</a>
            </section>

            <nav className="footer-column" aria-label="Навигация в подвале">
              <h2>Навигация</h2>
              <a href={sitePath('/guide/')}>Схема и инфраструктура</a>
              <a href={sitePath('/about/#rental')}>Аренда помещений</a>
              <a href={sitePath('/contacts/#transport')}>Общественный транспорт</a>
              <a href={sitePath('/contacts/#parking')}>Парковка</a>
            </nav>

            <section className="footer-column">
              <h2>На связи</h2>
              <a href="https://vk.com/bogatir.online" target="_blank" rel="noreferrer">ВКонтакте <ArrowUpRight /></a>
              <a href="mailto:bogatyr18k2@gmail.com?subject=Сообщение%20об%20ошибке">Сообщить об ошибке</a>
            </section>
          </div>

          <div className="footer-legal">
            <a href="#footer">Правовая информация и конфиденциальность</a>
          </div>

          <div className="footer-bottom">
            <span>© 2026 ТЦ «Богатырь»</span>
            <span>Санкт-Петербург</span>
            <a href="#top">Наверх ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
