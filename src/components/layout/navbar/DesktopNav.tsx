interface NavLink {
  href: string;
  label: string;
}

interface DesktopNavProps {
  logo: string;
  links: NavLink[];
}

export default function DesktopNav({ logo, links }: DesktopNavProps) {
  const regularLinks = links.slice(0, -1);
  const contactLink = links[links.length - 1];

  return (
    <div className="hidden lg:flex items-center justify-between px-6 py-3">
      <a href="/" className="flex items-center">
        <img src={logo} alt="UBC Game Dev Logo" className="h-10 w-10" />
      </a>

      <div className="flex items-center gap-x-8 font-semibold flex-1 justify-center">
        {regularLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white hover:text-brand-400 transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href={contactLink.href}
          className="rounded-4xl border border-white/30 px-4 py-2 text-white hover:border-brand-500 hover:bg-brand-500 hover:text-black transition-all duration-300"
        >
          {contactLink.label}
        </a>
      </div>
    </div>
  );
}
