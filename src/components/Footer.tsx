import { Linkedin, Github, ArrowUp, Download } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
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

  return (
    <footer className="relative border-t border-white/10 bg-navy-700/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-sm opacity-20" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-12">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <button
            onClick={() => scrollToTop()}
            className="flex items-center gap-2 group"
            aria-label="Back to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center font-heading font-bold text-navy text-lg group-hover:scale-110 transition-transform duration-300">
              SG
            </div>
            <span className="font-heading font-semibold text-offwhite">
              Shivani Ghodke
            </span>
          </button>

          {/* Tagline */}
          <p className="text-sm text-muted max-w-md">
            {profile.tagline}
          </p>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-muted hover:text-cyan transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-cyan hover:border-cyan/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-cyan hover:border-cyan/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            <button
              onClick={handleResume}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-cyan hover:border-cyan/30 transition-all duration-300"
              aria-label="Download Resume"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-cyan hover:border-cyan/30 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Closing text */}
          <div className="space-y-2">
            <p className="text-sm text-muted">
              Designed with curiosity and built with purpose by Shivani Ghodke.
            </p>
            <p className="text-sm font-heading font-medium text-gradient italic">
              "Every line of code is another step forward."
            </p>
            <p className="text-xs text-muted/60 font-mono">
              &copy; {year} Shivani Ghodke. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
