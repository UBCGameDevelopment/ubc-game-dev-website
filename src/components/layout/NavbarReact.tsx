import { useState } from 'react';
import GlowEffect from './navbar/GlowEffect';
import DecorativeOrbs from './navbar/DecorativeOrbs';
import DesktopNav from './navbar/DesktopNav';
import MobileNavHeader from './navbar/MobileNavHeader';
import MobileMenu from './navbar/MobileMenu';

interface NavbarProps {
  logo: string;
  links: Array<{ href: string; label: string; }>;
}

export default function Navbar({ logo, links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Wrapper */}
      <div className="mx-auto mt-8 w-full max-w-6xl px-4 z-[100]">
        {/* Main Navbar */}
        <nav className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/10 overflow-visible">
          <GlowEffect />
          <DecorativeOrbs />
          
          <div className="relative z-10">
            <DesktopNav logo={logo} links={links} />
            <MobileNavHeader 
              logo={logo} 
              isOpen={isOpen} 
              onToggle={() => setIsOpen(!isOpen)} 
            />
          </div>
        </nav>
      </div>

      <MobileMenu 
        links={links} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
