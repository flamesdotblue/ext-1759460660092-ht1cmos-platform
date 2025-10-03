import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} ScreenMatrix. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
