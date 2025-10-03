import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-xl bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20 border border-white/10">
          <div className="flex items-center gap-2 pl-4">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-black">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">ScreenMatrix</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm pr-4">
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <a href="#get-started" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">Get Started</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
