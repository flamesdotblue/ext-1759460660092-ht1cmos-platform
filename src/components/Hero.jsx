import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
            Modern • Innovative • Digital
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Elevate your product with immersive, multi-screen experiences
          </h1>
          <p className="mt-4 text-white/80 sm:text-lg">
            Showcase data, apps, and content across a dynamic grid of screens. Built for technology teams that value performance, clarity, and design.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              id="get-started"
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
            >
              Explore Features <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/40 px-5 py-3 font-medium text-white transition hover:bg-black/60"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
