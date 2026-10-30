import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent } from 'react';

const floors = [1, 2, 3, 4] as const;
const minimumScale = 1;
const maximumScale = 4;

const assetPath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const sitePath = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function EntranceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 20V4.5h14V20M2 20h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="12" r="0.6" fill="currentColor" />
    </svg>
  );
}

function StairsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 22h7v-7h7V8h5V3h2M2 3l12 12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function EscalatorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="7" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7v6.5M3 17h5.5L18.5 4h3v4L10 20.5H3z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="1.5" width="19" height="21" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 11V4m-3 3 3-3 3 3m-3 6v7m-3-3 3 3 3-3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function RestroomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 7h2v8h-2zm-1 1-2 4m6-4 2 4m-5 3v6m2-6v6M16 7h3l2 8h-7zm1.5 8v6m-2-6v6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

type FloorProps = {
  selectedFloor: number;
  onSelectFloor: (floor: number) => void;
};

function FloorPicker({ selectedFloor, onSelectFloor }: FloorProps) {
  return (
    <div className="guide-floor-picker" role="group" aria-label="Выберите этаж">
      {floors.map((floor) => (
        <button
          key={floor}
          className={`guide-floor-picker__button${selectedFloor === floor ? ' is-active' : ''}`}
          type="button"
          aria-pressed={selectedFloor === floor}
          onClick={() => onSelectFloor(floor)}
        >
          <span>{floor}</span><small>этаж</small>
        </button>
      ))}
    </div>
  );
}

type GuideMapViewerProps = {
  floor: number;
  onSelectFloor: (floor: number) => void;
};

type PointerPosition = { x: number; y: number };
type Gesture =
  | { type: 'pan'; pointerId: number; origin: PointerPosition; offset: PointerPosition }
  | { type: 'pinch'; startDistance: number; startScale: number };

