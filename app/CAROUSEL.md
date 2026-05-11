# Carousel Component

A flexible, feature-rich carousel built on [Embla Carousel](https://www.embla-carousel.com/) with React. Supports autoplay, dot navigation, thumbnails, a lightbox, keyboard navigation, fade/slide transitions, and a progress bar — all opt-in via props.

---

## Dependencies

```bash
bun add embla-carousel embla-carousel-react embla-carousel-autoplay
# or
npm install embla-carousel embla-carousel-react embla-carousel-autoplay
```

Peer requirements: React 18+, Tailwind CSS, shadcn/ui `Button` component, `lucide-react`.

---

## Files to copy

| File | Purpose |
|---|---|
| `src/components/ui/carousel.tsx` | The entire component + hooks |

The component imports `@/components/ui/button` from shadcn/ui. If you don't use shadcn, swap that import for your own `<button>` element.

---

## Basic usage

```tsx
import { Carousel } from "@/components/ui/carousel";

<Carousel
  slides={items.map((item) => <MySlide key={item.id} {...item} />)}
/>
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `slides` | `React.ReactNode[]` | `[]` | Slide content — any JSX |
| `options` | `EmblaOptionsType` | — | Passed directly to Embla (e.g. `{ align: "center", loop: true }`) |
| `autoplayDelay` | `number` | `3000` | Autoplay interval in ms. Pass `0` to disable autoplay entirely |
| `slideClassName` | `string` | — | Class on each slide wrapper. Use for responsive widths. Overrides `slideBasis` |
| `slideBasis` | `string` | `"70%"` | CSS flex-basis of each slide when `slideClassName` is not set |
| `transition` | `"slide" \| "fade"` | `"slide"` | Slide or opacity crossfade transition |
| `showDots` | `boolean` | `true` | Dot navigation below the carousel |
| `showArrows` | `boolean` | `false` | Prev/Next arrow buttons |
| `showProgress` | `boolean` | `true` | Autoplay progress bar |
| `showPlay` | `boolean` | `true` | Play/Pause toggle button |
| `showCounter` | `boolean` | `false` | "2 / 5" slide counter |
| `keyboardNavigation` | `boolean` | `false` | Arrow key navigation |
| `thumbnails` | `React.ReactNode[]` | `[]` | Thumbnail strip content (synced to main carousel) |
| `thumbPosition` | `"bottom" \| "left" \| "right"` | `"bottom"` | Where the thumbnail strip appears |
| `captions` | `string[]` | `[]` | Per-slide caption text rendered below the active slide |
| `lightbox` | `boolean` | `false` | Click a slide to open it full-screen |

---

## How it works

### Core — Embla

`useEmblaCarousel` from `embla-carousel-react` provides the scroll engine. Two refs are wired up: one for the main carousel viewport (`emblaRef`) and one for the optional thumbnail strip (`thumbEmblaRef`). Embla handles all pointer/touch drag behavior and scroll snap physics.

```tsx
const [emblaRef, emblaApi] = useEmblaCarousel(
  { ...options },
  autoplayDelay > 0 ? [Autoplay({ playOnInit: true, delay: autoplayDelay })] : [],
);
```

### Autoplay

The `embla-carousel-autoplay` plugin is passed as a plugin when `autoplayDelay > 0`. Three custom hooks wrap the autoplay API:

- **`useAutoplay`** — tracks `isPlaying` state and exposes `toggleAutoplay` and `onAutoplayButtonClick`. The latter resets (or stops) autoplay before executing a manual navigation action, so user interaction doesn't fight the timer.
- **`useAutoplayProgress`** — drives a CSS animation on a `<div>` ref to visualise time-until-next-slide. The animation duration is set dynamically from `autoplay.timeUntilNext()` on each `autoplay:timerset` event.

### Dot navigation

**`useDotButton`** subscribes to Embla's `select` and `reInit` events to track `selectedIndex` and the list of `scrollSnaps`. Clicking a dot calls `emblaApi.scrollTo(index)`.

### Prev/Next buttons

**`usePrevNextButtons`** tracks `canScrollPrev` / `canScrollNext` to disable buttons at the ends of a non-looping carousel.

### Thumbnail strip

A second `useEmblaCarousel` instance (with `dragFree: true`) renders the thumbnail strip. On every `select` event of the main carousel, `thumbEmblaApi.scrollTo` keeps the strip in sync.

### Keyboard navigation

When `keyboardNavigation={true}`, a `window` keydown listener calls `emblaApi.scrollPrev()` / `scrollNext()` on `ArrowLeft` / `ArrowRight`.

### Lightbox

When `lightbox={true}`, clicking a slide opens a full-screen overlay (`fixed inset-0`) with its own prev/next navigation and an Escape-to-close listener. It is an independent component (`Lightbox`) that receives the same `slides` array.

### Fade transition

When `transition="fade"`, slides are absolutely positioned and toggled between `opacity-100` (active) and `opacity-0` via Tailwind classes. The active slide is set to `position: relative` to push the container to its height.

---

## Usage from this project (home page)

```tsx
<Carousel
  slides={screens.map((s) => (
    <PhoneSlide key={s.src} src={s.src} heading={s.heading} />
  ))}
  options={{ align: "center", loop: true }}
  slideClassName="basis-[88%] sm:basis-[55%] lg:basis-[38%]"
  autoplayDelay={4500}
  showDots
  showProgress={false}
  showPlay={false}
  showArrows={false}
  showCounter={false}
  keyboardNavigation
/>
```

Key decisions here:
- `loop: true` — infinite looping so there are no disabled arrow states.
- `slideClassName` with responsive `basis-*` values creates the "1 active slide + partial peek of neighbours" layout.
- Progress bar, play button, and arrows are hidden to keep the UI minimal. Dots-only for navigation.
- `autoplayDelay={4500}` — slower than the default to give users time to read the caption.

---

## Exported hooks

You can use these independently if you need lower-level access:

```tsx
import {
  useDotButton,
  usePrevNextButtons,
  useAutoplay,
  useAutoplayProgress,
  DotButton,
  PrevButton,
  NextButton,
} from "@/components/ui/carousel";
```
