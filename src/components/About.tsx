import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TrendingUp, FlaskConical, Users, Quote, GraduationCap } from 'lucide-react';
import { profile, aboutCards } from '@/data/portfolio';

const cardIcons = [TrendingUp, FlaskConical, Users];

const stats = [
  { value: '3', label: 'Projects Built' },
  { value: '1', label: 'Internship Completed' },
  { value: '5+', label: 'Programming Skills' },
  { value: '2', label: 'Sports Achievements' },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-violet/5 blur-[100px]" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">About Me</p>
          <h2 className="section-heading mb-4">
            More Than a Student.{' '}
            <span className="text-gradient">A Builder in Progress.</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan/50" />
            <GraduationCap className="w-5 h-5 text-cyan/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan/50" />
          </div>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Introduction text */}
          <div className={`space-y-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {profile.about.split('\n\n').map((para, i) => (
              <p key={i} className="text-muted leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-2xl font-heading font-bold text-gradient">{stat.value}</p>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div className="mt-6 p-6 glass-card glow-border relative overflow-hidden">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-violet/15" />
              <div className="flex items-start gap-3 relative">
                <div className="w-1 h-full min-h-[60px] rounded-full bg-gradient-to-b from-cyan to-violet" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-cyan mb-2">
                    Personal Philosophy
                  </p>
                  <p className="text-offwhite text-lg font-heading font-medium italic">
                    "{profile.philosophy}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {aboutCards.map((card, i) => {
              const Icon = cardIcons[i];
              return (
                <div
                  key={card.num}
                  className={`group p-6 glass-card hover:border-cyan/30 transition-all duration-700 hover:glow-border ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${200 + i * 120}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 border border-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-cyan" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-heading font-bold text-gradient">
                          {card.num}
                        </span>
                        <h3 className="text-lg font-semibold text-offwhite">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
