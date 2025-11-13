import GlowEffect from './GlowEffect';
import DecorativeOrbs from './DecorativeOrbs';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ links, isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed left-4 right-4 top-32 z-[95] lg:hidden">
        <div className="group relative">
          <GlowEffect />
          
          {/* Menu content */}
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/10 overflow-hidden">
            <DecorativeOrbs />
            
            <div className="relative z-10 flex flex-col gap-2 p-6 font-semibold">
              {links.map((link) => {
                const isContact = link.label === 'Contact Us';
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`${
                      isContact
                        ? 'mt-3 rounded-4xl border border-white/30 px-4 py-3 text-center text-white hover:border-brand-500 hover:bg-brand-500 hover:text-black transition-all duration-300'
                        : 'rounded-2xl px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