function distanceBetween(a: PointerPosition, b: PointerPosition) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function GuideMapViewer({ floor, onSelectFloor }: GuideMapViewerProps) {
  const viewerRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const pointerPositions = useRef(new Map<number, PointerPosition>());
  const gesture = useRef<Gesture | null>(null);
  const [scale, setScale] = useState(minimumScale);
  const [offset, setOffset] = useState<PointerPosition>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const updateFullscreenState = () => setIsFullscreen(document.fullscreenElement === viewerRef.current);
    document.addEventListener('fullscreenchange', updateFullscreenState);
    return () => document.removeEventListener('fullscreenchange', updateFullscreenState);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const amount = event.deltaY < 0 ? 0.15 : -0.15;
      setScale((current) => Math.min(maximumScale, Math.max(minimumScale, Number((current + amount).toFixed(2)))));
    };

    viewport.addEventListener('wheel', handleWheel, { passive: false });
    return () => viewport.removeEventListener('wheel', handleWheel);
  }, []);

  const resetView = () => {
    setScale(minimumScale);
    setOffset({ x: 0, y: 0 });
  };

  const zoomBy = (amount: number) => {
    setScale((current) => Math.min(maximumScale, Math.max(minimumScale, Number((current + amount).toFixed(2)))));
  };

  const toggleFullscreen = async () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    try {
      if (document.fullscreenElement === viewer) {
        await document.exitFullscreen();
      } else {
        await viewer.requestFullscreen();
      }
    } catch {
      setIsFullscreen(document.fullscreenElement === viewer);
    }
  };

  const startPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointerPositions.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointerPositions.current.size === 1) {
      gesture.current = {
        type: 'pan',
        pointerId: event.pointerId,
        origin: { x: event.clientX, y: event.clientY },
        offset,
      };
    } else if (pointerPositions.current.size === 2) {
      const [first, second] = [...pointerPositions.current.values()];
      gesture.current = { type: 'pinch', startDistance: distanceBetween(first, second), startScale: scale };
    }
    setIsDragging(true);
  };

  const movePointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerPositions.current.has(event.pointerId)) return;
    pointerPositions.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointerPositions.current.size >= 2 && gesture.current?.type === 'pinch') {
      const [first, second] = [...pointerPositions.current.values()];
      const distance = distanceBetween(first, second);
      if (gesture.current.startDistance > 0) {
        setScale(Math.min(maximumScale, Math.max(minimumScale, gesture.current.startScale * distance / gesture.current.startDistance)));
      }
      return;
    }

    if (gesture.current?.type === 'pan' && gesture.current.pointerId === event.pointerId) {
      setOffset({
        x: gesture.current.offset.x + event.clientX - gesture.current.origin.x,
        y: gesture.current.offset.y + event.clientY - gesture.current.origin.y,
      });
    }
  };

  const finishPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerPositions.current.delete(event.pointerId);
    if (pointerPositions.current.size === 0) {
      gesture.current = null;
      setIsDragging(false);
    } else if (pointerPositions.current.size === 1) {
      const [pointerId, point] = [...pointerPositions.current.entries()][0];
      gesture.current = { type: 'pan', pointerId, origin: point, offset };
    }
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key === '+' || event.key === '=') {
      event.preventDefault();
      zoomBy(0.25);
    } else if (event.key === '-') {
      event.preventDefault();
      zoomBy(-0.25);
    } else if (event.key === '0') {
      event.preventDefault();
      resetView();
    } else if (event.key.startsWith('Arrow')) {
      event.preventDefault();
      const movement = event.shiftKey ? 80 : 35;
      setOffset((current) => ({
        x: current.x + (event.key === 'ArrowLeft' ? movement : event.key === 'ArrowRight' ? -movement : 0),
        y: current.y + (event.key === 'ArrowUp' ? movement : event.key === 'ArrowDown' ? -movement : 0),
      }));
    }
  };

  return (
    <section
      ref={viewerRef}
      className={`guide-viewer${isFullscreen ? ' guide-viewer--fullscreen' : ''}`}
      aria-label={`Интерактивная схема ${floor} этажа`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="guide-viewer__toolbar">
        <FloorPicker selectedFloor={floor} onSelectFloor={onSelectFloor} />
        <button className="guide-viewer__fullscreen" type="button" onClick={toggleFullscreen}>
          <ExpandIcon />{isFullscreen ? 'Выйти из полного экрана' : 'На весь экран'}
        </button>
      </div>

      <div
        ref={viewportRef}
        className={`guide-map-viewport${isDragging ? ' is-dragging' : ''}`}
        onPointerDown={startPointer}
        onPointerMove={movePointer}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}
        role="group"
        aria-label={`Схема ${floor} этажа. Перемещайте указателем. Управляйте масштабом кнопками или клавишами плюс, минус и ноль.`}
      >
        <img
          className="guide-map-image"
          src={assetPath(`/plans/floor-${floor}.png`)}
          alt={`План ${floor} этажа торгового центра «Богатырь» с входами и постоянной инфраструктурой`}
          draggable={false}
          style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})` }}
        />
        <div className="guide-map-zoom" aria-label="Масштаб схемы">
          <button type="button" aria-label="Приблизить схему" disabled={scale >= maximumScale} onPointerDown={(event) => event.stopPropagation()} onClick={() => zoomBy(0.25)}>+</button>
          <output aria-live="polite">{Math.round(scale * 100)}%</output>
          <button type="button" aria-label="Уменьшить схему" disabled={scale <= minimumScale} onPointerDown={(event) => event.stopPropagation()} onClick={() => zoomBy(-0.25)}>−</button>
          <button type="button" aria-label="Показать весь этаж" onPointerDown={(event) => event.stopPropagation()} onClick={resetView}>↺</button>
        </div>
      </div>

      <div className="guide-viewer__footer">
        <span className="guide-viewer__hint">Перетаскивайте схему. Увеличивайте колесом мыши, двумя пальцами или кнопками + и −.</span>
        <a className="guide-viewer__download" href={assetPath(`/plans/floor-${floor}.pdf`)} download={`bogatyr-floor-${floor}.pdf`}>
          <DownloadIcon />Скачать PDF
        </a>
      </div>
    </section>
  );
}

export function GuidePreview({ selectedFloor, onSelectFloor }: FloorProps) {
  const floorHref = `${sitePath('/guide/')}?floor=${selectedFloor}#scheme`;

  return (
    <div className="scheme-section__inner page-width">
      <div className="scheme-copy">
        <p className="eyebrow scheme-copy__eyebrow">Схема и инфраструктура</p>
        <h2 id="scheme-title">У каждого визита<br />свой маршрут.</h2>
        <p className="scheme-copy__description">
          Найдите вход, выберите этаж и посмотрите, где расположены лифты, эскалаторы и санузлы.
        </p>
        <FloorPicker selectedFloor={selectedFloor} onSelectFloor={onSelectFloor} />
        <a className="scheme-copy__link" href={floorHref}>Открыть схему комплекса <ArrowRight /></a>
      </div>

      <div className="scheme-preview">
        <a className="scheme-preview__map" href={floorHref} aria-label={`Исследовать схему ${selectedFloor} этажа`}>
          <img
            src={assetPath(`/plans/floor-${selectedFloor}.png`)}
            alt={`Миниатюрная схема ${selectedFloor} этажа ТЦ «Богатырь»`}
            loading="lazy"
          />
        </a>
        <a className="scheme-preview__explore" href={floorHref}><ExpandIcon />Исследовать комплекс</a>
      </div>
    </div>
  );
}

