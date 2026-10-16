import { useEffect, useState } from 'react';
import { Menu, X, Download, ArrowUp } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);

      const sections = navLinks.map((l) => l.id);
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResume = () => {
    if (profile.resumeUrl) {
      const link = document.createElement('a');
      link.href = profile.resumeUrl;
      link.download = 'Shivani_Ghodke_Professional_Resume.docx';
      link.click();
    } else {
      document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/80 backdrop-blur-lg border-b border-white/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center font-heading font-bold text-navy text-lg group-hover:scale-110 transition-transform duration-300">
              SG
            </div>
            <span className="font-heading font-semibold text-offwhite text-lg hidden sm:block">
              Shivani Ghodke
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-cyan bg-cyan/10'
                    : 'text-muted hover:text-offwhite hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop resume button */}
          <button
            onClick={handleResume}
            className="hidden lg:inline-flex btn-primary text-sm px-5 py-2.5"
          >
            <Download className="w-4 h-4" />
            Resume
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-offwhite p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-1 bg-navy/95 backdrop-blur-lg border-t border-white/10 mt-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-cyan bg-cyan/10'
                    : 'text-muted hover:text-offwhite hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                handleResume();
              }}
              className="btn-primary text-sm mt-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      </nav>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center text-navy shadow-lg transition-all duration-300 hover:scale-110 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
