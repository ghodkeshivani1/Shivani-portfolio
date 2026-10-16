import { useEffect, useState } from 'react';
import { Download, ArrowRight, ArrowUpRight, MousePointerClick, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';

const techIcons = [
  { label: 'Java', style: 'top-[6%] left-[3%] animate-float' },
  { label: 'C', style: 'top-[12%] right-[6%] animate-float-delay' },
  { label: 'Python', style: 'bottom-[28%] left-[0%] animate-float-slow' },
  { label: 'HTML', style: 'bottom-[8%] right-[3%] animate-float' },
  { label: 'CSS', style: 'top-[42%] right-[-2%] animate-float-delay' },
];

const floatingCards = [
  { text: 'Always Learning', style: 'top-[3%] right-[14%] animate-float-delay' },
  { text: 'Building Projects', style: 'bottom-[22%] left-[10%] animate-float' },
  { text: 'Growing Every Day', style: 'bottom-[3%] right-[18%] animate-float-slow' },
];

const codeSnippet = `function learn() {\n  while(curious) {\n    explore();\n    build();\n    grow();\n  }\n  return skills;\n}`;

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = profile.titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(current.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % profile.titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 glow-radial" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-violet/10 blur-[120px]" aria-hidden />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan/10 blur-[120px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left side */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-mono uppercase tracking-wider mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            Computer Science & Engineering Student
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-3 animate-fade-in-up leading-tight">
            Hi, I'm <span className="text-gradient">Shivani Ghodke</span>
          </h1>

          <div className="h-8 md:h-10 flex items-center justify-center lg:justify-start mb-6 animate-fade-in-delay-1">
            <span className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-violet">
              {displayText}
              <span className="inline-block w-0.5 h-6 md:h-7 bg-violet ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-muted text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-delay-2">
            {profile.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 animate-fade-in-delay-3">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              Explore My Work
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={handleResume} className="btn-secondary">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>

          <div className="animate-fade-in-delay-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right side — visual composition */}
        <div className="relative h-[420px] md:h-[500px] flex items-center justify-center animate-fade-in-delay-2">
          {/* Code snippets background */}
          <pre className="absolute inset-0 flex items-center justify-center text-[10px] md:text-xs font-mono text-cyan/[0.07] pointer-events-none select-none whitespace-pre-wrap leading-relaxed overflow-hidden">
            {codeSnippet}
          </pre>

          {/* Gradient rings */}
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-cyan/20 animate-spin-slow" />
          <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border border-violet/20 animate-spin-reverse" />
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan/10 to-violet/10 animate-pulse-glow" />

          {/* Avatar with profile image */}
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-navy-50 to-navy-200 border-2 border-cyan/30 glow-cyan flex items-center justify-center overflow-hidden">
            {profile.profileImage ? (
              <img
                src={profile.profileImage}
                alt="Shivani Ghodke"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="font-heading font-bold text-5xl md:text-6xl text-gradient">
                SG
              </span>
            )}
            {/* Decorative ring around avatar */}
            <div className="absolute inset-0 rounded-full border-2 border-violet/20 animate-spin-slow" style={{ animationDuration: '30s' }} />
          </div>

          {/* Tech icons */}
          {techIcons.map((icon) => (
            <div
              key={icon.label}
              className={`absolute ${icon.style} px-3 py-1.5 glass-card text-xs font-mono text-cyan hover:text-violet hover:border-violet/40 transition-colors cursor-default`}
            >
              {icon.label}
            </div>
          ))}

          {/* Floating cards */}
          {floatingCards.map((card) => (
            <div
              key={card.text}
              className={`absolute ${card.style} px-3 py-2 glass-card text-xs font-medium text-offwhite/90 glow-border flex items-center gap-1.5`}
            >
              <Sparkles className="w-3 h-3 text-cyan" />
              {card.text}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-delay-5">
        <span className="text-xs text-muted font-mono uppercase tracking-wider flex items-center gap-1.5">
          <MousePointerClick className="w-3 h-3" />
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-muted/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-cyan animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
