'use client';

import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Motion() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      document.documentElement.classList.add('motion-ready');

      gsap.set('[data-hero-line]', { yPercent: 112 });
      gsap.set('.hero .eyebrow, .heroBottom, .nav', { opacity: 0, y: 22 });

      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .to('.nav', { opacity: 1, y: 0, duration: 0.8 })
        .to('.hero .eyebrow', { opacity: 1, y: 0, duration: 0.65 }, '-=0.45')
        .to('[data-hero-line]', { yPercent: 0, duration: 1.05, stagger: 0.12 }, '-=0.4')
        .to('.heroBottom', { opacity: 1, y: 0, duration: 0.8 }, '-=0.55');

      gsap.to('.scrollProgress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.15 },
      });

      const cityLoop = gsap.to('.cityStrip .marqueeTrack', {
        xPercent: -50,
        duration: 22,
        repeat: -1,
        ease: 'none',
      });

      const statementLoop = gsap.to('.motionMarquee .marqueeTrack', {
        xPercent: -50,
        duration: 28,
        repeat: -1,
        ease: 'none',
      });

      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          gsap.to([cityLoop, statementLoop], {
            timeScale: self.direction,
            duration: 0.45,
            overwrite: true,
          });
        },
      });

      gsap.to('.heroImage', {
        yPercent: 14,
        scale: 1.14,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });

      gsap.to('.heroOrbit', {
        rotate: 340,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 },
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 70,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-heading]').forEach((heading) => {
        gsap.from(heading, {
          clipPath: 'inset(0 0 100% 0)',
          yPercent: 28,
          duration: 1.15,
          ease: 'power4.out',
          scrollTrigger: { trigger: heading, start: 'top 84%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('.photoCard').forEach((card) => {
        const image = card.querySelector('img');
        if (!image) return;
        gsap.fromTo(image, { yPercent: -8, scale: 1.12 }, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      gsap.from('.sequence > div', {
        xPercent: 35,
        opacity: 0,
        stagger: 0.16,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.sequence', start: 'top 78%', once: true },
      });

      gsap.from('.hostCard', {
        y: 120,
        opacity: 0,
        stagger: 0.18,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.hostGrid', start: 'top 82%', once: true },
      });

      gsap.to('.schoolMark', {
        rotate: 85,
        yPercent: 16,
        ease: 'none',
        scrollTrigger: { trigger: '.school', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      gsap.fromTo('.merchPhoto img', { scale: 1.12, yPercent: -5 }, {
        scale: 1.04,
        yPercent: 5,
        ease: 'none',
        scrollTrigger: { trigger: '.merch', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      gsap.to('.givePhoto', {
        scale: 1.15,
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: '.give', start: 'top bottom', end: 'bottom top', scrub: true },
      });

      gsap.from('.connectActions a', {
        x: -45,
        opacity: 0,
        stagger: 0.14,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.connectActions', start: 'top 88%', once: true },
      });
    });

    return () => {
      document.documentElement.classList.remove('motion-ready');
      context.revert();
    };
  }, []);

  return <div className="scrollProgress" aria-hidden="true" />;
}
