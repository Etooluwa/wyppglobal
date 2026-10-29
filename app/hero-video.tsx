'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let mounted = true;
    let blockedTimer = 0;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const play = async (showFallback = false) => {
      try {
        await video.play();
        if (mounted) setBlocked(false);
      } catch {
        if (mounted && showFallback) setBlocked(true);
      }
    };

    const handleReady = () => void play(true);
    const handleVisibility = () => {
      if (!document.hidden) void play(false);
    };
    const handleFirstTouch = () => void play(true);

    video.addEventListener('loadeddata', handleReady);
    video.addEventListener('canplay', handleReady);
    document.addEventListener('visibilitychange', handleVisibility);
    document.addEventListener('touchstart', handleFirstTouch, { once: true, passive: true });
    window.addEventListener('pageshow', handleReady);

    void play(false);
    blockedTimer = window.setTimeout(() => {
      if (mounted && video.paused && video.readyState >= 2) setBlocked(true);
    }, 3000);

    return () => {
      mounted = false;
      window.clearTimeout(blockedTimer);
      video.removeEventListener('loadeddata', handleReady);
      video.removeEventListener('canplay', handleReady);
      document.removeEventListener('visibilitychange', handleVisibility);
      document.removeEventListener('touchstart', handleFirstTouch);
      window.removeEventListener('pageshow', handleReady);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="heroVideo"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/prayer-wide.jpg"
        aria-hidden="true"
        onPlaying={() => setBlocked(false)}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>
      {blocked && (
        <button className="heroVideoPlay" type="button" onClick={() => void videoRef.current?.play()}>
          <span aria-hidden="true" /> Play background
        </button>
      )}
    </>
  );
}
