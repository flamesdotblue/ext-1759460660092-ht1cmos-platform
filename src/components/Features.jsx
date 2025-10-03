import React from 'react';
import { Shield, Zap, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Modular Layouts',
    desc: 'Compose dashboards and product views with flexible, responsive screen grids.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'High Performance',
    desc: 'Optimized rendering ensures smooth interactions and fast load times.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure by Design',
    desc: 'Best-in-class practices for authentication, data privacy, and integrity.',
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Polished UX',
    desc: 'Delightful animations and thoughtful details that drive engagement.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">A robust foundation for modern teams</h2>
          <p className="mt-3 text-white/70">
            Build, iterate, and ship faster with a thoughtfully designed toolkit and a composable architecture.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-white/75">{f.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <button className="mt-4 text-sm font-medium text-white/90 underline-offset-4 hover:underline">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
