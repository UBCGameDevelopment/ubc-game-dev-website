interface MobileNavHeaderProps {
  logo: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileNavHeader({ logo, isOpen, onToggle }: MobileNavHeaderProps) {
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center">
          <img src={logo} alt="UBC Game Dev Logo" className="h-10 w-10" />
        </a>
        
        <button
          onClick={onToggle}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>
    </div>
  );
}
