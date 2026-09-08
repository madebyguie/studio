"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/uplift/screenshot-write.jpg",
    alt: "Uplift's Write screen with a blank entry field",
    title: "Write",
    caption: "Capture a thought the moment it happens.",
  },
  {
    src: "/uplift/screenshot-anchors.jpg",
    alt: "Uplift's Anchors screen listing saved entries",
    title: "Anchors",
    caption: "Keep the words that matter within reach.",
  },
  {
    src: "/uplift/screenshot-meditation-soul.jpg",
    alt: "Uplift's meditation timer running the Soul ambient sound",
    title: "Meditation timer",
    caption: "Sit with it for a few quiet minutes.",
  },
  {
    src: "/uplift/screenshot-archive.jpg",
    alt: "Uplift's History screen showing a calendar of past entries",
    title: "Archive & History",
    caption: "Watch the habit take shape over time.",
  },
];

export default function UpliftCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  function closestSlideIndex() {
    const track = trackRef.current;
    if (!track) return 0;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;
    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(slideCenter - trackCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    });
    return closest;
  }

  function goTo(index: number) {
    const slide = slideRefs.current[index];
    slide?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  function handleScroll() {
    window.clearTimeout(scrollTimer.current);
    scrollTimer.current = window.setTimeout(() => {
      setActive(closestSlideIndex());
    }, 100);
  }

  const scrollTimer = useRef<number | undefined>(undefined);

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        <button
          className="carousel-arrow"
          type="button"
          aria-label="Previous screen"
          onClick={() => goTo(Math.max(0, closestSlideIndex() - 1))}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="carousel-track" ref={trackRef} onScroll={handleScroll}>
          {slides.map((slide, i) => (
            <div
              className="carousel-slide"
              key={slide.title}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
            >
              <div className="phone">
                <div className="phone-frame">
                  <Image src={slide.src} alt={slide.alt} width={240} height={520} loading="lazy" />
                </div>
              </div>
              <p className="carousel-caption">
                <strong>{slide.title}</strong>
                <span>{slide.caption}</span>
              </p>
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow"
          type="button"
          aria-label="Next screen"
          onClick={() => goTo(Math.min(slides.length - 1, closestSlideIndex() + 1))}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            className={`carousel-dot${i === active ? " active" : ""}`}
            aria-label={`Go to screen ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
