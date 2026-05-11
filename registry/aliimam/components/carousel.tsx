//@ts-nocheck
"use client"

import type React from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, X, Pause, Play } from "lucide-react"

// ─────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────

type ThumbPosition = "bottom" | "left" | "right"

type PropType = {
  slides?: React.ReactNode[]
  options?: EmblaOptionsType
  thumbnails?: React.ReactNode[]
  thumbPosition?: ThumbPosition
  showArrows?: boolean
  showProgress?: boolean
  showDots?: boolean
  showCounter?: boolean
  showPlay?: boolean
  keyboardNavigation?: boolean
  lightbox?: boolean
  transition?: "slide" | "fade"
  autoplayDelay?: number
  captions?: string[]
  /** Class applied to every slide wrapper. Overrides slideBasis when set. */
  slideClassName?: string
  /** CSS flex-basis for each slide when slideClassName is not set. Default "100%". */
  slideBasis?: string
}

// ─────────────────────────────────────────────
//  MAIN CAROUSEL
// ─────────────────────────────────────────────

const Carousel: React.FC<PropType> = (props) => {
  const {
    slides = [],
    options,
    thumbnails = [],
    thumbPosition = "bottom",
    showArrows = false,
    showProgress = true,
    showDots = true,
    showPlay = true,
    showCounter = false,
    keyboardNavigation = false,
    lightbox = false,
    transition = "slide",
    autoplayDelay = 3000,
    captions = [],
    slideClassName,
    slideBasis = "100%",
  } = props

  const progressNode = useRef<HTMLDivElement>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options },
    autoplayDelay > 0
      ? [Autoplay({ playOnInit: true, delay: autoplayDelay })]
      : []
  )

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi)

  const { showAutoplayProgress } = useAutoplayProgress(
    emblaApi,
    progressNode as React.RefObject<HTMLElement>
  )

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  })

  useEffect(() => {
    if (!emblaApi || !thumbEmblaApi) return
    emblaApi.on("select", () => {
      thumbEmblaApi.scrollTo(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi, thumbEmblaApi])

  useEffect(() => {
    if (!keyboardNavigation || !emblaApi) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") emblaApi.scrollPrev()
      if (e.key === "ArrowRight") emblaApi.scrollNext()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [keyboardNavigation, emblaApi])

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightbox])

  const handleSlideClick = (index: number) => {
    if (!lightbox) return
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const isVerticalThumb =
    thumbnails && (thumbPosition === "left" || thumbPosition === "right")

  const hasThumbnails = thumbnails && thumbnails.length > 0

  return (
    <div className={`flex ${isVerticalThumb ? "flex-row gap-3" : "flex-col"}`}>
      {hasThumbnails && thumbPosition === "left" && (
        <ThumbStrip
          emblaRef={thumbEmblaRef}
          thumbnails={thumbnails}
          selectedIndex={selectedIndex}
          onDotButtonClick={onDotButtonClick}
          onAutoplayButtonClick={onAutoplayButtonClick}
          direction="vertical"
        />
      )}

      <div className="min-w-0 flex-1">
        <div className="overflow-hidden" ref={emblaRef}>
          <div
            className={`flex touch-pan-y touch-pinch-zoom ${
              transition === "fade" ? "relative" : ""
            }`}
          >
            {slides.map((slideContent, index) => (
              <div
                key={index}
                onClick={() => handleSlideClick(index)}
                className={`${
                  transition === "fade"
                    ? `absolute inset-0 transition-opacity duration-700 ${
                        index === selectedIndex
                          ? "relative opacity-100"
                          : "absolute opacity-0"
                      }`
                    : slideClassName ?? "transform-gpu pl-3"
                } ${lightbox ? "cursor-zoom-in" : ""}`}
                style={
                  transition !== "fade" && !slideClassName
                    ? { flex: `0 0 ${slideBasis}` }
                    : undefined
                }
              >
                {slideContent}
              </div>
            ))}
          </div>
        </div>

        {captions && captions[selectedIndex] && (
          <p className="text-muted-foreground mt-2 px-4 text-center text-sm italic transition-all duration-300">
            {captions[selectedIndex]}
          </p>
        )}

        {hasThumbnails && thumbPosition === "bottom" && (
          <ThumbStrip
            emblaRef={thumbEmblaRef}
            thumbnails={thumbnails}
            selectedIndex={selectedIndex}
            onDotButtonClick={onDotButtonClick}
            onAutoplayButtonClick={onAutoplayButtonClick}
            direction="horizontal"
          />
        )}

        <div className="mx-auto mt-4 flex max-w-full items-center justify-center gap-3">
          {showArrows && (
            <div className="flex items-center gap-1">
              <PrevButton
                onClick={() => onAutoplayButtonClick(() => onPrevButtonClick())}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={() => onAutoplayButtonClick(() => onNextButtonClick())}
                disabled={nextBtnDisabled}
              />
            </div>
          )}

          {showDots && (
            <div className="flex w-full justify-center gap-2">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() =>
                    onAutoplayButtonClick(() => onDotButtonClick(index))
                  }
                  className={`h-2 w-2 rounded-full border-2 border-gray-300 dark:border-gray-600 transition-colors duration-200 ${
                    index === selectedIndex
                      ? "bg-gray-900 dark:bg-white border-gray-900 dark:border-white"
                      : "bg-transparent hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          )}

          {showCounter && (
            <span className="text-muted-foreground w-full text-xs font-medium text-nowrap tabular-nums">
              {selectedIndex + 1} / {scrollSnaps.length}
            </span>
          )}

          {showProgress && autoplayDelay > 0 && (
            <div
              className={`relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 transition-opacity duration-300 ease-in-out ${
                showAutoplayProgress ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="bg-gray-900 dark:bg-white absolute top-0 bottom-0 -left-full w-full animate-[autoplay-progress_linear_1] [animation-play-state:running]"
                ref={progressNode}
                style={{
                  animationPlayState: showAutoplayProgress ? "running" : "paused",
                }}
              />
            </div>
          )}

          {showPlay && autoplayDelay > 0 && (
            <button
              onClick={toggleAutoplay}
              type="button"
              className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
            >
              {autoplayIsPlaying ? (
                <Pause className="h-3.5 w-3.5" fill="currentColor" />
              ) : (
                <Play className="h-3.5 w-3.5" fill="currentColor" />
              )}
            </button>
          )}
        </div>
      </div>

      {hasThumbnails && thumbPosition === "right" && (
        <ThumbStrip
          emblaRef={thumbEmblaRef}
          thumbnails={thumbnails}
          selectedIndex={selectedIndex}
          onDotButtonClick={onDotButtonClick}
          onAutoplayButtonClick={onAutoplayButtonClick}
          direction="vertical"
        />
      )}

      {lightbox && lightboxOpen && (
        <Lightbox
          slides={slides}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}

// ─────────────────────────────────────────────
//  THUMBNAIL STRIP
// ─────────────────────────────────────────────

type ThumbStripProps = {
  emblaRef: React.RefCallback<HTMLElement>
  thumbnails: React.ReactNode[]
  selectedIndex: number
  onDotButtonClick: (index: number) => void
  onAutoplayButtonClick: (callback: () => void) => void
  direction: "horizontal" | "vertical"
}

const ThumbStrip: React.FC<ThumbStripProps> = ({
  emblaRef,
  thumbnails,
  selectedIndex,
  onDotButtonClick,
  onAutoplayButtonClick,
  direction,
}) => {
  return (
    <div
      className={`flex h-full items-center justify-center overflow-hidden ${
        direction === "vertical" ? "w-20 flex-col" : "mt-3 h-full w-full"
      }`}
      ref={emblaRef}
    >
      <div
        className={`flex gap-2 ${
          direction === "vertical" ? "flex-col" : "flex-row"
        }`}
      >
        {thumbnails?.map((thumb, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onAutoplayButtonClick(() => onDotButtonClick(index))}
            className={`flex-shrink-0 overflow-hidden rounded-md border-2 object-cover transition-all duration-200 ${
              direction === "vertical" ? "h-auto w-16" : "h-12 w-auto"
            } ${
              index === selectedIndex
                ? "scale-105 border-gray-900 dark:border-white opacity-100"
                : "border-transparent opacity-30 hover:opacity-70"
            }`}
          >
            {thumb}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
//  LIGHTBOX
// ─────────────────────────────────────────────

type LightboxProps = {
  slides: React.ReactNode[]
  initialIndex: number
  onClose: () => void
}

const Lightbox: React.FC<LightboxProps> = ({ slides, initialIndex, onClose }) => {
  const [current, setCurrent] = useState(initialIndex)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-4 text-white transition-colors hover:text-gray-300"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <button
        type="button"
        className="absolute left-4 text-white transition-colors hover:text-gray-300"
        onClick={(e) => { e.stopPropagation(); prev() }}
      >
        <ChevronLeft size={40} />
      </button>
      <div
        className="max-h-[85vh] w-full max-w-4xl px-16"
        onClick={(e) => e.stopPropagation()}
      >
        {slides[current]}
      </div>
      <button
        type="button"
        className="absolute right-4 text-white transition-colors hover:text-gray-300"
        onClick={(e) => { e.stopPropagation(); next() }}
      >
        <ChevronRight size={40} />
      </button>
      <span className="absolute bottom-4 text-sm text-white/60 tabular-nums">
        {current + 1} / {slides.length}
      </span>
    </div>
  )
}

// ─────────────────────────────────────────────
//  HOOKS
// ─────────────────────────────────────────────

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return { selectedIndex, scrollSnaps, onDotButtonClick }
}

export const DotButton: React.FC<PropTypeButton> = (props) => {
  const { children, ...restProps } = props
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}

type UseAutoplayProgressType = { showAutoplayProgress: boolean }

export const useAutoplayProgress = <ProgressElement extends HTMLElement>(
  emblaApi: EmblaCarouselType | undefined,
  progressNode: React.RefObject<ProgressElement>
): UseAutoplayProgressType => {
  const [showAutoplayProgress, setShowAutoplayProgress] = useState(false)
  const animationName = useRef("")
  const timeoutId = useRef(0)
  const rafId = useRef(0)

  const startProgress = useCallback((timeUntilNext: number | null) => {
    const node = progressNode.current
    if (!node) return
    if (timeUntilNext === null) return

    if (!animationName.current) {
      const style = window.getComputedStyle(node)
      animationName.current = style.animationName
    }

    node.style.animationName = "none"
    node.style.transform = "translate3d(0,0,0)"

    rafId.current = window.requestAnimationFrame(() => {
      timeoutId.current = window.setTimeout(() => {
        node.style.animationName = animationName.current
        node.style.animationDuration = `${timeUntilNext}ms`
      }, 0)
    })

    setShowAutoplayProgress(true)
  }, [])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    emblaApi
      .on("autoplay:timerset", () => startProgress(autoplay.timeUntilNext()))
      .on("autoplay:timerstopped", () => setShowAutoplayProgress(false))
  }, [emblaApi])

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafId.current)
      clearTimeout(timeoutId.current)
    }
  }, [])

  return { showAutoplayProgress }
}

type UseAutoplayType = {
  autoplayIsPlaying: boolean
  toggleAutoplay: () => void
  onAutoplayButtonClick: (callback: () => void) => void
}

export const useAutoplay = (
  emblaApi: EmblaCarouselType | undefined
): UseAutoplayType => {
  const [autoplayIsPlaying, setAutoplayIsPlaying] = useState(false)

  const onAutoplayButtonClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return
      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop
      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
    setAutoplayIsPlaying(autoplay.isPlaying())
    emblaApi
      .on("autoplay:play", () => setAutoplayIsPlaying(true))
      .on("autoplay:stop", () => setAutoplayIsPlaying(false))
      .on("reInit", () => setAutoplayIsPlaying(autoplay.isPlaying()))
  }, [emblaApi])

  return { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick }
}

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onSelect])

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick }
}

type PropTypeButton = React.PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const PrevButton: React.FC<PropTypeButton> = (props) => {
  const { children, ...restProps } = props
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
      {...restProps}
    >
      <ChevronLeft className="h-4 w-4" />
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropTypeButton> = (props) => {
  const { children, ...restProps } = props
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
      {...restProps}
    >
      <ChevronRight className="h-4 w-4" />
      {children}
    </button>
  )
}

export { Carousel }