function GuideLegend() {
  const items = [
    { label: 'Вход', Icon: EntranceIcon },
    { label: 'Лестница', Icon: StairsIcon },
    { label: 'Эскалатор', Icon: EscalatorIcon },
    { label: 'Лифт', Icon: LiftIcon },
    { label: 'Санузел', Icon: RestroomIcon },
  ];

  return (
    <section className="guide-legend" aria-labelledby="guide-legend-title">
      <p className="eyebrow" id="guide-legend-title">На схемах</p>
      <ul>
        {items.map(({ label, Icon }) => <li key={label}><Icon /><span>{label}</span></li>)}
      </ul>
      <p className="guide-legend__note">Входы показаны на первом этаже. Для перехода между этажами ориентируйтесь на лестницы, лифты и эскалаторы.</p>
    </section>
  );
}

function GuideDownloads() {
  return (
    <section className="guide-downloads page-width" aria-labelledby="guide-downloads-title">
      <div className="guide-downloads__intro">
        <p className="eyebrow">Сохраните перед визитом</p>
        <h2 id="guide-downloads-title">Схемы всегда<br />под рукой.</h2>
        <p>Откройте PDF на телефоне или распечатайте его перед поездкой.</p>
      </div>
      <div className="guide-downloads__list">
        {floors.map((floor) => (
          <div className="guide-download-row" key={floor}>
            <span className="guide-download-row__number">{floor}</span>
            <span className="guide-download-row__label">этаж</span>
            <a href={assetPath(`/plans/floor-${floor}.pdf`)} download={`bogatyr-floor-${floor}.pdf`} aria-label={`Скачать PDF — ${floor} этаж`}>
              PDF <DownloadIcon />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function GuidePage({ selectedFloor, onSelectFloor }: FloorProps) {
  return (
    <>
      <section className="guide-page page-width" id="scheme" aria-labelledby="guide-title">
        <div className="contacts-breadcrumb">
          <a href={sitePath('/')}>Главная</a><span aria-hidden="true">/</span>
        </div>
        <div className="guide-page__intro">
          <div>
            <p className="eyebrow">Схема и инфраструктура</p>
            <h1 id="guide-title">Ваш ориентир<br />в «Богатыре».</h1>
          </div>
          <p>Четыре этажа комплекса: помещения, проходы, входы и постоянная инфраструктура. Выберите этаж и приблизьте нужную часть схемы.</p>
        </div>
        <GuideMapViewer key={selectedFloor} floor={selectedFloor} onSelectFloor={onSelectFloor} />
        <GuideLegend />
      </section>

      <GuideDownloads />

      <section className="guide-accessibility" aria-labelledby="guide-accessibility-title">
        <div className="guide-accessibility__inner page-width">
          <div>
            <p className="eyebrow">Доступность и помощь</p>
            <h2 id="guide-accessibility-title">Поможем<br />сориентироваться.</h2>
          </div>
          <div>
            <p>На схемах отмечены лифты и санузлы. Если нужна помощь с доступным входом, перемещением по центру или парковкой, свяжитесь с администрацией перед визитом.</p>
            <a href="tel:+79313133501">Позвонить в администрацию <ArrowRight /></a>
          </div>
        </div>
      </section>
    </>
  );
}
