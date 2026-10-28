'use client';

import { useEffect, useRef, useState } from 'react';
import { geoDistance, geoGraticule10, geoOrthographic, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { GeometryCollection, Topology } from 'topojson-specification';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import worldData from 'world-atlas/countries-110m.json';

const cities = [
  { name: 'Toronto', coordinates: [-79.38, 43.65] as [number, number] },
  { name: 'Montreal', coordinates: [-73.57, 45.5] as [number, number] },
  { name: 'Ottawa', coordinates: [-75.7, 45.42] as [number, number] },
  { name: 'Boston', coordinates: [-71.06, 42.36] as [number, number] },
  { name: 'Chicago', coordinates: [-87.63, 41.88] as [number, number] },
  { name: 'New Jersey', coordinates: [-74.4, 40.06] as [number, number] },
  { name: 'Dallas', coordinates: [-96.8, 32.78] as [number, number] },
  { name: 'Brooklyn', coordinates: [-73.95, 40.65] as [number, number] },
  { name: 'Atlanta', coordinates: [-84.39, 33.75] as [number, number] },
  { name: 'Orlando', coordinates: [-81.38, 28.54] as [number, number] },
  { name: 'London', coordinates: [-0.13, 51.51] as [number, number] },
  { name: 'Amsterdam', coordinates: [4.9, 52.37] as [number, number] },
  { name: 'Dublin', coordinates: [-6.26, 53.35] as [number, number] },
  { name: 'Accra', coordinates: [-0.19, 5.6] as [number, number] },
  { name: 'Kumasi', coordinates: [-1.62, 6.69] as [number, number] },
];

const topology = worldData as unknown as Topology<{ land: GeometryCollection }>;
const land = feature(topology, topology.objects.land);

function regionAt(progress: number) {
  if (progress < 0.4) return 'North America';
  if (progress < 0.58) return 'Europe + Africa';
  if (progress < 0.78) return 'Asia';
  if (progress < 0.93) return 'Across the Pacific';
  return 'North America';
}

export default function Globe() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const regionRef = useRef('North America');
  const [region, setRegion] = useState('North America');

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = canvas.getContext('2d');
    if (!context) return;

    const rotation = { longitude: 160, latitude: -28 };
    const projection = geoOrthographic().clipAngle(90).precision(0.2);
    const graticule = geoGraticule10();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;
    let visible = true;
    let animationFrame = 0;

    const draw = (time = 0) => {
      if (!width || !height) return;
      context.save();
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      projection
        .translate([width / 2, height / 2])
        .scale(Math.min(width, height) * 0.455)
        .rotate([rotation.longitude, rotation.latitude, 0]);

      const path = geoPath(projection, context);

      context.beginPath();
      path({ type: 'Sphere' });
      context.fillStyle = '#090909';
      context.fill();

      context.beginPath();
      path(graticule);
      context.strokeStyle = 'rgba(240, 237, 227, 0.15)';
      context.lineWidth = 0.7;
      context.stroke();

      context.beginPath();
      path(land);
      context.fillStyle = '#ff4e00';
      context.fill();
      context.strokeStyle = '#090909';
      context.lineWidth = 0.65;
      context.stroke();

      context.beginPath();
      path({ type: 'Sphere' });
      context.strokeStyle = '#090909';
      context.lineWidth = 2;
      context.stroke();

      const center: [number, number] = [-rotation.longitude, -rotation.latitude];
      const pulse = reduceMotion ? 0.5 : (Math.sin(time / 260) + 1) / 2;

      cities.forEach((city) => {
        if (geoDistance(city.coordinates, center) > Math.PI / 2 - 0.03) return;
        const point = projection(city.coordinates);
        if (!point) return;
        const [x, y] = point;

        context.beginPath();
        context.arc(x, y, 9 + pulse * 5, 0, Math.PI * 2);
        context.strokeStyle = `rgba(221, 255, 0, ${0.25 + pulse * 0.35})`;
        context.lineWidth = 1.5;
        context.stroke();

        context.beginPath();
        context.arc(x, y, 4.2, 0, Math.PI * 2);
        context.fillStyle = '#ddff00';
        context.fill();
        context.strokeStyle = '#090909';
        context.lineWidth = 1.5;
        context.stroke();

        const alignRight = x > width * 0.62;
        context.font = `800 ${Math.max(10, Math.min(13, width / 46))}px Arial`;
        context.textAlign = alignRight ? 'right' : 'left';
        context.textBaseline = 'middle';
        context.fillStyle = '#f0ede3';
        context.shadowColor = '#090909';
        context.shadowBlur = 6;
        context.fillText(city.name.toUpperCase(), x + (alignRight ? -12 : 12), y - 1);
        context.shadowBlur = 0;
      });

      context.restore();
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      draw(performance.now());
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { rootMargin: '20%' });
    intersectionObserver.observe(root);

    const animatePulse = (time: number) => {
      if (visible) draw(time);
      animationFrame = requestAnimationFrame(animatePulse);
    };

    const gsapContext = gsap.context(() => {
      if (!reduceMotion) {
        gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'top 88%',
            end: 'bottom 12%',
            scrub: 0.35,
            onUpdate: (self) => {
              const nextRegion = regionAt(self.progress);
              if (nextRegion !== regionRef.current) {
                regionRef.current = nextRegion;
                setRegion(nextRegion);
              }
              draw(performance.now());
            },
          },
        })
          .to(rotation, { longitude: 100, duration: 0.2, ease: 'power2.out' })
          .to(rotation, { longitude: 100, duration: 0.2, ease: 'none' })
          .to(rotation, { longitude: -260, duration: 0.6, ease: 'none' });
      }
    }, root);

    resize();
    if (!reduceMotion) animationFrame = requestAnimationFrame(animatePulse);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      gsapContext.revert();
    };
  }, []);

  return (
    <div className="globeJourney" ref={rootRef}>
      <div className="globeSticky">
        <div className="globeTopline">
          <span>Now crossing</span>
          <strong aria-live="polite">{region}</strong>
        </div>
        <canvas ref={canvasRef} aria-label="A scroll-controlled globe showing WYPP cities around the world" />
        <div className="globeLegend">
          <span><i /> WYPP city</span>
          <span>Scroll to move the world <i className="downIcon" aria-hidden="true" /></span>
        </div>
      </div>
    </div>
  );
}
